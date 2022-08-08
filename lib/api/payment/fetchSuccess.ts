import axios from "axios";
import { ApiResponse } from "../../../interface/interfaces";
import client from "../client";

export interface fetchSuccess extends ApiResponse {
  result: {};
}

type fetchSuccessType = {
  paymentKey: string | string[] | undefined;
  orderId: string | string[] | undefined;
  amount: string | string[] | undefined;
};

export const fetchSuccess = async ({
  paymentKey,
  orderId,
  amount,
}: fetchSuccessType): Promise<any> => {
  const { data } = await client.get(`/shop/payment/success`, {
    params: {
      paymentKey: paymentKey,
      orderId: orderId,
      amount: amount,
    },
  });

  return data;
};
