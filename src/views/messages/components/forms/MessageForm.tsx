import React from "react";
import { Textarea, Flex, Button, Box } from "@chakra-ui/react";
import ImageField from "@/components/ImageField";
import { useFormik } from 'formik';
import { MessageBody } from "@/services/messages";

interface Props{
    onSubmit: (data: MessageBody) => void;
    isLoading: boolean;
}

function MessageForm({ onSubmit, isLoading }: Props){

    const formik = useFormik({
        initialValues: { to: '', message: '', image: '' },
        onSubmit: (data: MessageBody) => {
            onSubmit(data);
        },
    })

    return (
      <Flex direction={"column"} gap={4}>
        <form onSubmit={formik.handleSubmit}>
            <Textarea 
                placeholder="Ecrivez le message..."
                onChange={(e) => formik.setFieldValue("message", e.target.value)} 
            />
            <ImageField 
                onChange={(e) => formik.setFieldValue("file", e)} 
            />
            <Flex justifyContent={"space-between"}>
            <Box />
            <Flex gap={2}>
                <Button 
                    size={"sm"} 
                    disabled={isLoading}
                >
                    Annuler
                </Button>
                <Button 
                    bg={"#000"} 
                    color={"#fff"} 
                    size={"sm"} 
                    type="submit"
                    isLoading={isLoading}
                >
                    Envoyer
                </Button>
            </Flex>
            </Flex>
        </form>
      </Flex>
    );

}

export default MessageForm;