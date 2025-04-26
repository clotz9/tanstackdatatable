"use client"

import { Button } from "@/components/ui/button";

interface FilterButtonProps {
    selectedTerm: string;
    setSelectedTermAction: (role: string) => void;
    filterTerm: string[];
  }
  
export function FilterButton({ selectedTerm, setSelectedTermAction, filterTerm }: FilterButtonProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filterTerm.map((role) => (
        <Button
          key={role}
          variant={selectedTerm === role ? "default" : "outline"}
          onClick={() => setSelectedTermAction(role)}
        >
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </Button>
      ))}
    </div>
  );
}
