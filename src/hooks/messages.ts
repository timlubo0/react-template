import { useQuery } from "@tanstack/react-query";
import { queries } from "@/api/queries";
import { MessagesFnProps, messageService } from "@/services/messages";

export const useMessages= (params: MessagesFnProps) => {

    const { data, ...rest } = useQuery(
        queries.messages.list().queryKey, 
        () => messageService.findAll(params)
    );

    const messages = data?.messages || [];

    return {
        messages,
        ...rest
    };
};