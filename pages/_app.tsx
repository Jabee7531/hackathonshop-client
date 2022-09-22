import { css, Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Header from "../components/header/Header";
import Navbar from "../components/navBar/Navbar";
import palette from "../lib/palette";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import recoilInitializer from "../atoms/recoilInitializer";
import LogoBanner from "../components/common/LogoBanner";
import FloatingButton from "../components/common/FloatingButton";
import Footer from "../components/footer/Footer";
import GlobalDialog from "../components/globalDialog/GlobalDialog";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <RecoilRoot initializeState={recoilInitializer}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Global styles={globalStyle} />
            <GlobalDialog />
            <Header />
            <LogoBanner />
            <Navbar />
            <FloatingButton />
            <div css={MainStyle}>
              <Component {...pageProps} />
            </div>
            <Footer />
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;

const globalStyle = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    height: 100%;
    background: ${palette.grey["100"]};
  }
  html {
    box-sizing: border-box;
    * {
      box-sizing: inherit;
    }
  }
`;

const MainStyle = css`
  display: flex;
  flex-direction: column;

  width: 1300px;

  margin: 0 auto;
`;
