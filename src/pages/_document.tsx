import Document, { Html, Head, NextScript, Main } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/PantonBlackCaps.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/RedeRoundedF31.ttf"
            as="font"
            crossOrigin=""
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet" />
          {/* <link rel="shortcut icon" href="/favicon.png" type="image/png" /> */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}