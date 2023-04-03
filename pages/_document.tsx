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
