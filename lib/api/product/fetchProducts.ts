import axios from "axios";
import { ApiResponse, Product } from "../../../interface/interfaces";
import client from "../client";

export interface fetchProducts extends ApiResponse {
  result: {
    products: Product[];
  };
}

export const fetchProducts = async (): Promise<fetchProducts> => {
  const { data } = await client.get(`/shop`);

  return data;
};
