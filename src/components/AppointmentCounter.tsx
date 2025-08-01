import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Users, TrendingDown } from "lucide-react";

interface AppointmentCounterProps {
  onSlotBooked?: () => void;
}

export const AppointmentCounter = ({ onSlotBooked }: AppointmentCounterProps) => {
  const [availableSlots, setAvailableSlots] = useState(() => {
    const saved = localStorage.getItem('availableSlots');
    return saved ? parseInt(saved) : 250;
  });
  const [totalBooked, setTotalBooked] = useState(() => {
    const saved = localStorage.getItem('totalBooked');
    return saved ? parseInt(saved) : 0;
  });

  // Function to reduce slots when booking happens
  const reduceSlot = () => {
    setAvailableSlots(prev => {
      const newSlots = prev - 1;
      localStorage.setItem('availableSlots', newSlots.toString());
      return newSlots;
    });
    setTotalBooked(prev => {
      const newBooked = prev + 1;
      localStorage.setItem('totalBooked', newBooked.toString());
      return newBooked;
    });
  };

  // Expose reduceSlot function globally
  useEffect(() => {
    (window as any).reduceAppointmentSlot = reduceSlot;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (availableSlots > 180) {
        setAvailableSlots(prev => {
          const newSlots = prev - 1;
          localStorage.setItem('availableSlots', newSlots.toString());
          return newSlots;
        });
        setTotalBooked(prev => {
          const newBooked = prev + 1;
          localStorage.setItem('totalBooked', newBooked.toString());
          return newBooked;
        });
      }
    }, Math.random() * 50000 + 40000); // Random interval between 40-90 seconds

    return () => clearInterval(interval);
  }, [availableSlots]);

  const percentage = ((250 - availableSlots) / 250) * 100;

  return (
    <div className="relative">
      <Card className="relative w-fit h-16 p-5 bg-card/90 backdrop-blur-md border-primary/20 shadow-lg hover:shadow-glow transition-all duration-300 animate-fade-in-up overflow-hidden">
        {/* Wave Animation Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-primary animate-pulse"></div>
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-primary/30 rounded-full animate-ping"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-between h-full gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Calendar className="h-4 w-4 text-white" />
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-semibold text-foreground">Available Slots:</span>
                <span className="text-xl font-bold font-playfair text-primary">
                  {availableSlots}
                </span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="h-3 w-3" />
                <span className="text-xs">{totalBooked} booked</span>
                {availableSlots < 240 && (
                  <>
                    <TrendingDown className="h-3 w-3 text-warning ml-1" />
                    <span className="text-xs text-warning">Fast!</span>
                  </>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </Card>
    </div>
  );
};