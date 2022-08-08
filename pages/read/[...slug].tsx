import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { Notice } from "../../interface/interfaces";
import { fetchEvent } from "../../lib/api/event/fetchEvent";
import { fetchNotice } from "../../lib/api/notice/fetchNotice";
import palette from "../../lib/palette";

const Index = () => {
  const router = useRouter();
  const { slug } = router.query;

  const eventQuery = useQuery("event", async () => await fetchEvent(slug![1]), {
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: slug![0] === "event",
  });
  const noticeQuery = useQuery(
    "notice",
    async () => await fetchNotice(slug![1]),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: slug![0] === "notice",
    }
  );

  const event = useMemo((): any => {
    if (noticeQuery.data) return noticeQuery.data.result.notice;
    if (eventQuery.data) return eventQuery.data.result.event;
    return null;
  }, [eventQuery, noticeQuery]);

  return (
    <div css={indexStyle}>
      <div css={Board}>
        <div className="Title">
          <div className="category">제목</div>
          <div className="content">{event?.title}</div>
        </div>
        <div className="Author">
          <div className="category">작성자</div>
          <div className="content">{event?.author}</div>
        </div>
        <div className="Content">
          <div className="content">{event?.content}</div>
        </div>
        {/* <div className="Prev">
          <div className="category">이전글</div>
          <div className="content">안녕</div>
        </div>
        <div className="Next">
          <div className="category">다음글</div>
          <div className="content">안녕</div>
        </div> */}
      </div>
      {event?.replies?.map((reply: any, i: number) => (
        <div key={"reply" + i}>{reply.author}</div>
      ))}
      <div css={ButtonBoxStyle}>
        <button
          onClick={() => {
            router.back();
          }}
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps(context: any) {
  const { slug } = context.params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "event",
    async () => await fetchEvent(slug ? slug[1] : "")
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const indexStyle = css`
  display: flex;
  flex-direction: column;
`;
const Board = css`
  display: flex;
  flex-direction: column;

  margin-top: 5rem 0;

  .category {
    width: 10%;
  }

  .content {
    width: 100%;
  }

  .Title {
    display: flex;
    padding: 1rem 2rem;
    border-top: 2px solid ${palette.black};
    border-bottom: 1px solid ${palette.grey["300"]};
  }

  .Author {
    display: flex;
    padding: 1rem 2rem;
    border-bottom: 1px solid ${palette.grey["300"]};
  }

  .Content {
    display: flex;
    padding: 2rem 2rem;
    border-bottom: 1px solid ${palette.grey["300"]};
  }

  .Prev {
    display: flex;
    padding: 1rem 2rem;
    border-bottom: 1px solid ${palette.grey["300"]};
  }

  .Next {
    display: flex;
    padding: 1rem 2rem;
    border-bottom: 1px solid ${palette.grey["300"]};
  }
  .BtnBox {
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    button {
    }
  }
`;

const ButtonBoxStyle = css`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
`;
