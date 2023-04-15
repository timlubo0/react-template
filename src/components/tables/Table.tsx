import React from 'react';
import { getCoreRowModel, useReactTable, flexRender, getPaginationRowModel } from '@tanstack/react-table';
import type { ColumnDef, FilterFn } from '@tanstack/react-table';
import { filterFns } from './filterFns';
import { DebouncedInput } from './DebouncedInput';
import Pagination from './Pagination';
import {
  Table as CTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

interface ReactTableProps<T extends object> {
 data: T[];
 columns: ColumnDef<T>[];
 showNavigation?: boolean;
 showGlobalFilter?: boolean;
 filterFn?: FilterFn<T>;
}

export const Table = <T extends object>({ data, columns, showNavigation = true, showGlobalFilter = false, filterFn = filterFns.fuzzy }: ReactTableProps<T>) => {

    const [globalFilter, setGlobalFilter] = React.useState('');

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: filterFn,
    });

    return (
        <TableContainer m={2} border={"1px solid"} borderColor={"gray.200"}>
            {showGlobalFilter ? (
                <DebouncedInput
                    value={globalFilter ?? ''}
                    onChange={(value) => setGlobalFilter(String(value))}
                    className="font-lg border-block border p-2 shadow mb-2"
                    placeholder="Search all columns..."
                />
            ) : null}
            <CTable size='md'>
                <Thead bg={"gray.100"}>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <Th key={header.id} className="px-6 py-4 text-sm font-medium text-gray-900">
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody>
                    {table.getRowModel().rows.map((row) => (
                        <Tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <Td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </CTable>
            {showNavigation ? (
                <Pagination table={table} />
            ) : null}
        </TableContainer>
    );
};