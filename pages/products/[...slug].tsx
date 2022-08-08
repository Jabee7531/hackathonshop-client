import { useRouter } from "next/router";
import { useMemo } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import GoodsGrid from "../../components/common/goodsGrid/GoodsGrid";
import { Product } from "../../interface/interfaces";
import { fetchProductsCategoryQuery } from "../../lib/api/product/fetchProductsCategoryQuery";

const Index = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { isLoading, error, data } = useQuery(
    "products",
    async () => await fetchProductsCategoryQuery(slug![1].split("&")),
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

  return <GoodsGrid category={slug![1]} goods={products} />;
};
export default Index;

export async function getServerSideProps(context: any) {
  const { slug } = context.params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "products",
    async () => await fetchProductsCategoryQuery(slug![1].split("&"))
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
