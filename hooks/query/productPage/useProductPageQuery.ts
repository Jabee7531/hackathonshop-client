import { useRouter } from "next/router";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { Product } from "../../../interface/interfaces";
import { fetchProduct } from "../../../lib/api/product/fetchProduct";

export default function useProductPageQuery() {
  const router = useRouter();
  const { productId } = router.query;

  const { isLoading, error, data } = useQuery(
    "product",
    async () => await fetchProduct(productId ? productId[0] : ""),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const product = useMemo<Product | null>(() => {
    if (!data) return null;
    return data.result.product;
  }, [data]);

  return { product };
}
