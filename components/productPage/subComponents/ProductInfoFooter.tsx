import { css } from "@emotion/react";
import Router from "next/router";
import { useRecoilValue } from "recoil";
import { userState } from "../../../atoms/authState";
import useBuy from "../../../hooks/useBuy";
import { Cart } from "../../../interface/interfaces";
import palette from "../../../lib/palette";

type ProductInfoFooterType = {
  carts: Cart[];
  totalPrice: number;
};

const ProductInfoFooter = ({ carts, totalPrice }: ProductInfoFooterType) => {
  const { buy } = useBuy();
  const user = useRecoilValue(userState);

  const onBuy = async () => {
    buy({
      user: user,
      items: carts,
    });
  };

  return (
    <div css={ProductInfoFooterStyle}>
      <div className="payment">
        <div>총금액</div>
        <div>{totalPrice}원</div>
      </div>
      <div className="btnBox">
        <button
          className="cartBtn"
          onClick={() => {
            Router.push("/cart");
          }}
        >
          장바구니 보기
        </button>
        <button className="buyBtn" onClick={onBuy}>
          바로구매
        </button>
      </div>
    </div>
  );
};

export default ProductInfoFooter;

const ProductInfoFooterStyle = css`
  .payment {
    display: flex;
    justify-content: space-between;

    padding: 1rem;
    margin: 1rem 0;

    font-weight: bold;
    color: ${palette.grey["800"]};
  }

  .btnBox {
    display: flex;
    justify-content: flex-end;

    margin-right: 1rem;

    button {
      width: 10rem;
      height: 3rem;

      margin: 0 0.2rem;

      color: ${palette.grey["800"]};

      background: none;
      border: none;
      border-radius: 0.7rem;

      cursor: pointer;
    }

    .cartBtn {
      background-color: ${palette.grey["200"]};
    }
    .buyBtn {
      background-color: ${palette.lightBlue["100"]};
    }
  }
`;
