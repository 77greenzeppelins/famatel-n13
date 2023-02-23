import React, { ReactElement, useState } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import GniazdaBlokadaStaleContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/2.2_gniazda-blokada-stale/GniazdaBlokadaStaleContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  adapteryPrzemysloweSchuko_SubCategory_data,
  adapteryPrzemysloweSchuko_productCards_data,
} from '../../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_1_schuko_data';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';
import AdapteryPrzemysloweSchukoContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/3.1_adaptery-przemyslowe-schuko/AdapteryPrzemysloweSchukoContent';

/**--------------------------------------**/
const GniazdaBlokadaStaleProductPage: NextPageWithLayout = () => {
  /**Router Section**/
  //   const router = useRouter();
  //   console.log('obudowyPusteSubCategoryData:', obudowyPusteSubCategoryData);
  /**...**/

  /**JSX**/
  return (
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
      subCategoryUrl={adapteryPrzemysloweSchuko_SubCategory_data.subCategoryUrl}
    >
      <AdapteryPrzemysloweSchukoContent
        productCardsData={adapteryPrzemysloweSchuko_productCards_data}
      />
    </ProductPageTemplate>
  );
};

GniazdaBlokadaStaleProductPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};

export default GniazdaBlokadaStaleProductPage;
