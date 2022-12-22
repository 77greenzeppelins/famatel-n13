import type { ReactElement } from 'react';
import Layout from '../../components/layouts/rootLayout/Layout';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
import type { NextPageWithLayout } from '../_app';

const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <div className="relative">
      <div className="h-[50vh] bg-green-900"> </div>
      <div className="h-[50vh] bg-red-900"></div>
      <div className="h-[50vh] bg-green-700"></div>
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
