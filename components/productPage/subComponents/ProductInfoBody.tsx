import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Product } from "../../../interface/interfaces";
import palette from "../../../lib/palette";
import { cartStorage } from "../../../lib/storage/Storage";

type ProductInfoBodyType = { product: Product | null };

const ProductInfoBody = ({ product }: ProductInfoBodyType) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  const addCart = async () => {
    const addProduct = {
      ...product!,
      size: [selectedSize],
      color: [selectedColor],
    };

    cartStorage.set({
      product: addProduct,
      count: 1,
    });

    setSelectedSize("");
    setSelectedColor("");
  };

  const onColorChange = async (e: any) => {
    setSelectedColor(e.target.value);
  };
  const onSizeChange = async (e: any) => {
    if (selectedColor === "") {
      console.log("색상을 선택해 주세요.");
      return;
    }
    setSelectedSize(e.target.value);
  };

  useEffect(() => {
    if (selectedSize === "") {
      return;
    }
    addCart();
  }, [selectedSize]);

  return (
    <div css={ProductInfoBodyStyle}>
      <div className="color">
        <label className="optionName">
          <div>color</div>
          <select name="color" value={selectedColor} onChange={onColorChange}>
            <option value={""}>옵션 선택</option>
            {product?.color.map((option, i) => (
              <option value={option} key={i}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="size">
        <label className="optionName">
          <div>size</div>
          <select name="size" value={selectedSize} onChange={onSizeChange}>
            <option value={""}>옵션 선택</option>
            {product?.size.map((option, i) => (
              <option value={option} key={i}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default ProductInfoBody;

const ProductInfoBodyStyle = css`
  display: flex;
  flex-direction: column;

  margin-bottom: auto;
  padding: 1rem;

  label {
    display: flex;
    width: 100%;

    justify-content: space-between;
    align-items: center;

    margin: 1rem 0;
  }

  select {
    width: 50%;
    padding: 0.8em 0.5em;
    border: 1px solid ${palette.grey["500"]};
    font-family: inherit;
    border-radius: 0.3rem;
  }
  .optionName {
    color: ${palette.grey["800"]};
  }
`;
