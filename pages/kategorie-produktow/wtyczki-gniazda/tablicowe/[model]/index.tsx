import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import WtyczkiGniazdaTablicoweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/1.2_wtyczki-gniazda-tablicowe/WtyczkiGniazdaTablicoweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  gniazdaTablicowe_SubCategory_data,
  productCardsData,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_2_tablicowe_data';

/**--------------------------------------**/
const GniazdaTablicoweProductPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>Osprzęt elektryczny tablicowy | Famatel Polska</title>
        <meta
          property="og:title"
          content="Osprzęt elektryczny tablicowy &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna osprzętu elektrycznego tablicowego marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna osprzętu elektrycznego tablicowego marki Famatel."
        ></meta>
      </Head>
      <ProductPageTemplate
        productCardsData={productCardsData}
        //___data for navSection => data about category
        categoryName={
          catalogStructureData[
            mainCategoriesSummaryData.wtyczkiGniazda.categoryIndex
          ].mainCategoryName
        }
        categoryUrl={
          catalogStructureData[
            mainCategoriesSummaryData.wtyczkiGniazda.categoryIndex
          ].mainCategoryUrl
        }
        //___data for navSection => data about subCategory
        subCategoryName={gniazdaTablicowe_SubCategory_data.subCategoryName}
        subCategoryUrl={gniazdaTablicowe_SubCategory_data.subCategoryUrl}
      >
        <WtyczkiGniazdaTablicoweContent productCardsData={productCardsData} />
      </ProductPageTemplate>
    </>
  );
};

export default GniazdaTablicoweProductPage;
