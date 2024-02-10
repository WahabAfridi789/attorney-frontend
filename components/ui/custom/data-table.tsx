'use client'
import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,

    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"

interface CityData {
    state_name: string;
    city: string;
    id: string; // assuming this property exists
    // other properties...
}
interface ColDef {
    // other properties...
    cell: React.ReactNode; // or (props: HeaderContext<TData, TValue>) => React.ReactNode
}

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[],
    data: TData[],
    searchTag: string,
    currentPage: string,
    totalPages: string
}




export function DataTable<TData extends CityData, TValue>({ data, columns, searchTag, currentPage, totalPages }: DataTableProps<TData, TValue>) {

    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const table = useReactTable({
        data,
        columns,
        initialState: {
            pagination: {
                "pageIndex": 0,
                "pageSize": 10
            }
        },
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters
        },
    })

    return (


        <div className="w-full">
            <div className="mb-6 flex items-center justify-center w-full py-4">
                <div className="max-w-[800px] w-full">
                    <Input
                        placeholder="Search cities..."
                        value={(table.getColumn(searchTag)?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn(searchTag)?.setFilterValue(event.target.value)
                        }
                        className="px-6 py-6 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => {
                        console.log("ORIGINAL ROW", row.original)
                        const formattedStateName = row.original.state_name.replace(/\s+/g, '');
                        const formattedCity = row.original.city.replace(/\s+/g, '');

                        return (
                            <div key={row.id} className="max-w-sm h-[270px]  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5">
                                    {row.getVisibleCells().map((cell) => (
                                        cell.column.columnDef.header === "City" ? (
                                            <h2 key={cell.id} className="mb-4 text-xl font-semibold text-gray-700 dark:text-white">{flexRender(cell.column.columnDef.cell, cell.getContext())}</h2>
                                        ) : cell.column.columnDef.header !== "ID" && cell.column.columnDef.header !== "Timezone" && (
                                            <div key={cell.id} className="grid grid-cols-2 gap-2">
                                                <p className="mb-2 text-sm font-semibold text-gray-800 dark:text-white">{cell.column.columnDef.header as React.ReactNode}</p>
                                                <p className="mb-3 text-sm text-gray-500 dark:text-gray-300">{flexRender(cell.column.columnDef.cell, cell.getContext())}</p>
                                            </div>
                                        )
                                    ))}
                                    <Link href={`/${formattedStateName}/${formattedCity}/${row.original.id}`} className="w-full inline-block text-center  bg-primary text-primary-foreground shadow hover:bg-primary/90   px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg " >
                                        Explore

                                    </Link>
                                </div>
                            </div>
                        )
                    }
                    )
                ) : (
                    <div className="h-24 flex items-center justify-center text-gray-600">
                        No results.
                    </div>
                )}
            </div>


            <div className="flex items-center justify-between py-4">
                <div className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                </div>
                <div className="flex space-x-2">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <Link className="inline-block px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded" href={{
                                    pathname: "/",
                                    query: { page: currentPage ? parseInt(currentPage) > 0 && parseInt(currentPage) - 1 : 0 },
                                }}>
                                    <GrPrevious />
                                </Link>
                            </PaginationItem>
                            <PaginationItem>
                                <Link className="inline-block px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded" href={{
                                    pathname: "/",
                                    query: { page: currentPage ? parseInt(currentPage) + 1 : 2 },
                                }}>
                                    <GrNext />
                                </Link>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>



    )
}
