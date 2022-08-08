import { css } from "@emotion/react";
import { dehydrate, QueryClient } from "react-query";
import NoticePage from "../../../components/noticePage/NoticePage";
import { fetchNotices } from "../../../lib/api/notice/fetchNotices";

const Index = () => {
  return (
    <div css={indexStyle}>
      <NoticePage />
    </div>
  );
};

export default Index;

export async function getServerSideProps(context: any) {
  const { page } = context.params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "notices",
    async () => await fetchNotices(page ? +page : 1)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const indexStyle = css``;
