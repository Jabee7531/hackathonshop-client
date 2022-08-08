import { css } from "@emotion/react";
import Image from "next/image";
import { Cart, ProductReview } from "../../interface/interfaces";
import useCart from "../../hooks/useCart";
import Board from "../common/Board";
import useIsCSR from "../../hooks/useIsCSR";
import useProductPageQuery from "../../hooks/query/productPage/useProductPageQuery";
import ProductCartItem from "./subComponents/ProductCartItem";
import ProductInfoHead from "./subComponents/ProductInfoHead";
import ProductInfoBody from "./subComponents/ProductInfoBody";
import ProductInfoFooter from "./subComponents/ProductInfoFooter";

const ProductPage = () => {
  const { product } = useProductPageQuery();
  const { isCSR } = useIsCSR();
  const { carts, totalPrice } = useCart(product?.id);

  const productReviewMock: ProductReview[] = [
    {
      id: "dee0f2f9-f2d5-4f8f-abdc-3c2ca2a38d13",
      index: 1,
      author: "자비",
      created_at: "2022-07-18 10:21:01.895",
      updated_at: "2022-07-18 10:21:01.895",
      is_deleted: false,
      product: product!,
      review: "리뷰!!",
      title: "test",
    },
    {
      id: "dee0f2f9-f2d5-4f8f-abdc-3c2ca2a38d13",
      index: 2,
      author: "자비",
      created_at: "2022-07-18 10:21:01.895",
      updated_at: "2022-07-18 10:21:01.895",
      is_deleted: false,
      product: product!,
      review: "리뷰!!",
      title: "test",
    },
    {
      id: "dee0f2f9-f2d5-4f8f-abdc-3c2ca2a38d13",
      index: 3,
      author: "자비",
      created_at: "2022-07-18 10:21:01.895",
      updated_at: "2022-07-18 10:21:01.895",
      is_deleted: false,
      product: product!,
      review: "리뷰!!",
      title: "test",
    },
    {
      id: "dee0f2f9-f2d5-4f8f-abdc-3c2ca2a38d13",
      index: 4,
      author: "자비",
      created_at: "2022-07-18 10:21:01.895",
      updated_at: "2022-07-18 10:21:01.895",
      is_deleted: false,
      product: product!,
      review: "리뷰!!",
      title: "test",
    },
    {
      id: "dee0f2f9-f2d5-4f8f-abdc-3c2ca2a38d13",
      index: 5,
      author: "자비",
      created_at: "2022-07-18 10:21:01.895",
      updated_at: "2022-07-18 10:21:01.895",
      is_deleted: false,
      product: product!,
      review: "리뷰!!",
      title: "test",
    },
    {
      id: "dee0f2f9-f2d5-4f8f-abdc-3c2ca2a38d13",
      index: 6,
      author: "자비",
      created_at: "2022-07-18 10:21:01.895",
      updated_at: "2022-07-18 10:21:01.895",
      is_deleted: false,
      product: product!,
      review: "리뷰!!",
      title: "test",
    },
    {
      id: "dee0f2f9-f2d5-4f8f-abdc-3c2ca2a38d13",
      index: 7,
      author: "자비",
      created_at: "2022-07-18 10:21:01.895",
      updated_at: "2022-07-18 10:21:01.895",
      is_deleted: false,
      product: product!,
      review: "리뷰!!",
      title: "test",
    },
  ];

  return (
    <div css={productPageStyle}>
      <div css={headerStyle}>
        <div className="images">
          <Image layout="fill" src={product ? product.photos[0] : ""} />
        </div>
        <div className="info">
          <ProductInfoHead product={product} />
          <ProductInfoBody product={product} />
          <div className="cart">
            {isCSR &&
              carts.map((item: Cart) => (
                <ProductCartItem
                  key={item.product.id + item.product.color + item.product.size}
                  item={item}
                />
              ))}
          </div>
          <ProductInfoFooter carts={carts} totalPrice={totalPrice} />
        </div>
      </div>
      <div css={bodyStyle}>
        <div>- 제품 정보 -</div>
        <div className="ProductInfo">
          <Image
            layout="fill"
            src="https://atimg.sonyunara.com/attrangs/story/sk4770_3/1.jpg"
          />
        </div>
      </div>
      <div css={footerStyle}>- 구매후기 -</div>
      <Board title="구매후기" data={productReviewMock} />
    </div>
  );
};

export default ProductPage;

const productPageStyle = css``;

const headerStyle = css`
  display: flex;

  .images {
    display: flex;

    height: 40rem;
    position: relative;

    width: 50%;
  }

  .info {
    display: flex;
    flex-direction: column;

    width: 50%;

    padding-left: 5%;
    .cart {
    }
  }
`;

const bodyStyle = css`
  display: flex;
  flex-direction: column;

  margin: 3rem 0;

  text-align: center;

  .ProductInfo {
    position: relative;

    width: 100%;
    height: 6316px;

    margin: 2rem 0;
  }
`;

const footerStyle = css`
  margin: 3rem 0;

  text-align: center;
`;
