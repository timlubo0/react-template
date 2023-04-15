import { useQuery } from "@tanstack/react-query";
import { contactsService } from "@/services/contacts";
import { queries } from "@/api/queries";

export const useContacts= () => {

    const data = useQuery(
        queries.contacts.list().queryKey, 
        () => contactsService.findAll()
    );

    return data;
};