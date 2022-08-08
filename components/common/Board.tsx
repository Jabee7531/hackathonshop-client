import { css } from "@emotion/react";
import Link from "next/link";
import { Event, Notice, ProductReview } from "../../interface/interfaces";
import palette from "../../lib/palette";
import formatDate from "../../lib/utils";

type BoardType = {
  title: string;
  data: Event[] | Notice[] | ProductReview[] | null;
};

const Board = ({ title, data }: BoardType) => {
  return (
    <div css={BoardStyle}>
      <section>
        <div className="BoardTitle">{title}</div>
        <ul>
          <li className="BoardInfo">
            <div className="Num">번호</div>
            <div className="Title">제목</div>
            <div className="CreateAt">작성일</div>
          </li>
          {data?.map((item, i) => (
            <li key={i}>
              <div className="Num">{item.index}</div>
              <div className="Title">
                <Link href={`/read/${title}/${item.id}`}>{item.title}</Link>
              </div>
              <div className="CreateAt">{formatDate(item.created_at)}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Board;

const BoardStyle = css`
  section {
    display: flex;
    flex-direction: column;

    align-items: center;

    list-style: none;

    color: ${palette.grey["800"]};

    a {
      margin: 0 1rem;

      text-decoration: none;
      color: ${palette.grey["800"]};

      &:visited {
        color: ${palette.grey["800"]};
      }
      &:hover {
        font-weight: bold;
      }
    }

    .BoardTitle {
      margin: 2rem 0;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .BoardInfo {
      font-weight: bold;
    }

    ul {
      width: 100%;

      border-top: 2px solid ${palette.black};
    }

    li {
      display: flex;

      width: 100%;
      height: 3.1rem;

      align-items: center;
      text-align: center;

      border-bottom: 1px solid ${palette.grey["300"]};

      .Num {
        width: 10%;
      }
      .Title {
        width: 80%;
        a {
          color: ${palette.black};
        }
      }
      .CreateAt {
        width: 10%;
      }
    }
  }
`;
