import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search doctors by name or specialization..." }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="focus-ring focus-dot relative p-1">
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none z-20" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-focus pl-12 pr-12 h-14 text-lg border-2 border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl bg-card/50 backdrop-blur-sm"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive z-20"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {/* Search suggestions overlay */}
      {searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-30 overflow-hidden animate-fade-in-up">
          <div className="p-3 border-b border-border">
            <p className="text-sm text-muted-foreground">
              Searching for "{searchTerm}"...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};