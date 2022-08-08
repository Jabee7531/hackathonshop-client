import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchSuccess } from "../../../lib/api/payment/fetchSuccess";

const Index = () => {
  const router = useRouter();
  const { amount, orderId, paymentKey } = router.query;

  const { isLoading, error, data } = useQuery(
    "payment",
    async () =>
      await fetchSuccess({
        amount: amount,
        orderId: orderId,
        paymentKey: paymentKey,
      }),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled:
        amount !== undefined &&
        orderId !== undefined &&
        paymentKey !== undefined,
    }
  );

  return <div>결제 성공</div>;
};

export default Index;
