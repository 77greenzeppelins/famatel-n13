import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import ObudowyPusteContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/8.1_obudowy-puste/ObudowyPusteContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import {
  obudowyPusteSubCategoryData,
  productCardsData,
} from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_1_obudowy-puste';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';

/**----------------------------------------------**/
const ObudowyPusteProductPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>Obudowa pusta | Famatel Polska</title>
        <meta
          property="og:title"
          content="Obudowa pusta &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna obudowy pustej marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna obudowy pustej marki Famatel."
        ></meta>
      </Head>
      <ProductPageTemplate
        //___data about product => mainly its url that is used to identify data in array
        productCardsData={productCardsData}
        //___data for navSection => data about category
        categoryName={
          catalogStructureData[
            mainCategoriesSummaryData.obudowyRozdzielnice.categoryIndex
          ].mainCategoryName
        }
        categoryUrl={
          catalogStructureData[
            mainCategoriesSummaryData.obudowyRozdzielnice.categoryIndex
          ].mainCategoryUrl
        }
        //___data for navSection => data about subCategory
        subCategoryName={obudowyPusteSubCategoryData.subCategoryName}
        subCategoryUrl={obudowyPusteSubCategoryData.subCategoryUrl}
      >
        <ObudowyPusteContent productCardsData={productCardsData} />
      </ProductPageTemplate>
    </>
  );
};

export default ObudowyPusteProductPage;
