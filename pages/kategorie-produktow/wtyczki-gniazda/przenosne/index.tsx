import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../../components/layouts/rootLayout/Layout';
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';

// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
import type { NextPageWithLayout } from '../../../_app';
/**BasicData*/
import { wtyczkiGniazdaSubCategoriesData } from '../../../../data/categoriesData/_cat1_wtyczki-gniazda_data';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <SubCategoryPageTemplate
      subCategoryIndex={wtyczkiGniazdaSubCategoriesData[0].arrayIndex}
    />
  );
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};

export default KategorieProduktowPage;
