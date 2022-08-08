import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../interface/interfaces";
import palette from "../../../lib/palette";

type GoodsGridItem = {
  goods: Product;
};

const GoodsGridItem = ({ goods }: GoodsGridItem) => {
  return (
    <div css={GoodsGridItemStyle}>
      <div css={Thumbnail}>
        <Link
          href={{
            pathname: `/product/${goods.id}`,
          }}
        >
          <a>
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={goods.thumbnail}
            />
          </a>
        </Link>
        {/* <div className="like">❤️🤍</div> */}
      </div>
      <div css={Info}>{goods.name}</div>
      <div css={Footer}>{goods.price}원</div>
    </div>
  );
};

export default GoodsGridItem;

const GoodsGridItemStyle = css`
  height: 30rem;
`;

const Thumbnail = css`
  position: relative;
  height: 80%;
  width: 100%;

  border-radius: 0.3rem;
  overflow: hidden;

  span {
    &:hover {
      cursor: pointer;
      img,
      + .like {
        filter: blur(5px);
        -webkit-filter: blur(5px);
      }
    }
  }

  // .like {
  //   position: absolute;
  //   right: 1%;
  //   top: 1%;

  //   font-size: 2rem;

  //   &:hover {
  //     cursor: pointer;
  //   }
  // }
`;

const Info = css`
  display: flex;
  height: 10%;
  padding: 1rem 0;
  color: ${palette.grey["800"]};
`;

const Footer = css`
  display: flex;
  align-items: center;
  height: 10%;
  font-size: 1rem;
  color: ${palette.black};
`;
