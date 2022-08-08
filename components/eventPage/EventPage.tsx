import { css } from "@emotion/react";
import useEventQuery from "../../hooks/query/eventPage/useEventPageQuery";
import Board from "../common/Board";
import PageButton from "../common/PageButton";

const EventPage = () => {
  const { events, meta } = useEventQuery();

  return (
    <div css={EventPageStyle}>
      <Board title="event" data={events} />
      <PageButton where="event" meta={meta} />
    </div>
  );
};

export default EventPage;

const EventPageStyle = css`
  display: flex;
  flex-direction: column;

  width: 1300px;

  margin: 0 auto;
`;
