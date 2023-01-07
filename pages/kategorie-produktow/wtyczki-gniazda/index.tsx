import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../components/layouts/rootLayout/Layout';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
import type { NextPageWithLayout } from '../../_app';

const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <div className="fc w-full h-full ">
      <p className="text-3xl text-corpo">Wtyczki Gniazda</p>
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
