import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../components/layouts/rootLayout/Layout';
import CategoryPageTemplate from '../../../components/multipagesComponents/_categoryPageTemplate/CategoryPageTemplate';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
import type { NextPageWithLayout } from '../../_app';
/**BasicData*/
import { mainCategories } from '../../../data/_data';

const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <div className="fc flex-col w-screen min-h-screen bg-dark">
      <CategoryPageTemplate mainCategoryIndex={mainCategories[10].arrayIndex} />
    </div>
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
