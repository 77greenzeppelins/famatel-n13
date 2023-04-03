import Head from 'next/head';
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
    <div className="flex flex-col w-full min-h-screen bg-dark">
      <RozlacznikiBezpieczenstwaContent
        uniqueKey={0}
        categoryName={catalogStructureData[5].mainCategoryName}
      />
    </div>
  );
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Rozłączniki bezpieczeństwa | Famatel Polska</title>
        <meta
          property="og:title"
          content="Rozłączniki bezpieczeństwa &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą rozłączników bezpieczeństwa marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą rozłączników bezpieczeństwa marki Famatel."
        ></meta>
      </Head>
      <Layout>
        {/* <NestedLayout>{page}</NestedLayout> */}
        {page}
      </Layout>
    </>
  );
};

export default KategorieProduktowPage;
