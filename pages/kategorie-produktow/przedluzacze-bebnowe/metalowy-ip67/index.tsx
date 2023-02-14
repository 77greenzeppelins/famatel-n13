import React, { ReactElement } from 'react';
/**Components**/
import Layout from '../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplateShort from '../../../../components/multipagesComponents/_productPageTemplateShort/ProductPageTemplateShort';
import PrzedluzaczeBebnoweMetaloweContent from '../../../../components/pagesComponents/_nestedPages/2_produkty/5.3_short_przedluzacze-bebnowe-metalowe/PrzedluzaczeBebnoweMetaloweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../data/_data';
import { catalogStructureData } from '../../../../data/_catalogStructure_data';
import { przedluzaczeBebnoweMetalowe_productCards_data } from '../../../../data/categoriesData/cat_5_przedluzacze-bebnowe/subCategories/_subCat_3_metalowe_data';
/**TS**/
import { NextPageWithLayout } from '../../../_app';

/**BasicData*/
const { categoryIndex } = mainCategoriesSummaryData.przedluzaczeBebnowe;

/**--------------------------------------**/
const PrzedluzaczeBebnowePrzemysloweProductPage: NextPageWithLayout = () => {
  /**JSX**/
  return (
    <ProductPageTemplateShort
      productCardsData={przedluzaczeBebnoweMetalowe_productCards_data}
      //___data for navSection => data about category
      categoryName={catalogStructureData[categoryIndex].mainCategoryName}
      categoryUrl={catalogStructureData[categoryIndex].mainCategoryUrl}
      //___data for navSection => data about subCategory
    >
      <PrzedluzaczeBebnoweMetaloweContent />
    </ProductPageTemplateShort>
  );
};

PrzedluzaczeBebnowePrzemysloweProductPage.getLayout = function getLayout(
  page: ReactElement
) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};

export default PrzedluzaczeBebnowePrzemysloweProductPage;
