import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData*/
import { wtyczkiGniazdaSubCategoriesData } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/_cat1_wtyczki-gniazda_data';
import { wtyczkiGniazdaEstradowe_productCard_data } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_8_estradowe_data';

/**----------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  /**JSX**/
  return (
    <>
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
    </>
  );
};

export default KategorieProduktowPage;
