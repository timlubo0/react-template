import API from "@/api/api";
import { endpoints } from "@/api/endpoints";

export interface MessageBody{
  to: string;
  message?: string;
  image?: string;
  file?: File;
  caption?: string;
}

export type MessagesFnProps = {
  token: string;
  page: number;
  limit: number;
  status: string;
  sort: string;
}

const api = new API();

export const messageService = {
  create: (payLoad: MessageBody) =>
    api.send(endpoints.messages, {
      ...payLoad,
      ...{ token: process.env.NEXT_PUBLIC_API_TOKEN },
    }),

  findAll: (params: MessagesFnProps) =>
    api.get(endpoints.messagesList, params),
};