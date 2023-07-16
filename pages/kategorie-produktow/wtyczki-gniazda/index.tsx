import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect } from 'react';
/**Components**/
import PageTransitionHolder from '../../../components/layouts/pseudoLayouts/pagesTransitionHolder/PagesTransitionHolder';
import CategoryPageTemplate from '../../../components/multipagesComponents/_categoryPageTemplate/CategoryPageTemplate';
/**BasicData**/
import { catalogStructureData } from '../../../data/_catalogStructure_data';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  /*
  __1__ With these steps, Next.js app will always scroll to the top of the page when a new page is loaded
  */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**JSX**/
  return (
    <PageTransitionHolder>
      <Head>
        <title>Przemysłowe wtyczki i gniazda | Famatel Polska</title>
        <meta
          property="og:title"
          content="Przemysłowe wtyczki i gniazda &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą przemysłowych wtyczek i gniazd marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą przemysłowych wtyczek i gniazd marki Famatel."
        ></meta>
      </Head>

      <div className="fc flex-col w-full bg-dark">
        <CategoryPageTemplate
          mainCategoryIndex={catalogStructureData[0].mainCategoryIndex}
        />
      </div>
    </PageTransitionHolder>
  );
};

export default KategorieProduktowPage;
