import { css } from "@emotion/react";
import { Product } from "../../../interface/interfaces";
import GoodsGridItem from "./GoodsGridItem";

interface GridType {
  category: string;
  goods: Product[] | null;
}

const GoodsGrid = ({ category, goods }: GridType) => {
  return (
    <div css={GoodsGridStyle}>
      <div css={Title}>{category}</div>
      <div css={Grid}>
        {goods?.map((product: Product, i: number) => (
          <GoodsGridItem key={i} goods={product} />
        ))}
      </div>
    </div>
  );
};

export default GoodsGrid;

const GoodsGridStyle = css`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

const Title = css`
  margin: 3rem auto;
  font-size: 2rem;
`;

const Grid = css`
  display: grid;
  gap: 6rem 3rem;
  grid-template-columns: repeat(4, 1fr);
`;
