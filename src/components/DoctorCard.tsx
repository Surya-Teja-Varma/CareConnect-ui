import { Doctor } from "@/data/doctors";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, DollarSign } from "lucide-react";
import { useState } from "react";

interface DoctorCardProps {
  doctor: Doctor;
  onClick: (doctor: Doctor) => void;
}

export const DoctorCard = ({ doctor, onClick }: DoctorCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card 
      className="doctor-card group cursor-pointer focus-ring focus-dot"
      onClick={() => onClick(doctor)}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Profile Image with Moving Border */}
          <div className="profile-image relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
              <img
                src={doctor.image}
                alt={doctor.name}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />
            </div>
            {/* Pulse dot indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white pulse-glow"></div>
          </div>

          {/* Doctor Info */}
          <div className="space-y-2 w-full">
            <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {doctor.name}
            </h3>
            
            <Badge variant="secondary" className="text-sm font-medium">
              {doctor.specialization}
            </Badge>

            {/* Rating and Experience */}
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{doctor.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{doctor.experience}y exp</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="truncate">{doctor.location}</span>
            </div>

            {/* Consultation Fee */}
            <div className="flex items-center justify-center gap-1 text-sm font-medium text-primary">
              <DollarSign className="h-4 w-4" />
              <span>${doctor.consultation_fee}</span>
            </div>

            {/* Availability Indicator */}
            <div className="flex flex-wrap justify-center gap-1 mt-3">
              {doctor.availability.map((day) => (
                <Badge 
                  key={day} 
                  variant="outline" 
                  className="text-xs px-2 py-1 border-primary/30 text-primary"
                >
                  {day}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};