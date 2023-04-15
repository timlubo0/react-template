import { Table } from "@tanstack/react-table";
import { Box, Button, Flex, IconButton, Text, Select } from "@chakra-ui/react";
import  { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface Props<T extends object>{
    table: Table<T>
}

function Pagination<T extends object>({ table }: Props<T>){

    return (
      <Box py={5} px={2}>
        <Flex gap={2}>
          <IconButton
            className="cursor-pointer rounded border p-1"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            icon={<BsChevronDoubleLeft />}
            aria-label="left"
          />
          <IconButton
            className="cursor-pointer rounded border p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            icon={<BsChevronLeft />}
            aria-label="left"
          />
          {[...Array(table.getPageCount())].map((page, index) => (
            <Button
              onClick={() => table.setPageIndex(index)}
              bg={table.getState().pagination.pageIndex === index ? "#000" : ""}
              color={table.getState().pagination.pageIndex === index ? "#fff" : ""}
              key={index + 1}
            >
              {index + 1}
            </Button>
          ))}
          <IconButton
            className="cursor-pointer rounded border p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            icon={<BsChevronRight />}
            aria-label="left"
          />
          <IconButton
            className="cursor-pointer rounded border p-1"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            icon={<BsChevronDoubleRight />}
            aria-label="left"
          />
          <Flex alignItems={"center"} cursor={"pointer"} gap={1}>
            <Text>Page</Text>
            <Text fontWeight={"bold"}>
              {table.getState().pagination.pageIndex + 1} sur{" "}
              {table.getPageCount()}
            </Text>
          </Flex>

          <Box>
            <Select
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                table.setPageSize(Number(e.target.value));
                }}
            >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                    Afficher {pageSize}
                </option>
                ))}
            </Select>
          </Box>
        </Flex>
      </Box>
    );
}

export default Pagination;