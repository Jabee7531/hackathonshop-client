import { useMemo } from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../../../lib/api/product/fetchProducts";
import { fetchProductsQuery } from "../../../lib/api/product/fetchProductsQuery";

export default function useIndexPageQuery() {
  const productsQuery = useQuery(
    "products",
    async () => await fetchProducts(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const products = useMemo(() => {
    if (!productsQuery.data) return null;
    return productsQuery.data.result.products;
  }, [productsQuery.data?.result.products]);
  const topQuery = useQuery(
    "top",
    async () =>
      await fetchProductsQuery({
        category: ["티셔츠", "블라우스", "가디건", "자켓"],
      }),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const top = useMemo(() => {
    if (!topQuery.data) return null;
    return topQuery.data.result.products;
  }, [topQuery.data?.result.products]);

  const bottomsQuery = useQuery(
    "bottoms",
    async () =>
      await fetchProductsQuery({ category: ["팬츠", "슬랙스", "스커트"] }),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const bottoms = useMemo(() => {
    if (!bottomsQuery.data) return null;
    return bottomsQuery.data.result.products;
  }, [bottomsQuery.data?.result.products]);
  const onePieceQuery = useQuery(
    "onePiece",
    async () => await fetchProductsQuery({ category: ["원피스"] }),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const onePiece = useMemo(() => {
    if (!onePieceQuery.data) return null;
    return onePieceQuery.data.result.products;
  }, [onePieceQuery.data?.result.products]);

  return { products, top, bottoms, onePiece };
}
