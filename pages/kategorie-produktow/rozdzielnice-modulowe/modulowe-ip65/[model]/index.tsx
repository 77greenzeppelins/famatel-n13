import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import RozdzielniceModuloweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/9.2_rozdzielnice-modulowe/RozdzielniceModuloweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import {
  rozdzielniceModuloweSubCategoryData,
  productCardsData,
} from '../../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/subCategories/_subCat_2_modulowe';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';

/**------------------------------------------------------**/
const RozdzielniceModuloweProductPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>Rozdzielnica modułowa IP65 | Famatel Polska</title>
        <meta
          property="og:title"
          content="Rozdzielnica modułowa IP65 &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna rozdzielnicy modułowej IP65 marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna rozdzielnicy modułowej IP65 marki Famatel."
        ></meta>
      </Head>
      <ProductPageTemplate
        //___data about product => mainly its url that is used to identify data in array
        productCardsData={productCardsData}
        //___data for navSection => data about category
        categoryName={
          catalogStructureData[
            mainCategoriesSummaryData.rozdzielniceModulowe.categoryIndex
          ].mainCategoryName
        }
        categoryUrl={
          catalogStructureData[
            mainCategoriesSummaryData.rozdzielniceModulowe.categoryIndex
          ].mainCategoryUrl
        }
        //___data for navSection => data about subCategory
        subCategoryName={rozdzielniceModuloweSubCategoryData.subCategoryName}
        subCategoryUrl={rozdzielniceModuloweSubCategoryData.subCategoryUrl}
      >
        <RozdzielniceModuloweContent productCardsData={productCardsData} />
      </ProductPageTemplate>
    </>
  );
};

export default RozdzielniceModuloweProductPage;
