import React from "react";
import AppLayout from "@/layouts/AppLayout";
import MessagesTable from "../components/table/MessagesTable";
import { Flex, Input, Button, Box, useDisclosure } from "@chakra-ui/react";
import NewMessageModal from "../components/modals/NewMessageModal";
import { useMessages } from "@/hooks/messages";

function MessagesScreen(){

  const newMessageModal = useDisclosure();

  const messagesQuery = useMessages({
    token: `${process.env.NEXT_PUBLIC_API_TOKEN}`,
    page: 1,
    limit: 200,
    status: 'all',
    sort: 'desc'
  });

  return (
    <AppLayout>
      <Box>
        <NewMessageModal
          isOpen={newMessageModal.isOpen}
          onClose={newMessageModal.onClose}
        />
        <Flex mx={2} my={5} justifyContent={"space-between"}>
          <Input
            type="text"
            placeholder="search...."
            maxW={500}
            size={"sm"}
          />
          <Button
            size={"sm"}
            bg={"#000"}
            color={"#fff"}
            onClick={newMessageModal.onOpen}
          >
            Nouveau message
          </Button>
        </Flex>
        {
          !messagesQuery.isLoading && <MessagesTable messages={messagesQuery.messages} />
        }
      </Box>
    </AppLayout>
  );
}

export default MessagesScreen;