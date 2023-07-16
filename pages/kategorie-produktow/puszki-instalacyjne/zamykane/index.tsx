import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData**/
import { puszkiInstalacyjneSubCategoriesData } from '../../../../data/categoriesData/cat_10_puszki-instalacyjne/_cat10_puszki-instalacyjne_data';
import { puszkiZamykane_productCard_data } from '../../../../data/categoriesData/cat_10_puszki-instalacyjne/subCategories/_subCat_1_puszki-zamykane_data';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  /**JSX**/
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
      <SubCategoryPageTemplate
        subCategoryData={puszkiInstalacyjneSubCategoriesData[0]}
        productCardsData={puszkiZamykane_productCard_data}
      />
    </>
  );
};

export default KategorieProduktowPage;
