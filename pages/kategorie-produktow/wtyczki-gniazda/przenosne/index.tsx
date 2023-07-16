import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
import WtyczkiGniazdaPrzenosneChildren from '../../../../components/pagesComponents/_nestedPages/1_subKategorie/1.1_wtyczki-gniazda-przenosne/WtyczkiGniazdaPrzenosneChildren';
/**BasicData*/
import { wtyczkiGniazdaSubCategoriesData } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/_cat1_wtyczki-gniazda_data';
import { productCardsData } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_1_przenosne_data';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>Wtyczki i gniazda przenośne | Famatel Polska</title>
        <meta
          property="og:title"
          content="Wtyczki i gniazda przenośne &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę wtyczek i gniazd przenośnych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę wtyczek i gniazd przenośnych marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={wtyczkiGniazdaSubCategoriesData[0]}
        productCardsData={productCardsData}
      >
        <WtyczkiGniazdaPrzenosneChildren />
      </SubCategoryPageTemplate>
    </>
  );
};

export default KategorieProduktowPage;
