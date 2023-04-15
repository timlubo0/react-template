import {
    createQueryKeys,
    mergeQueryKeys,
} from "@lukemorales/query-key-factory";

export const contacts = createQueryKeys("contacts", {
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    list: (filters?: any) => [filters],
});

export const messages = createQueryKeys("messages", {
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    list: (filters?: any) => [filters],
});

export const queries = mergeQueryKeys(contacts, messages);