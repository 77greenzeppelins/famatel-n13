import Head from 'next/head';
import type { ReactElement } from 'react';
/**Components*/
import Layout from '../../../../components/layouts/rootLayout/Layout';
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
// import NestedLayout from '../components/layouts/pagesLayouts/homeLayout/HomeLayout';
/**BasicData*/
import { puszkiInstalacyjneSubCategoriesData } from '../../../../data/categoriesData/cat_10_puszki-instalacyjne/_cat10_puszki-instalacyjne_data';
import { puszkiZamykane_productCard_data } from '../../../../data/categoriesData/cat_10_puszki-instalacyjne/subCategories/_subCat_1_puszki-zamykane_data';

/**TS**/
import type { NextPageWithLayout } from '../../../_app';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPageWithLayout = () => {
  return (
    <SubCategoryPageTemplate
      subCategoryData={puszkiInstalacyjneSubCategoriesData[0]}
      productCardsData={puszkiZamykane_productCard_data}
    />
  );
};

KategorieProduktowPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <title>Puszki instalacyjne zamykane | Famatel Polska</title>
        <meta
          property="og:title"
          content="Puszki instalacyjne zamykane &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę zamykanych puszek instalacyjnych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę zamykanych puszek instalacyjnych marki Famatel."
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
