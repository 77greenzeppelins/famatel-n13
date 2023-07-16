import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData*/
import { wtyczkiGniazdaSubCategoriesData } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/_cat1_wtyczki-gniazda_data';
import { wtyczkiGniazdaCampingowe_productCard_data } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_9_campingowe_data';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wtyczki i gniazda campingowe | Famatel Polska</title>
        <meta
          property="og:title"
          content="Wtyczki i gniazda campingowe &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę wtyczek i gniazd campingowych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę wtyczek i gniazd campingowych marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={wtyczkiGniazdaSubCategoriesData[8]}
        productCardsData={wtyczkiGniazdaCampingowe_productCard_data}
      />
    </>
  );
};

export default KategorieProduktowPage;
