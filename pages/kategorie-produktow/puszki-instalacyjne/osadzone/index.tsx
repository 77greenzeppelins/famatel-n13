import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData**/
import { puszkiInstalacyjneSubCategoriesData } from '../../../../data/categoriesData/cat_10_puszki-instalacyjne/_cat10_puszki-instalacyjne_data';
import { puszkiOsadzone_productCard_data } from '../../../../data/categoriesData/cat_10_puszki-instalacyjne/subCategories/_subCat_3_puszki-osadzone_data';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>Puszki instalacyjne osadzone | Famatel Polska</title>
        <meta
          property="og:title"
          content="Puszki instalacyjne osadzone &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę osadzonych puszek instalacyjnych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę osadzonych puszek instalacyjnych marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={puszkiInstalacyjneSubCategoriesData[2]}
        productCardsData={puszkiOsadzone_productCard_data}
      />
    </>
  );
};

export default KategorieProduktowPage;
