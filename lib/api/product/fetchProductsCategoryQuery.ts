import axios from "axios";
import { ApiResponse, Product } from "../../../interface/interfaces";
import client from "../client";

export interface fetchProductsCategoryQuery extends ApiResponse {
  result: {
    products: Product[];
  };
}

export const fetchProductsCategoryQuery = async (
  category: string[]
): Promise<fetchProductsCategoryQuery> => {
  const { data } = await client.get(`/shop/query`, {
    params: {
      category: category,
    },
  });

  return data;
};
