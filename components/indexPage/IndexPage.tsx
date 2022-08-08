import { css } from "@emotion/react";
import Image from "next/image";
import SlickCarousel from "../common/SlickCarousel";
import GoodsGrid from "../common/goodsGrid/GoodsGrid";
import useIndexPageQuery from "../../hooks/query/indexPage/useIndexPageQuery";

const IndexPage = () => {
  const { products, top, bottoms, onePiece } = useIndexPageQuery();

  const rest_settings = {};
  const carousel = [
    <Image
      key="https://atimg.sonyunara.com/files/attrangs/new_banner/1658190483_0.jpg.webp"
      layout="fill"
      src="https://atimg.sonyunara.com/files/attrangs/new_banner/1658190483_0.jpg.webp"
    />,
    <Image
      key="https://atimg.sonyunara.com/files/attrangs/new_banner/1658136241_0.jpg.webp"
      layout="fill"
      src="https://atimg.sonyunara.com/files/attrangs/new_banner/1658136241_0.jpg.webp"
    />,
    <Image
      key="https://atimg.sonyunara.com/files/attrangs/new_banner/1657763116_0.jpg.webp"
      layout="fill"
      src="https://atimg.sonyunara.com/files/attrangs/new_banner/1657763116_0.jpg.webp"
    />,
    <Image
      key="https://atimg.sonyunara.com/files/attrangs/new_banner/1657757851_0.jpg.webp"
      layout="fill"
      src="https://atimg.sonyunara.com/files/attrangs/new_banner/1657757851_0.jpg.webp"
    />,
  ];

  return (
    <div css={IndexPageStyle}>
      <SlickCarousel slides={carousel} rest_settings={rest_settings} />
      <GoodsGrid
        category="해커숍이 추천하는 핫 아이템 🔥"
        goods={products ? products.slice(0, 8) : null}
      />
      <GoodsGrid
        category="가장 잘 팔리는 Best 아이템 💎"
        goods={products ? products.slice(0, 8) : null}
      />
      <GoodsGrid category="상의 👚" goods={top ? top.slice(0, 8) : null} />
      <GoodsGrid
        category="하의 👖"
        goods={bottoms ? bottoms.slice(0, 8) : null}
      />
      <GoodsGrid
        category="원피스 👗"
        goods={onePiece ? onePiece.slice(0, 8) : null}
      />
    </div>
  );
};

export default IndexPage;

const IndexPageStyle = css``;
