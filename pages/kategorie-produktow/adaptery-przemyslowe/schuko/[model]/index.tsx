import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import AdapteryPrzemysloweSchukoContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/3.1_adaptery-przemyslowe-schuko/AdapteryPrzemysloweSchukoContent';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  adapteryPrzemysloweSchuko_SubCategory_data,
  adapteryPrzemysloweSchuko_productCards_data,
} from '../../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_1_schuko_data';
/**TS**/

/**--------------------------------------**/
const AdapterSchukoProductPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>{`${adapteryPrzemysloweSchuko_productCards_data[0].altName} | Famatel Polska`}</title>
        <meta
          property="og:title"
          content={`${adapteryPrzemysloweSchuko_productCards_data[0].altName} &nbsp;|&nbsp; Famatel Polska`}
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą adapterów przemysłowych Schuko marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą adapterów przemysłowych Schuko marki Famatel."
        ></meta>
      </Head>
      <ProductPageTemplate
        productCardsData={adapteryPrzemysloweSchuko_productCards_data}
        //___data for navSection => data about category
        categoryName={
          catalogStructureData[
            mainCategoriesSummaryData.adapteryPrzemyslowe.categoryIndex
          ].mainCategoryName
        }
        categoryUrl={
          catalogStructureData[
            mainCategoriesSummaryData.adapteryPrzemyslowe.categoryIndex
          ].mainCategoryUrl
        }
        //___data for navSection => data about subCategory
        subCategoryName={
          adapteryPrzemysloweSchuko_SubCategory_data.subCategoryName
        }
        subCategoryUrl={
          adapteryPrzemysloweSchuko_SubCategory_data.subCategoryUrl
        }
      >
        <AdapteryPrzemysloweSchukoContent
          productCardsData={adapteryPrzemysloweSchuko_productCards_data}
        />
      </ProductPageTemplate>
    </>
  );
};

export default AdapterSchukoProductPage;
