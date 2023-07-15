import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect } from 'react';
/**Components*/
import CategoryPageTemplate from '../../../components/multipagesComponents/_categoryPageTemplate/CategoryPageTemplate';
import GniazdaBlokadaChildren from '../../../components/pagesComponents/_nestedPages/0_kategorie/2_gniazda-z-blokada/GniazdaBlokadaChildren';
/**BasicData*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';

/**--------------------------------------------------------------**/
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

  /**JSX**/
  return (
    <>
      <Head>
        <title>Gniazda z rozłącznikiem i blokadą | Famatel Polska</title>
        <meta
          property="og:title"
          content="Gniazda z rozłącznikiem i blokadą &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą gniazd z rozłącznikiem i blokadą marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą gniazd z rozłącznikiem i blokadą marki Famatel."
        ></meta>
      </Head>
      <div className="fc flex-col w-full bg-dark">
        <CategoryPageTemplate
          mainCategoryIndex={catalogStructureData[1].mainCategoryIndex}
        >
          <GniazdaBlokadaChildren />
        </CategoryPageTemplate>
      </div>
    </>
  );
};

export default KategorieProduktowPage;
