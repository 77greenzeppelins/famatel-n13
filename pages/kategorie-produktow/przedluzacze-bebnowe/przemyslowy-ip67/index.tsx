import React, { ReactElement } from 'react';
/**Components**/
import Layout from '../../../../components/layouts/rootLayout/Layout';
import ProductPageTemplate from '../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import PrzedluzaczeBebnowePrzemysloweContent from '../../../../components/pagesComponents/_nestedPages/2_produkty/5.2_short_przedluzacze-bebnowe-przemyslowe/PrzedluzaczeBebnowePrzemysloweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../data/_data';
import { catalogStructureData } from '../../../../data/_catalogStructure_data';
import { przedluzaczeBebnowePrzemyslowe_productCards_data } from '../../../../data/categoriesData/cat_5_przedluzacze-bebnowe/subCategories/_subCat_2_przemyslowe_data';
/**TS**/
import { NextPageWithLayout } from '../../../_app';

/**BasicData*/
const { categoryIndex } = mainCategoriesSummaryData.przedluzaczeBebnowe;

/**--------------------------------------**/
const PrzedluzaczeBebnowePrzemysloweProductPage: NextPageWithLayout = () => {
  /**JSX**/
  return (
    <ProductPageTemplate
      productCardsData={przedluzaczeBebnowePrzemyslowe_productCards_data}
      //___data for navSection => data about category
      categoryName={catalogStructureData[categoryIndex].mainCategoryName}
      categoryUrl={catalogStructureData[categoryIndex].mainCategoryUrl}
      //___data for navSection => data about subCategory
      subCategoryName={
        // catalogStructureData[categoryIndex].subCategoriesNames[1]
        ''
      }
      subCategoryUrl={catalogStructureData[categoryIndex].subCategoriesUrls[1]}
    >
      <PrzedluzaczeBebnowePrzemysloweContent />
    </ProductPageTemplate>
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