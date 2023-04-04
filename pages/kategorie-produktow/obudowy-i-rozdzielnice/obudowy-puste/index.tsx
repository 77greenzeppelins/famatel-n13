import Head from 'next/head';
import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../../components/layouts/rootLayout/Layout';
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
/**BasicData*/
import { obudowyRozdzielniceSubCategoriesData } from '../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/_cat8_obudowy-i-rozdzielnice_data';
import { productCardsData } from '../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_1_obudowy-puste';
/**TS**/
import type { NextPageWithLayout } from '../../../_app';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <SubCategoryPageTemplate
      subCategoryData={obudowyRozdzielniceSubCategoriesData[0]}
      productCardsData={productCardsData}
    />
  );
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Obudowy puste | Famatel Polska</title>
        <meta
          property="og:title"
          content="Obudowy puste &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę obudów pustych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę obudów pustych marki Famatel."
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
