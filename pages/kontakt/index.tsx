import type { ReactElement } from 'react';
/**Components**/
import Layout from '../../components/layouts/rootLayout/Layout';
import KontaktContent from '../../components/pagesComponents/kontakt/KontaktContent';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
import type { NextPageWithLayout } from '../_app';

const KontaktPage: NextPageWithLayout = () => {
  return <KontaktContent />;
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
