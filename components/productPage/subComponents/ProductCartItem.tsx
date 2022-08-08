import { css } from "@emotion/react";
import { Cart } from "../../../interface/interfaces";
import actionCart from "../../../lib/action/cartAction";
import palette from "../../../lib/palette";

type ProductCartItemType = {
  item: Cart;
};

const ProductCartItem = ({ item }: ProductCartItemType) => {
  const { onAddCount, onSubCount, onDelCart } = actionCart();
  return (
    <div css={ProductCartItemStyle}>
      <li css={CartItemStyle}>
        <div className="cartItemOpt">
          {item.product.color} / {item.product.size}
        </div>
        <div className="cartItemCount">
          <button
            onClick={() => {
              onSubCount(
                item.product.id,
                item.product.color,
                item.product.size
              );
            }}
          >
            -
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
        <div className="cartItemPrice">{item.product.price}원</div>
        <button
          className="deleteBtn"
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

export default ProductCartItem;

const ProductCartItemStyle = css``;

const CartItemStyle = css`
  display: flex;

  height: 4rem;

  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  margin: 0.5rem 0;

  border-radius: 0.5rem;

  color: ${palette.grey["700"]};
  background-color: ${palette.grey["200"]};

  button {
    color: ${palette.grey["700"]};
    cursor: pointer;
  }
  .cartItemOpt {
    width: 50%;
  }
  .cartItemCount {
    button {
      width: 21px;
      height: 21px;
      text-align: center;
      border-radius: 50%;
      border: 1px solid ${palette.grey["400"]};
      margin: 0 0.25rem;
    }
  }
  .deleteBtn {
    border: none;
    font-size: 1.2rem;
  }
`;
