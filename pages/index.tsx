import type { NextPage } from "next";
import { css } from "@emotion/react";
import { dehydrate, QueryClient } from "react-query";
import { fetchProducts } from "../lib/api/product/fetchProducts";
import IndexPage from "../components/indexPage/IndexPage";
import { fetchProductsQuery } from "../lib/api/product/fetchProductsQuery";

const Home: NextPage = () => {
  return (
    <div css={IndexStyle}>
      <IndexPage />
    </div>
  );
};

export default Home;

const IndexStyle = css``;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "products",
    async () => await fetchProducts()
  );

  await queryClient.prefetchQuery(
    "top",
    async () =>
      await fetchProductsQuery({
        category: ["티셔츠", "블라우스", "가디건", "자켓"],
      })
  );
  await queryClient.prefetchQuery(
    "bottoms",
    async () =>
      await fetchProductsQuery({ category: ["팬츠", "슬랙스", "스커트"] })
  );
  await queryClient.prefetchQuery(
    "onePiece",
    async () => await fetchProductsQuery({ category: ["원피스"] })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
