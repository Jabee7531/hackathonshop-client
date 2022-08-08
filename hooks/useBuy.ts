import { loadTossPayments } from "@tosspayments/payment-sdk";
import { useCallback } from "react";
import { v4 } from "uuid";
import { Cart, User } from "../interface/interfaces";

type BuyType = {
  items: Cart[];
  user: User | null;
};
export default function useBuy() {
  const clientKey = process.env.NEXT_PUBLIC_TOSS_PAYMENTS_KEY;

  const buy = useCallback(
    async ({ items, user }: BuyType) => {
      if (!user) {
        alert("로그인을 하세요.");
        return;
      }
      if (items.length === 0) {
        alert("물품을 장바구니에 담아주세요.");
        return;
      }

      const amount = items.reduce(
        (result: number, x: Cart) =>
          result + Number(x.product.price) * Number(x.count),
        0
      );

      const tossPayments = await loadTossPayments(clientKey!);

      tossPayments.requestPayment("카드", {
        // 결제 수단 파라미터
        // 결제 정보 파라미터
        amount: amount,
        orderId: v4(),
        orderName: `${items[0].product.name} 외 ${items.length - 1} 종류`,
        customerName: user!.nick_name,
        successUrl: "https://hackathonshop.vercel.app/payment/success",
        failUrl: "https://hackathonshop.vercel.app/payment/fail",
      });
    },
    [clientKey]
  );

  return { buy };
}
