import Document, { Html, Head, Main, NextScript } from 'next/document';
/**Fonts Staff
 * resource: doc. & https://www.youtube.com/watch?v=L8_98i_bMMA
 **/
// import localFont from '@next/font/local';

// import locScrollInstance from '../../pagesLayouts/locomotiveComponents/locScrollInstance';
// import LocomotiveContainer from '../../pagesLayouts/locomotiveComponents/LocomotiveContainer';
// const haasFont = localFont({
//   src: '../../../../public/fonts/HaasGrotDisp-55Roman.woff2',
//___
// subsets: ["latin"]
// variable: "--font-haas"
// });

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta property="og:site_name" content="Famatel Polska"></meta>
          <meta property="og:type" content="website"></meta>
          {/*
        resource: https://moz.com/blog/the-ultimate-guide-to-seo-meta-tags
    */}
          <meta
            httpEquiv="Content-Type"
            content="text/html; charset=ISO-8859-1"
          />
          <meta lang="pl" dir="ltr" />
          <meta
            name="description"
            content="Famatel to międzynarodowy producent rozwiązań z zakresu  elektryki przemysłowej z ponad 30-letnim doświadczeniem. Oferujemy wysokiej jakości produkty, takie jak rozdzielnice, gniazda i wtyczki, które spełniają najwyższe standardy bezpieczeństwa i jakości. Dołącz do grona naszych zadowolonych klientów już dziś!"
          ></meta>
          {/*
           Nasze rozwiązania są projektowane z myślą o złożonych potrzebach przemysłu, zapewniając niezawodność i wydajność w każdych warunkach.
          */}

          {/* <title>Famatel Polska</title> */}
          <link rel="canonical" href="https://www.famatel.pl" />
        </Head>
        <body>
          <Main
          //className={`${haasFont.className} flex w-full h-full`}
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
