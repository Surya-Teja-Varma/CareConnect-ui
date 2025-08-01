import { useState, useMemo } from "react";
import { doctors, Doctor } from "@/data/doctors";
import { DoctorCard } from "@/components/DoctorCard";
import { DoctorProfile } from "@/components/DoctorProfile";
import { SearchBar } from "@/components/SearchBar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AppointmentCounter } from "@/components/AppointmentCounter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Stethoscope, Shield, Users, Star, TrendingUp, Activity } from "lucide-react";

const Index = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = useMemo(() => {
    if (!searchTerm) return doctors;
    
    return doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const specializations = useMemo(() => {
    const specs = Array.from(new Set(doctors.map(doc => doc.specialization)));
    return specs.slice(0, 6); // Show top 6 specializations
  }, []);

  if (selectedDoctor) {
    return (
      <DoctorProfile
        doctor={selectedDoctor}
        onBack={() => setSelectedDoctor(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative bg-gradient-hero border-b border-primary/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <div className="flex justify-between items-start mb-8">
            <AppointmentCounter />
            <ThemeToggle />
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Find Your Perfect
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Doctor</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Connect with top healthcare professionals and book appointments instantly. 
              Experience premium medical care with cutting-edge technology.
            </p>

            {/* Search Bar */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Search doctors by name or specialization..."
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold font-playfair text-primary mb-2">250+</div>
                <div className="text-sm text-muted-foreground">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-playfair text-primary mb-2">50k+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-playfair text-primary mb-2">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-playfair text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specializations Filter */}
      <div className="bg-card/50 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-center gap-2">
            <Button
              variant={searchTerm === "" ? "default" : "outline"}
              onClick={() => setSearchTerm("")}
              className="h-8 px-4 text-xs transition-all duration-300 hover:scale-105"
            >
              All
            </Button>
            {specializations.map((spec) => (
              <Button
                key={spec}
                variant={searchTerm === spec ? "default" : "outline"}
                onClick={() => setSearchTerm(spec)}
                className="h-8 px-3 text-xs transition-all duration-300 hover:scale-105"
              >
                {spec.split(' ')[0]}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Results Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-semibold font-playfair text-foreground">
              {searchTerm ? `Results for "${searchTerm}"` : "Available Doctors"}
            </h3>
            <p className="text-muted-foreground mt-1">
              {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          {filteredDoctors.length > 0 && (
            <Badge variant="secondary" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              {filteredDoctors.length} Available
            </Badge>
          )}
        </div>

        {/* Doctors Grid */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={doctor.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DoctorCard
                  doctor={doctor}
                  onClick={setSelectedDoctor}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted/30 rounded-full flex items-center justify-center">
              <Stethoscope className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No doctors found
            </h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or browse all specializations.
            </p>
            <Button onClick={() => setSearchTerm("")} variant="outline">
              View All Doctors
            </Button>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-gradient-hero border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
              Why Choose CareConnect?
            </h3>
            <p className="text-muted-foreground text-lg">
              Experience the future of healthcare with our premium platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Secure & Private</h4>
              <p className="text-muted-foreground">Your health data is protected with enterprise-grade security</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Expert Doctors</h4>
              <p className="text-muted-foreground">Connect with board-certified specialists across all fields</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2">5-Star Service</h4>
              <p className="text-muted-foreground">Exceptional patient experience with 24/7 support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-primary animate-pulse" />
              <span className="font-playfair text-xl font-semibold">CareConnect</span>
            </div>
            <p className="text-muted-foreground">
              © 2025 CareConnect. Providing premium healthcare solutions worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
