import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import RozdzielnicePrzemysloweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/8.2_rozdzielnice-przemyslowe/RozdzielnicePrzemysloweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  rozdzielnicePrzemysloweSubCategoryData,
  productCardsData,
} from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_2_przemyslowe';

/**--------------------------------------------------------**/
const RozdzielnicePrzemysloweProductPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>Rozdzielnica przemysłowa | Famatel Polska</title>
        <meta
          property="og:title"
          content="Rozdzielnica przemysłowa &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna rozdzielnicy przemysłowej marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna rozdzielnicy przemysłowej marki Famatel."
        ></meta>
      </Head>
      <ProductPageTemplate
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
        subCategoryName={rozdzielnicePrzemysloweSubCategoryData.subCategoryName}
        subCategoryUrl={rozdzielnicePrzemysloweSubCategoryData.subCategoryUrl}
      >
        <RozdzielnicePrzemysloweContent productCardsData={productCardsData} />
      </ProductPageTemplate>
    </>
  );
};

export default RozdzielnicePrzemysloweProductPage;
