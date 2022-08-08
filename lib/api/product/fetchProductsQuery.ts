import axios from "axios";
import { ApiResponse, Product } from "../../../interface/interfaces";
import client from "../client";

export interface fetchProductsQuery extends ApiResponse {
  result: {
    products: Product[];
  };
}

type fetchProductsQueryParam = {
  category?: string[];
  minPrice?: string;
  maxPrice?: string;
  size?: string[];
  color?: string[];
  brand?: string[];
};

export const fetchProductsQuery = async ({
  category,
  minPrice,
  maxPrice,
  size,
  color,
  brand,
}: fetchProductsQueryParam): Promise<fetchProductsQuery> => {
  const { data } = await client.get(`/shop/query`, {
    params: {
      category: category,
      minPrice: minPrice,
      maxPrice: maxPrice,
      size: size,
      color: color,
      brand: brand,
    },
  });

  return data;
};
