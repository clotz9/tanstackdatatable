"use client";

import React from "react";

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-2">
        <a href="#" className="block px-2 py-1 rounded hover:bg-muted dark:hover:bg-gray-700">Dashboard</a>
        <a href="#" className="block px-2 py-1 rounded bg-muted dark:bg-gray-700 font-semibold">Users</a>
        <a href="#" className="block px-2 py-1 rounded hover:bg-muted dark:hover:bg-gray-700">Settings</a>
      </nav>
    </aside>
  );
}