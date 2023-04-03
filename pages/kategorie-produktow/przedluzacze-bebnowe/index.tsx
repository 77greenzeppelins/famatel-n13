import Head from 'next/head';
import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../components/layouts/rootLayout/Layout';
import CategoryPageTemplate from '../../../components/multipagesComponents/_categoryPageTemplate/CategoryPageTemplate';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
/**BasicData*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';
/**TS**/
import type { NextPageWithLayout } from '../../_app';

/**----------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <div className="fc flex-col w-full min-h-screen bg-dark">
      <CategoryPageTemplate
        mainCategoryIndex={catalogStructureData[4].mainCategoryIndex}
      />
    </div>
  );
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Przedłużacze bębnowe | Famatel Polska</title>
        <meta
          property="og:title"
          content="Przedłużacze bębnowe &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą przedłużaczy bębnowych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą przedłużaczy bębnowych marki Famatel."
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
