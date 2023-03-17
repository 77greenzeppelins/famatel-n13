import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../components/layouts/rootLayout/Layout';
import GniazdaPodwieszaneContent from '../../../components/pagesComponents/_nestedPages/0_kategorie/4_gniazdaPodwieszane/GniazdaPodwieszaneCatContent';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
/**BasicData*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';
/**TS**/
import type { NextPageWithLayout } from '../../_app';

/**------------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <div className="fc flex-col w-full min-h-screen bg-dark">
      <GniazdaPodwieszaneContent
        uniqueKey={0}
        categoryName={catalogStructureData[3].mainCategoryName}
      />
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
