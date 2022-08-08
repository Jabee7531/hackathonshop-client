import { css } from "@emotion/react";
import Link from "next/link";
import palette from "../../lib/palette";

const LogoBanner = () => {
  return (
    <div css={LogoBannerStyle}>
      <Link href="/">Hack ShoP</Link>
    </div>
  );
};

export default LogoBanner;

const LogoBannerStyle = css`
  display: flex;

  height: 7rem;
  width: 1300px;

  margin: 0 auto;

  justify-content: center;
  align-items: center;

  font-size: 2.5rem;

  cursor: default;

  a {
    color: ${palette.black};
    text-decoration: none;
  }
`;
