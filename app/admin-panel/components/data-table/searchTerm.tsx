"use client"

import { Input } from "@/components/ui/input";

interface SearchTermProps {
    searchTerm: string;
  setSearchTermAction: (value: string) => void;
}

export function SearchTerm({ searchTerm, setSearchTermAction }: SearchTermProps) {
  return (
    <Input
      placeholder="Search by name or email..."
      value={searchTerm}
      onChange={(e) => setSearchTermAction(e.target.value)}
      className="w-full lg:w-80"
    />
  );
}
