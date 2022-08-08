import { css } from "@emotion/react";
import Link from "next/link";
import palette from "../../lib/palette";

const Navbar = () => {
  return (
    <div css={NavbarStyle}>
      <div css={NavbarContent}>
        <div className="navigation">
          <Link href="/products/Best">Best</Link>
        </div>
        <div className="navigation">
          <Link href="/products/category/티셔츠&블라우스&가디건&자켓">
            상의
          </Link>
          <div className="navigation-content">
            <Link href={`/products/category/티셔츠`}>티셔츠</Link>
            <Link href={`/products/category/블라우스`}>블라우스</Link>
            <Link href={`/products/category/가디건`}>가디건</Link>
            <Link href={`/products/category/자켓`}>자켓</Link>
          </div>
        </div>
        <div className="navigation">
          <Link href="/products/category/팬츠&슬랙스&스커트">하의</Link>
          <div className="navigation-content">
            <Link href={`/products/category/팬츠`}>팬츠</Link>
            <Link href={`/products/category/슬랙스`}>슬랙스</Link>
            <Link href={`/products/category/스커트`}>스커트</Link>
          </div>
        </div>
        <div className="navigation">
          <Link href="/products/category/원피스">원피스</Link>
          <div className="navigation-content">
            <Link href={`/products/category/원피스`}>원피스</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const NavbarStyle = css`
  position: sticky;
  top: calc(3rem - 2px);
  z-index: 2;

  height: 4rem;
  width: 1300px;

  margin: 0 auto;

  background-color: ${palette.grey["100"]};

  border-top: 1px solid ${palette.grey["300"]};

  a {
    margin: 0 1rem;

    text-decoration: none;
    color: ${palette.grey["700"]};

    &:visited {
      color: ${palette.grey["700"]};
    }
    &:hover {
      font-weight: bold;
    }
  }
`;
const NavbarContent = css`
  display: flex;

  height: 100%;
  width: 100%;

  align-items: center;

  font-size: 1.25rem;

  .navigation {
    &:hover {
      .navigation-content {
        display: flex;
      }
    }

    .navigation-content {
      display: none;
      flex-direction: column;
      position: absolute;

      min-width: 160px;

      background-color: ${palette.grey["100"]};

      font-size: 1.25rem;
      border-radius: 4px;
      border: 1px solid ${palette.grey["500"]};
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;

      a {
        margin: 1rem;
      }
    }
  }
`;
