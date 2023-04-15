import React from "react";
import { ColumnDef } from '@tanstack/react-table';
import { Message } from "@/views/messages/type";
import { Table } from "@/components/tables/Table";
import { filterFns } from "@/components/tables/filterFns";
import { Badge, Text, Tooltip } from "@chakra-ui/react";
import { useContacts } from "@/hooks/contacts";
import moment from "moment";

interface Props{
  messages: Message[]
}

function MessagesTable({ messages }: Props){

  const contactsQuery = useContacts();
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  const  getContact = (id: string) => contactsQuery.data.find((contact: any) => contact.id === id);

  const cols = React.useMemo<ColumnDef<Message>[]>(
    () => [
      {
        header: "Contact",
        cell: (row) => getContact(`${row.renderValue()}`)?.name || row.renderValue(),
        accessorKey: "to",
      },
      {
        header: "Message",
        cell: (row) => (
          <Tooltip label={`${row.renderValue()}`}>
            <Text
              noOfLines={2}
              maxW={400}
              _hover={{ cursor: "pointer" }}
            >{`${row.renderValue()}`}</Text>
          </Tooltip>
        ),
        accessorKey: "body",
      },
      {
        header: "Heure",
        cell: (row) => moment.unix(Number(row.renderValue())).fromNow(),
        accessorKey: "sent_at",
      },
      {
        header: "Statut",
        cell: (row) => (
          <Badge
            textTransform={"capitalize"}
            bg={row.renderValue() === "sent" ? "green.300" : "red.200"}
            color={"#fff"}
          >{`${row.renderValue()}`}</Badge>
        ),
        accessorKey: "status",
      },
    ],
    []
  );

  return(
    <>
      <Table columns={cols} data={messages} filterFn={filterFns.contains} />
    </>
  )
}

export default MessagesTable;