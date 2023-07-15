import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect } from 'react';
/**Components*/
import GniazdaPodwieszaneContent from '../../../components/pagesComponents/_nestedPages/0_kategorie/4_gniazdaPodwieszane/GniazdaPodwieszaneCatContent';
/**BasicData*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';
/**TS**/

/**------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  /*
  __1__ With these steps, Next.js app will always scroll to the top of the page when a new page is loaded
  */
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Head>
        <title>Gniazda podwieszane | Famatel Polska</title>
        <meta
          property="og:title"
          content="Gniazda podwieszane &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą gniazd podwieszanych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą gniazd podwieszanych marki Famatel."
        ></meta>
      </Head>
      <div className="fc flex-col w-full pt-[60px] bg-dark">
        <GniazdaPodwieszaneContent
          categoryName={catalogStructureData[3].mainCategoryName}
        />
      </div>
    </>
  );
};

export default KategorieProduktowPage;
