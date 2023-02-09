import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../components/layouts/rootLayout/Layout';
import RozlacznikiBezpieczenstwaContent from '../../../components/pagesComponents/_nestedPages/0_kategorie/6_rozlacznikiBezpieczenstwa/RozlacznikiBezpieczenstwaCatContent';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
/**BasicData*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';
/**TS**/
import type { NextPageWithLayout } from '../../_app';

/**----------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-dark">
      <RozlacznikiBezpieczenstwaContent
        uniqueKey={0}
        nategoryName={catalogStructureData[5].mainCategoryName}
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
