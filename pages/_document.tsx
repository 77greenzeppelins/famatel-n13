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
          {/*
        resource: https://moz.com/blog/the-ultimate-guide-to-seo-meta-tags
    */}
          <meta
            httpEquiv="Content-Type"
            content="text/html; charset=ISO-8859-1"
          />
          <meta lang="pl" />
          <meta
            name="description"
            content="We are specialised manufacturers in the international electrical sector with more than 30 years of experience developing electrical solutions that provide value to professionals."
            // content="We are specialised manufacturers in the international electrical sector with more than 30 years of experience developing electrical solutions that provide value to professionals."
          ></meta>
          <title>Famatel Polska</title>
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
