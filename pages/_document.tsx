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
          {/* Google Font */}
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          />
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
