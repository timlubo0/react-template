import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  Heading,
  Box,
  useToast
} from "@chakra-ui/react";
import MessageForm from "../forms/MessageForm";
import { useMutation } from "@tanstack/react-query";
import { FileBody, fileService } from "@/services/files";
import { MessageBody, messageService } from "@/services/messages";
import { useContacts } from "@/hooks/contacts";

interface Props{
    isOpen: boolean;
    onClose: () => void;
}

function NewMessageModal({ isOpen, onClose }: Props){

    const [data, setData] = React.useState<MessageBody>();

    const contactsQuery = useContacts();

    const toast = useToast();
 
    const fileMutation = useMutation({
        mutationFn: fileService.upload,
        onSuccess: (response) => {

            if(!contactsQuery.isLoading){
                // rome-ignore lint/suspicious/noExplicitAny: <explanation>
                contactsQuery.data.map((contact: any) => {

                   if(contact.number === '243978915686'){
                        const message = {
                            to: contact.number,
                            caption: data?.message,
                            image: response.success
                        };
            
                        messageMutation.mutate(message);
                   }

                });

                toast({
                    title: 'Messages envoyé.',
                    description: "Messages envoyé avec succès.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });

                onClose();
            }

        },
        onError: () => {

        }
    });

    const messageMutation = useMutation({
        mutationFn: messageService.create,
        onSuccess: (response) => {
            console.log(response)
        },
        onError: () => {

        }
    });

    const handleSubmit = (data: MessageBody) => {
        setData(data);
        fileMutation.mutate(data);
    }

    return(
        <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody p={10}>
                    <Heading size={"md"} mb={5}>Nouveau message</Heading>
                    <Box>
                        <MessageForm onSubmit={handleSubmit} isLoading={fileMutation.isLoading || messageMutation.isLoading} />
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )

}

export default NewMessageModal;