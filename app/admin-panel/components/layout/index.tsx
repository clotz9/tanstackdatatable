"use client";

import React from "react";
import Sidebar from "../sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted dark:bg-gray-900 text-gray-900 dark:text-white flex">
      <Sidebar />
      <main className="flex-1 px-4 py-6 flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
