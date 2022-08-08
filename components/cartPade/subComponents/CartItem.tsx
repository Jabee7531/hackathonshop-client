import { css } from "@emotion/react";
import Image from "next/image";
import useCart from "../../../hooks/useCart";
import { Cart } from "../../../interface/interfaces";
import cartAction from "../../../lib/action/cartAction";
import palette from "../../../lib/palette";

type CartItemType = {
  item: Cart;
};

const CartItem = ({ item }: CartItemType) => {
  const { onAddCount, onSubCount, onDelCart } = cartAction();
  return (
    <div css={CartItemStyle}>
      <li className="cartItem">
        <div className="thumbnail">
          <Image layout="fill" src={item.product.thumbnail} />
        </div>
        <div className="info">{item.product.name}</div>
        <div className="option">
          {item.product.color} / {item.product.size}
        </div>
        <div className="count">
          <button
            onClick={() => {
              onSubCount(
                item.product.id,
                item.product.color,
                item.product.size
              );
            }}
          >
            {" "}
            -{" "}
          </button>
          {item.count}
          <button
            onClick={() => {
              onAddCount(
                item.product.id,
                item.product.color,
                item.product.size
              );
            }}
          >
            +
          </button>
        </div>
        <div className="price">{item.count * Number(item.product.price)}원</div>
        <button
          className="delBtn"
          onClick={() => {
            onDelCart(item.product.id, item.product.color, item.product.size);
          }}
        >
          x
        </button>
      </li>
    </div>
  );
};

export default CartItem;

const CartItemStyle = css`
  list-style: none;

  li {
    display: flex;

    height: 15rem;

    margin: 1rem 2rem;
    padding: 0 2rem;
    align-items: center;
    background-color: ${palette.white};
    border-radius: 1rem;

    button {
      cursor: pointer;
    }

    .thumbnail {
      position: relative;

      width: 20%;
      height: 92.16%;
    }

    .info {
      width: 45%;
      padding: 0 1rem;
    }

    .option {
      display: flex;
      justify-content: center;

      width: 15%;
    }

    .count {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 7.5%;

      button {
        width: 21px;
        height: 21px;
        text-align: center;
        border-radius: 50%;
        border: 1px solid ${palette.grey["400"]};
        margin: 0 0.25rem;
      }
    }

    .price {
      display: flex;
      justify-content: center;

      margin: 0 1rem;
      width: 7.5%;
    }

    .delBtn {
      border: none;
      background: none;
      font-size: 1.2rem;
    }
  }
`;
