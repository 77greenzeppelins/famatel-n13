import type { ReactElement } from 'react';
import Layout from '../../components/layouts/rootLayout/Layout';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
import type { NextPageWithLayout } from '../_app';

const KontaktPage: NextPageWithLayout = () => {
  return (
    <div className="relative">
      <div className="h-screen bg-light"> </div>
    </div>
  );
};

KontaktPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};

export default KontaktPage;
