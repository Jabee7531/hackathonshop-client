import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/authState";
import useBuy from "../../hooks/useBuy";
import useCart from "../../hooks/useCart";
import useIsCSR from "../../hooks/useIsCSR";
import { Cart } from "../../interface/interfaces";
import palette from "../../lib/palette";
import CartItem from "./subComponents/CartItem";

const CartPage = () => {
  const { carts, totalPrice } = useCart();
  const { isCSR } = useIsCSR();
  const { buy } = useBuy();
  const user = useRecoilValue(userState);

  const onBuy = async () => {
    await buy({
      items: carts,
      user: user,
    });
  };

  return (
    <div css={CartPageStyle}>
      <div css={cartGridStyle}>
        {isCSR &&
          carts.map((item: Cart, index: number) => (
            <CartItem key={index} item={item} />
          ))}
      </div>
      <div css={paymentBoxStyle}>
        <div>총금액</div>
        <div>{totalPrice}원</div>
      </div>
      <div css={BtnBoxStyle}>
        <button className="buyBtn" onClick={onBuy}>
          구매
        </button>
      </div>
    </div>
  );
};

export default CartPage;

const CartPageStyle = css`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin: 1rem 3rem;
`;
const cartGridStyle = css`
  display: flex;
  width: 100%;

  flex-direction: column;
`;
const paymentBoxStyle = css`
  display: flex;

  width: 100%;
  padding: 3.5rem;

  justify-content: space-between;

  border-bottom: 1px solid ${palette.grey["300"]};
`;
const BtnBoxStyle = css`
  margin-top: 1rem;
  margin-left: auto;
  margin-right: 2rem;

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

  .buyBtn {
    background-color: ${palette.lightBlue["100"]};
  }
`;
