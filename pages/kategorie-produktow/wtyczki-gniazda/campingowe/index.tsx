import Head from 'next/head';
import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../../components/layouts/rootLayout/Layout';
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
/**BasicData*/
import { wtyczkiGniazdaSubCategoriesData } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/_cat1_wtyczki-gniazda_data';
import { wtyczkiGniazdaCampingowe_productCard_data } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_9_campingowe_data';

/**TS**/
import type { NextPageWithLayout } from '../../../_app';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <SubCategoryPageTemplate
      subCategoryData={wtyczkiGniazdaSubCategoriesData[8]}
      productCardsData={wtyczkiGniazdaCampingowe_productCard_data}
    />
  );
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Wtyczki i gniazda campingowe | Famatel Polska</title>
        <meta
          property="og:title"
          content="Wtyczki i gniazda campingowe &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę wtyczek i gniazd campingowych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę wtyczek i gniazd campingowych marki Famatel."
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
