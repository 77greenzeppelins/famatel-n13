import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData**/
import { puszkiInstalacyjneSubCategoriesData } from '../../../../data/categoriesData/cat_10_puszki-instalacyjne/_cat10_puszki-instalacyjne_data';
import { puszkiDrywall_productCard_data } from '../../../../data/categoriesData/cat_10_puszki-instalacyjne/subCategories/_subCat_2_puszki-drywall_data';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Puszki instalacyjne drywall | Famatel Polska</title>
        <meta
          property="og:title"
          content="Puszki instalacyjne drywall &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę puszek instalacyjnych drywall marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę puszek instalacyjnych drywall marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={puszkiInstalacyjneSubCategoriesData[1]}
        productCardsData={puszkiDrywall_productCard_data}
      />
    </>
  );
};

export default KategorieProduktowPage;
