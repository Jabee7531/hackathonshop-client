import { css } from "@emotion/react";

const Footer = () => {
  return (
    <div css={FooterStyle}>
      이미지는 https://attrangs.co.kr/ 에서 가져와 사용하였으며 구매를 원하시면
      해당 홈페이지에서 구매하실 수 있습니다.
    </div>
  );
};

export default Footer;

const FooterStyle = css`
  display: flex;

  height: 7rem;
  width: 1300px;

  margin: 0 auto;

  text-align: center;
  font-size: 1.5rem;
`;
