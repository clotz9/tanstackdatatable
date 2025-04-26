"use client";

import React from "react";
import { User, columns } from "./columns";
import { SearchTerm } from "./searchTerm";
import { FilterButton } from "./filterButton";
import { DataTableComponent as Table } from "./dataTable";

import { useDataTable } from "@/app/admin-panel/hooks/useDataTable";

interface DataTableProps {
  data: User[];
  filterRoles: string[];
  filterStatus: string[];
}

export function DataTable({ data, filterRoles, filterStatus }: DataTableProps) {
  const {
    search,
    setSearch,
    selectedRole,
    setSelectedRole,
    selectedStatus,
    setSelectedStatus,
  } = useDataTable();

  return (
    <div className="w-full max-w-[1440px] bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 space-y-6">
      <h1 className="text-2xl font-semibold">User Management</h1>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <SearchTerm searchTerm={search} setSearchTermAction={setSearch} />

        <FilterButton
          selectedTerm={selectedRole}
          setSelectedTermAction={setSelectedRole}
          filterTerm={filterRoles}
        />
        <FilterButton
          selectedTerm={selectedStatus}
          setSelectedTermAction={setSelectedStatus}
          filterTerm={filterStatus}
        />
      </div>

      <div className="rounded-md border overflow-x-auto">
        <Table
          columns={columns}
          data={data}
          selectedRole={selectedRole}
          selectedStatus={selectedStatus}
          search={search}
        />
      </div>
    </div>
  );
}
