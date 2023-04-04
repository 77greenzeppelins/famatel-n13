import Head from 'next/head';
import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../../components/layouts/rootLayout/Layout';
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData*/
import { wtyczkiGniazdaSubCategoriesData } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/_cat1_wtyczki-gniazda_data';
import { wtyczkiGniazdaKontenerowe_productCard_data } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_7_kontenerowe_data';

/**TS**/
import type { NextPageWithLayout } from '../../../_app';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <SubCategoryPageTemplate
      subCategoryData={wtyczkiGniazdaSubCategoriesData[6]}
      productCardsData={wtyczkiGniazdaKontenerowe_productCard_data}
    />
  );
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Wtyczki i gniazda kontenerowe | Famatel Polska</title>
        <meta
          property="og:title"
          content="Wtyczki i gniazda kontenerowe &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę wtyczek i gniazd kontenerowych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę wtyczek i gniazd kontenerowych marki Famatel."
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
