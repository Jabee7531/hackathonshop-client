import { css } from "@emotion/react";
import { dehydrate, QueryClient } from "react-query";
import EventPage from "../../../components/eventPage/EventPage";
import { fetchEvents } from "../../../lib/api/event/fetchEvents";

const Index = () => {
  return (
    <div css={indexStyle}>
      <EventPage />
    </div>
  );
};

export default Index;

export async function getServerSideProps(context: any) {
  const { page } = context.params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "events",
    async () => await fetchEvents(page ? +page : 1)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const indexStyle = css``;
