"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../dark-mode-toggle";
import { DataTable } from "../data-table";
import { User } from "../data-table/columns";

interface MainContentProps {
  data: User[];
  filterRoles: string[];
  filterStatus: string[];
}

export default function MainContent({
  data,
  filterRoles,
  filterStatus,
}: MainContentProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="w-full flex justify-end mb-4">
        <Button variant="ghost" onClick={toggleTheme} size="icon">
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
      <DataTable
        data={data}
        filterRoles={filterRoles}
        filterStatus={filterStatus}
      />
    </>
  );
}
