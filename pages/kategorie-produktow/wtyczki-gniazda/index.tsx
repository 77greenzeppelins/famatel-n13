import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect } from 'react';
/**Components**/
import PageWrapper from '../../../components/layouts/pseudoLayouts/pageWrapper/PageWrapper';
import Footer from '../../../components/layouts/rootLayout/footer/Footer';
import CategoryPageTemplate from '../../../components/multipagesComponents/_categoryPageTemplate/CategoryPageTemplate';
/**BasicData**/
import { catalogStructureData } from '../../../data/_catalogStructure_data';

/**--------------------------------------------------------------**/
const WtyczkiGniazdaPage: NextPage = () => {
  /*
  __1__ With these steps, Next.js app will always scroll to the top of the page when a new page is loaded
  */
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  // useEffect(() => {
  //   scrollToTop();
  // }, []);

  /**JSX**/
  return (
    <>
      <PageWrapper>
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

        <div className="flex-col w-full fc bg-dark">
          <CategoryPageTemplate
            mainCategoryIndex={catalogStructureData[0].mainCategoryIndex}
          />
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default WtyczkiGniazdaPage;
