"use client";

import { useMemo } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { User } from "./columns";

interface DataTableProps<TData extends User, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  selectedRole: string;
  selectedStatus: string;
  search: string;
}

export function DataTableComponent<TData extends User, TValue>({
  columns,
  data,
  selectedRole,
  selectedStatus,
  search,
}: DataTableProps<TData, TValue>) {
  // Memoize to filtered data
  const filteredData = useMemo(() => {
    return data.filter((user) => {
      const matchesRole = selectedRole === "All" || user.role === selectedRole;
      const matchesStatus =
        selectedStatus === "All" || user.status === selectedStatus;
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());
      return matchesRole && matchesStatus && matchesSearch;
    });
  }, [search, selectedRole, selectedStatus]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={columns.length}
              className="text-center text-muted-foreground"
            >
              No users found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
