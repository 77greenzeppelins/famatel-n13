import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import GniazdaBlokadaTablicoweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/2.1_gniazda-blokada-tablicowe/GniazdaBlokadaTablicoweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  gniazdaBlokadaTablicowe_SubCategory_data,
  gniazdaBlokadaTablicowe_productCards_data,
} from '../../../../../data/categoriesData/cat_2_gniazda-z-blokada/subCategories/_subCat_1_tablicowe_data';

/**--------------------------------------**/
const GniazdaBlokadaTablicoweProductPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>
          Gniazdo tablicowe z rozłącznikiem i blokadą | Famatel Polska
        </title>
        <meta
          property="og:title"
          content="Gniazdo tablicowe z rozłącznikiem i blokadą &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna gniazda tablocowego z rozłącznikiem i blokadą marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna gniazda tablocowego z rozłącznikiem i blokadą marki Famatel."
        ></meta>
      </Head>
      <ProductPageTemplate
        productCardsData={gniazdaBlokadaTablicowe_productCards_data}
        //___data for navSection => data about category
        categoryName={
          catalogStructureData[
            mainCategoriesSummaryData.gniazdaBlokada.categoryIndex
          ].mainCategoryName
        }
        categoryUrl={
          catalogStructureData[
            mainCategoriesSummaryData.gniazdaBlokada.categoryIndex
          ].mainCategoryUrl
        }
        //___data for navSection => data about subCategory
        subCategoryName={
          gniazdaBlokadaTablicowe_SubCategory_data.subCategoryName
        }
        subCategoryUrl={gniazdaBlokadaTablicowe_SubCategory_data.subCategoryUrl}
      >
        <GniazdaBlokadaTablicoweContent
          productCardsData={gniazdaBlokadaTablicowe_productCards_data}
        />
      </ProductPageTemplate>
    </>
  );
};

export default GniazdaBlokadaTablicoweProductPage;
