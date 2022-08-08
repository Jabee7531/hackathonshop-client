import axios from "axios";
import { PageNationParam } from "../../../constants/pagenation.constant";
import { ApiResponse, NoticePage } from "../../../interface/interfaces";
import client from "../client";

export interface fetchNotices extends ApiResponse {
  result: {
    notices: NoticePage;
  };
}

export const fetchNotices = async (page: number): Promise<fetchNotices> => {
  const { data } = await client.get(`/notices`, {
    params: {
      order: PageNationParam.order,
      page: page,
      take: PageNationParam.take,
    },
  });

  return data;
};
