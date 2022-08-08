import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import useNoticeQuery from "../../hooks/query/noticePage/useNoticeQuery";
import { fetchNotices } from "../../lib/api/notice/fetchNotices";
import Board from "../common/Board";
import PageButton from "../common/PageButton";

const NoticePage = () => {
  const { notices, meta } = useNoticeQuery();

  return (
    <div css={NoticePageStyle}>
      <Board title="notice" data={notices} />
      <PageButton where="notice" meta={meta} />
    </div>
  );
};

export default NoticePage;

const NoticePageStyle = css`
  display: flex;
  flex-direction: column;

  width: 1300px;

  margin: 0 auto;
`;
