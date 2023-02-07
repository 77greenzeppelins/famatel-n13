import React, { ReactElement, useState } from 'react';
/**Components**/
import Layout from '../../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import AdapteryPrzemysloweWielokrotneContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/3.2_adaptery-przemuslowe-wielokrotne/AdapteryPrzemysloweWielokrotneContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  adapteryPrzemysloweWielokrotne_SubCategory_data,
  adapteryPrzemysloweWielokrotne_productCards_data,
} from '../../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_2_wielokrotne_data';
/**TS**/
import { NextPageWithLayout } from '../../../../_app';

/**--------------------------------------**/
const GniazdaBlokadaStaleProductPage: NextPageWithLayout = () => {
  /**Router Section**/
  //   const router = useRouter();
  //   console.log('obudowyPusteSubCategoryData:', obudowyPusteSubCategoryData);
  /**...**/

  /**JSX**/
  return (
    <ProductPageTemplate
      productCardsData={adapteryPrzemysloweWielokrotne_productCards_data}
      //___data for <ProductPageNavPanel> => data about category
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
      //___data for <ProductPageNavPanel> => data about subCategory
      subCategoryName={
        adapteryPrzemysloweWielokrotne_SubCategory_data.subCategoryName
      }
      subCategoryUrl={
        adapteryPrzemysloweWielokrotne_SubCategory_data.subCategoryUrl
      }
    >
      <AdapteryPrzemysloweWielokrotneContent
        productCardsData={adapteryPrzemysloweWielokrotne_productCards_data}
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
