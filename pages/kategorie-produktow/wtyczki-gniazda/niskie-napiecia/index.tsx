import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
import WtyczkiGniazdaNiskieNapieciaChildren from '../../../../components/pagesComponents/_nestedPages/1_subKategorie/1.6_wtyczki-gniazda-niskie-napiecia/WtyczkiGniazdaNiskieNapieciaChildren';
/**BasicData**/
import { wtyczkiGniazdaSubCategoriesData } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/_cat1_wtyczki-gniazda_data';
import { productCardsData } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_6_niskie-napiecia_data';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wtyczki i gniazda na niskie napięcia | Famatel Polska</title>
        <meta
          property="og:title"
          content="Wtyczki i gniazda na niskie napięcia &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę wtyczek i gniazd na niskie napięcia marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę wtyczek i gniazd na niskie napięcia marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={wtyczkiGniazdaSubCategoriesData[5]}
        productCardsData={productCardsData}
      >
        <WtyczkiGniazdaNiskieNapieciaChildren />
      </SubCategoryPageTemplate>
    </>
  );
};

export default KategorieProduktowPage;
