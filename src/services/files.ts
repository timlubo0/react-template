import API from "@/api/api";
import { endpoints } from "@/api/endpoints";

export interface FileBody{
    file?: File;
}

const api = new API();

export const fileService = {
  upload: (payLoad: FileBody) =>
    api.send(
      endpoints.upload,
      { ...payLoad, ...{ token: process.env.NEXT_PUBLIC_API_TOKEN } },
      "POST",
      "",
      "multipart/form-data"
    ),
};