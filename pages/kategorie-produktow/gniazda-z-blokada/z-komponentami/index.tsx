import Head from 'next/head';
import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../../components/layouts/rootLayout/Layout';
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
/**BasicData*/
import { gniazdaBlokadaSubCategoriesData } from '../../../../data/categoriesData/cat_2_gniazda-z-blokada/_cat2_gniazda-z-blokada_data';
import { gniazdaBlokadaKomponenty_productCards_data } from '../../../../data/categoriesData/cat_2_gniazda-z-blokada/subCategories/_subCat_3_z-komponentami_data';

/**TS**/
import type { NextPageWithLayout } from '../../../_app';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <SubCategoryPageTemplate
      subCategoryData={gniazdaBlokadaSubCategoriesData[2]}
      productCardsData={gniazdaBlokadaKomponenty_productCards_data}
    />
  );
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>
          Gniazda z rozłącznikiem, blokadą oraz opcjonalnymi komponentami |
          Famatel Polska
        </title>
        <meta
          property="og:title"
          content="Gniazda z rozłącznikiem, blokadą oraz opcjonalnymi komponentami &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę gniazd tablicowych z rozłącznikiem, blokadą oraz opcjonalnymi komponentami marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę gniazd tablicowych z rozłącznikiem, blokadą oraz opcjonalnymi komponentami marki Famatel."
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
