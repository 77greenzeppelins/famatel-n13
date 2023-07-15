import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import ObudowyGumoweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/8.3_obudowy-gumowe/ObudowyGumoweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  rozdzielniceGumoweSubCategoryData,
  productCardsData,
} from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_3_gumowe';

/**--------------------------------------**/
const ObudowyPusteProductPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>Obudowa gumowa | Famatel Polska</title>
        <meta
          property="og:title"
          content="Obudowa gumowa &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna obudowy gumowej marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna obudowy gumowej marki Famatel."
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
        subCategoryName={rozdzielniceGumoweSubCategoryData.subCategoryName}
        subCategoryUrl={rozdzielniceGumoweSubCategoryData.subCategoryUrl}
      >
        <ObudowyGumoweContent productCardsData={productCardsData} />
      </ProductPageTemplate>
    </>
  );
};

export default ObudowyPusteProductPage;
