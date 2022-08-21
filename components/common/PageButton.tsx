import { css } from "@emotion/react";
import Link from "next/link";
import { useState } from "react";
import { EventPage, EventPageMeta } from "../../interface/interfaces";

type PageButtonType = {
  where: string;
  meta: EventPageMeta | null;
};

const PageButton = ({ where, meta }: PageButtonType) => {
  const [curruntPagination, setcurruntPagination] = useState<number>(1);

  return (
    <div css={PageButtonStyle}>
      {curruntPagination !== 1 ? (
        <button
          onClick={() => {
            setcurruntPagination(curruntPagination - 1);
          }}
        >
          {"<"}
        </button>
      ) : (
        ""
      )}
      {meta &&
        Array.from({
          length:
            meta.pageCount > curruntPagination * 10 ? 10 : meta.pageCount % 10,
        }).map((_, i) => (
          <Link
            key={curruntPagination * 10 - 9 + i}
            href={`/board/${where}/${curruntPagination * 10 - 9 + i}`}
          >
            <button>{curruntPagination * 10 - 9 + i}</button>
          </Link>
        ))}
      {meta && meta.pageCount > curruntPagination * 10 ? (
        <button
          onClick={() => {
            setcurruntPagination(curruntPagination + 1);
          }}
        >
          {">"}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default PageButton;

const PageButtonStyle = css`
    margin: 2rem auto;
    button {
      background: none;
      border: none;
      cursor: pointer;
      margin: 0 0.25rem;`;
