import axios from "axios";
import { ApiResponse, Event } from "../../../interface/interfaces";
import client from "../client";

export interface fetchEvent extends ApiResponse {
  result: {
    event: Event;
  };
}

export const fetchEvent = async (id: string): Promise<fetchEvent> => {
  const { data } = await client.get(`/events/${id}`);

  return data;
};
