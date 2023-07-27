import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl" dir="ltr">
        <Head>
          <meta
            httpEquiv="Content-Type"
            content="text/html; charset=ISO-8859-1"
          />
          <meta property="og:site_name" content="Famatel Polska"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:locale" content="pl"></meta>
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta
            name="twitter:image"
            content="https://famatel.pl/images/oFirmiePage/dirtyPlug_1.webp"
          ></meta>
          <meta
            name="twitter:image:alt"
            content="Przemysłowa wtyczka używana w trudnych warunkach terenowych"
          ></meta>
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          ></meta>
          <link rel="shortcut icon" href="/faviconFamatel.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
