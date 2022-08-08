import axios from "axios";
import { ApiResponse, Product } from "../../../interface/interfaces";
import client from "../client";

export interface fetchProduct extends ApiResponse {
  result: {
    product: Product;
  };
}

export const fetchProduct = async (
  productId: string
): Promise<fetchProduct> => {
  const { data } = await client.get(`/shop/${productId}`);

  return data;
};
