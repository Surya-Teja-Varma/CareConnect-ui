import { useState } from "react";
import { Doctor } from "@/data/doctors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, ArrowLeft, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface BookingFormProps {
  doctor: Doctor;
  onBack: () => void;
}

export const BookingForm = ({ doctor, onBack }: BookingFormProps) => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    reason: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !formData.patientName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Appointment Booked Successfully! 🎉",
      description: `Your appointment with ${doctor.name} is confirmed for ${format(date, "PPP")} at ${time}.`,
      variant: "default"
    });

    // Reduce available slot when appointment is booked
    if ((window as any).reduceAppointmentSlot) {
      (window as any).reduceAppointmentSlot();
    }

    setIsSubmitting(false);
    
    // Reset form and go back after success
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={onBack}
          className="mb-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Profile
        </Button>

        <Card className="shadow-lg border-primary/10 hover:shadow-glow transition-all duration-300 animate-fade-in-up">
          <CardHeader className="text-center">
            <CardTitle className="font-playfair text-3xl text-foreground mb-2">
              Book Appointment
            </CardTitle>
            <p className="text-muted-foreground">
              Schedule your consultation with {doctor.name}
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Doctor Info Summary */}
              <div className="p-4 bg-gradient-hero rounded-lg border border-primary/20">
                <div className="flex items-center gap-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{doctor.name}</h3>
                    <p className="text-muted-foreground">{doctor.specialization}</p>
                    <p className="text-primary font-medium">${doctor.consultation_fee}</p>
                  </div>
                </div>
              </div>

              {/* Patient Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="focus-ring space-y-2">
                  <Label htmlFor="patientName" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Patient Name *
                  </Label>
                  <Input
                    id="patientName"
                    placeholder="Enter your full name"
                    value={formData.patientName}
                    onChange={(e) => handleInputChange("patientName", e.target.value)}
                    className="focus:ring-2 focus:ring-primary/20 border-primary/20"
                    required
                  />
                </div>

                <div className="focus-ring space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="focus:ring-2 focus:ring-primary/20 border-primary/20"
                    required
                  />
                </div>

                <div className="md:col-span-2 focus-ring space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="focus:ring-2 focus:ring-primary/20 border-primary/20"
                    required
                  />
                </div>
              </div>

              {/* Date and Time Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                    Select Date *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-primary/20 hover:border-primary/40",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-card border border-primary/20 shadow-lg" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Select Time *
                  </Label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger className="border-primary/20 hover:border-primary/40">
                      <SelectValue placeholder="Choose a time slot" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border border-primary/20 shadow-lg">
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot} className="hover:bg-primary/10">
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Reason for Visit */}
              <div className="focus-ring space-y-2">
                <Label htmlFor="reason" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  Reason for Visit (Optional)
                </Label>
                <Textarea
                  id="reason"
                  placeholder="Briefly describe your symptoms or reason for consultation"
                  value={formData.reason}
                  onChange={(e) => handleInputChange("reason", e.target.value)}
                  className="focus:ring-2 focus:ring-primary/20 border-primary/20 min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full h-12 text-lg font-semibold pulse-glow"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Booking Appointment...
                  </div>
                ) : (
                  <>
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    Confirm Booking
                  </>
                )}
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                You will receive a confirmation email shortly after booking.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};