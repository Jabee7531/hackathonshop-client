import { css } from "@emotion/react";
import { Product } from "../../../interface/interfaces";
import palette from "../../../lib/palette";

type ProductInfoHeadType = { product: Product | null };

const ProductInfoHead = ({ product }: ProductInfoHeadType) => {
  return (
    <div css={ProductInfoHeadStyle}>
      <div className="name">{product?.name}</div>
      <div className="brand">{product?.brand}</div>
      <div className="price">{product?.price}원</div>
    </div>
  );
};

export default ProductInfoHead;

const ProductInfoHeadStyle = css`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  border-top: 1px solid ${palette.black};
  border-bottom: 1px solid ${palette.grey["300"]};

  div {
    margin: 0.5rem 0;
  }

  .name {
    font-size: 1.5rem;
  }

  .brand {
    margin-left: auto;
  }

  .price {
    margin-left: auto;
    font-weight: bold;
  }
`;
