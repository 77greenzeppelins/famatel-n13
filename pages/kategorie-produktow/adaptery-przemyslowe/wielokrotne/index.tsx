import Head from 'next/head';
import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../../components/layouts/rootLayout/Layout';
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
/**BasicData*/
import { adapteryPrzemysloweSubCategoriesData } from '../../../../data/categoriesData/cat_3_adaptery-przemyslowe/_cat3_adaptery-przemyslowe_data';
import { adapteryPrzemysloweWielokrotne_productCards_data } from '../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_2_wielokrotne_data';
/**TS**/
import type { NextPageWithLayout } from '../../../_app';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <SubCategoryPageTemplate
      subCategoryData={adapteryPrzemysloweSubCategoriesData[1]}
      productCardsData={adapteryPrzemysloweWielokrotne_productCards_data}
    />
  );
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Adaptery wielokrotne przemysłowe | Famatel Polska</title>
        <meta
          property="og:title"
          content="Adaptery wielokrotne przemysłowe &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą adapterów wielokrotnych przemysłowych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą adapterów wielokrotnych przemysłowych marki Famatel."
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
