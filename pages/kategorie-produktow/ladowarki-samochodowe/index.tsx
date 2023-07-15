import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect } from 'react';
/**Components*/
import LadowarkiSamochodoweContent from '../../../components/pagesComponents/_nestedPages/0_kategorie/7_ladowarkiSamochodowe/LadowarkiSamochodoweCatContent';
/**BasicData*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';

/**--------------------------------------------------------**/
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
        <title>Ładowarki samochodowe | Famatel Polska</title>
        <meta
          property="og:title"
          content="Ładowarki samochodowe &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą ładowarek samochodowych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą ładowarek samochodowych marki Famatel."
        ></meta>
      </Head>
      <div className="fc flex-col w-full bg-dark">
        <LadowarkiSamochodoweContent
          categoryName={catalogStructureData[6].mainCategoryName}
        />
      </div>
    </>
  );
};

export default KategorieProduktowPage;
