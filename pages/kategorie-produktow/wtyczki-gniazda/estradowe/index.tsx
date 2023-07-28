import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect } from 'react';
/**Components*/
import PageWrapper from '../../../../components/layouts/pseudoLayouts/pageWrapper/PageWrapper';
import Footer from '../../../../components/layouts/rootLayout/footer/Footer';
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData*/
import { wtyczkiGniazdaSubCategoriesData } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/_cat1_wtyczki-gniazda_data';
import { wtyczkiGniazdaEstradowe_productCard_data } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_8_estradowe_data';

/**----------------------------------------------**/
const EstradowePage: NextPage = () => {
  /*
  __1__ With these steps, Next.js app will always scroll to the top of the page when a new page is loaded
  */
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  /**JSX**/
  return (
    <>
      <PageWrapper>
        <Head>
          <title>Wtyczki i gniazda estradowe | Famatel Polska</title>
          <meta
            property="og:title"
            content="Wtyczki i gniazda estradowe &nbsp;|&nbsp; Famatel Polska"
          ></meta>
          <meta
            name="description"
            content="Poznaj ofertę wtyczek i gniazd estradowych marki Famatel."
          ></meta>
          <meta
            property="og:description"
            content="Poznaj ofertę wtyczek i gniazd estradowych marki Famatel."
          ></meta>
        </Head>
        <SubCategoryPageTemplate
          subCategoryData={wtyczkiGniazdaSubCategoriesData[7]}
          productCardsData={wtyczkiGniazdaEstradowe_productCard_data}
        />
        {/* <div className="bg-green-400 h-[25vh] w-full"></div>
        <div className="bg-green-800 h-[25vh] w-full"></div> */}
      </PageWrapper>
      <Footer />
    </>
  );
};

export default EstradowePage;
