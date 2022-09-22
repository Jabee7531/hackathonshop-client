import Document, { Html, Head, Main, NextScript } from "next/document";

export default class RootDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="HackathonShop" />
          <link rel="icon" href="/favicon.ico" />
          {/* google Oatuh */}
          <script src="https://apis.google.com/js/api:client.js" async></script>
          {/* 토스 SDK */}
          <script src="https://js.tosspayments.com/v1" async />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
