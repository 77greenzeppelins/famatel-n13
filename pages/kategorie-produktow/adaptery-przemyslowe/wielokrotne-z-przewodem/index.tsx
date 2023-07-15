import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';

/**BasicData*/
import { adapteryPrzemysloweSubCategoriesData } from '../../../../data/categoriesData/cat_3_adaptery-przemyslowe/_cat3_adaptery-przemyslowe_data';
import { adapteryPrzemysloweWielokrotneKabel_productCards_data } from '../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_3_wielokrotne-z-kablem_data';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adaptery przemysłowe z przewodem | Famatel Polska</title>
        <meta
          property="og:title"
          content="Adaptery przemysłowe z przewodem &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą adapterów przemysłowych z przewodem marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą adapterów przemysłowych z przewodem marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={adapteryPrzemysloweSubCategoriesData[2]}
        productCardsData={adapteryPrzemysloweWielokrotneKabel_productCards_data}
      />
    </>
  );
};

export default KategorieProduktowPage;
