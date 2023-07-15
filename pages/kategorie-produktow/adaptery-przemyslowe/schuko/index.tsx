import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData*/
import { adapteryPrzemysloweSubCategoriesData } from '../../../../data/categoriesData/cat_3_adaptery-przemyslowe/_cat3_adaptery-przemyslowe_data';
import { adapteryPrzemysloweSchuko_productCards_data } from '../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_1_schuko_data';

/**--------------------------------------------------------------**/
const SubKategorieProduktowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adaptery przemysłowe Schuko | Famatel Polska</title>
        <meta
          property="og:title"
          content="Adaptery przemysłowe Schuko &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą adapterów przemysłowych Schuko marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą adapterów przemysłowych Schuko marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={adapteryPrzemysloweSubCategoriesData[0]}
        productCardsData={adapteryPrzemysloweSchuko_productCards_data}
      />
    </>
  );
};

export default SubKategorieProduktowPage;
