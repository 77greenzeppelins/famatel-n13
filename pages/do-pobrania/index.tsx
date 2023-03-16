import type { ReactElement } from 'react';
/**Components**/
import Layout from '../../components/layouts/rootLayout/Layout';
import DoPobraniaContent from '../../components/pagesComponents/doPobrania/DoPobraniaContent';

// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
import type { NextPageWithLayout } from '../_app';

/**--------------------------------------------**/
const DoPobraniaPage: NextPageWithLayout = () => {
  /**JSX**/
  return <DoPobraniaContent />;
};

DoPobraniaPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {/* <NestedLayout>{page}</NestedLayout> */}
      {page}
    </Layout>
  );
};

export default DoPobraniaPage;
