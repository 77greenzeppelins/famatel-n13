import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData*/
import { wtyczkiGniazdaSubCategoriesData } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/_cat1_wtyczki-gniazda_data';
import { wtyczkiGniazdaSchuko_productCards_data } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_5_jednofazowe_data';
import PageTransitionHolder from '../../../../components/layouts/pseudoLayouts/pagesTransitionHolder/PagesTransitionHolder';
import { useEffect } from 'react';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  /**...*/
  return (
    <>
      <Head>
        <title>Wtyczki i gniazda jednofazowe | Famatel Polska</title>
        <meta
          property="og:title"
          content="Wtyczki i gniazda jednofazowe &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę wtyczek i gniazd jednofazowych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę wtyczek i gniazd jednofazowych marki Famatel."
        ></meta>
      </Head>
      <PageTransitionHolder>
        <SubCategoryPageTemplate
          subCategoryData={wtyczkiGniazdaSubCategoriesData[4]}
          productCardsData={wtyczkiGniazdaSchuko_productCards_data}
        />
      </PageTransitionHolder>
    </>
  );
};

export default KategorieProduktowPage;
