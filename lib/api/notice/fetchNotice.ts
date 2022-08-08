import axios from "axios";
import { ApiResponse, Notice } from "../../../interface/interfaces";
import client from "../client";

export interface fetchNotice extends ApiResponse {
  result: {
    notice: Notice;
  };
}

export const fetchNotice = async (id: string): Promise<fetchNotice> => {
  const { data } = await client.get(`/notices/${id}`);

  return data;
};
