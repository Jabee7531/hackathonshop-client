import axios from "axios";
import { PageNationParam } from "../../../constants/pagenation.constant";
import { ApiResponse, Event, EventPage } from "../../../interface/interfaces";
import client from "../client";

export interface fetchEvents extends ApiResponse {
  result: {
    events: EventPage;
  };
}

export const fetchEvents = async (page: number): Promise<fetchEvents> => {
  const { data } = await client.get(`/events`, {
    params: {
      order: PageNationParam.order,
      page: page,
      take: PageNationParam.take,
    },
  });
  return data;
};
