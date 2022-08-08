import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchProduct } from "../../lib/api/product/fetchProduct";
import { css } from "@emotion/react";
import ProductPage from "../../components/productPage/ProductPage";

const Index = () => {
  return (
    <div css={productPageStyle}>
      <ProductPage />
    </div>
  );
};

export default Index;

export async function getServerSideProps(context: any) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "product",
    async () => await fetchProduct(context.params.productId)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const productPageStyle = css``;
