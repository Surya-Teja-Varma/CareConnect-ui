import { Doctor } from "@/data/doctors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, DollarSign, ArrowLeft, Calendar, Award } from "lucide-react";
import { BookingForm } from "./BookingForm";
import { useState } from "react";

interface DoctorProfileProps {
  doctor: Doctor;
  onBack: () => void;
}

export const DoctorProfile = ({ doctor, onBack }: DoctorProfileProps) => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  if (showBookingForm) {
    return <BookingForm doctor={doctor} onBack={() => setShowBookingForm(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-hero py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={onBack}
          className="mb-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Doctors
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctor Info Card */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-primary/10 hover:shadow-glow transition-all duration-300 animate-fade-in-up">
              <CardHeader className="text-center pb-4">
                <div className="profile-image mx-auto mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardTitle className="font-playfair text-3xl text-foreground mb-2">
                  {doctor.name}
                </CardTitle>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {doctor.specialization}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mx-auto mb-1" />
                    <div className="font-semibold">{doctor.rating}</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="font-semibold">{doctor.experience}y</div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <DollarSign className="h-5 w-5 text-success mx-auto mb-1" />
                    <div className="font-semibold">${doctor.consultation_fee}</div>
                    <div className="text-sm text-muted-foreground">Consultation</div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <Calendar className="h-5 w-5 text-accent mx-auto mb-1" />
                    <div className="font-semibold">{doctor.availability.length}</div>
                    <div className="text-sm text-muted-foreground">Days/Week</div>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    About Dr. {doctor.name.split(' ')[1]}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
                </div>

                {/* Location */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location
                  </h3>
                  <p className="text-muted-foreground">{doctor.location}</p>
                </div>

                {/* Qualifications */}
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Qualifications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.qualifications.map((qual, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-sm px-3 py-1 border-primary/30 text-primary"
                      >
                        {qual}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-primary/10 sticky top-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-xl font-playfair">Book Appointment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-hero rounded-lg">
                  <h4 className="font-semibold mb-2">Availability</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.availability.map((day) => (
                      <Badge 
                        key={day} 
                        variant="secondary" 
                        className="text-sm"
                      >
                        {day}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold font-playfair text-primary mb-1">
                    ${doctor.consultation_fee}
                  </div>
                  <div className="text-sm text-muted-foreground">Consultation Fee</div>
                </div>

                <Button 
                  onClick={() => setShowBookingForm(true)}
                  className="btn-primary w-full h-12 text-lg font-semibold pulse-glow"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Now
                </Button>

                <div className="text-xs text-center text-muted-foreground">
                  Next available: Today, 2:00 PM
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};