import { useMemo } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import GoodsGrid from "../../components/common/goodsGrid/GoodsGrid";
import { Product } from "../../interface/interfaces";
import { fetchProducts } from "../../lib/api/product/fetchProducts";

const ProductsBest = () => {
  const { isLoading, error, data } = useQuery(
    "Best",
    async () => await fetchProducts(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const products = useMemo<Product[] | null>(() => {
    if (!data) return null;
    return data.result.products;
  }, [data]);

  return <GoodsGrid category="Best" goods={products} />;
};
export default ProductsBest;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("Best", async () => await fetchProducts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
