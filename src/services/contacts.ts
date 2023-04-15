import API from "@/api/api";
import { endpoints } from "@/api/endpoints";

const api = new API();

export const contactsService = {
  create: () => {},
  findAll: () =>
    api.get(endpoints.contacts, { token: process.env.NEXT_PUBLIC_API_TOKEN }),
};