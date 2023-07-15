import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData*/
import { adapteryPrzemysloweSubCategoriesData } from '../../../../data/categoriesData/cat_3_adaptery-przemyslowe/_cat3_adaptery-przemyslowe_data';
import { adapteryPrzemysloweWielokrotne_productCards_data } from '../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_2_wielokrotne_data';

/**---------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adaptery wielokrotne przemysłowe | Famatel Polska</title>
        <meta
          property="og:title"
          content="Adaptery wielokrotne przemysłowe &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Zapoznaj się z ofertą adapterów wielokrotnych przemysłowych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Zapoznaj się z ofertą adapterów wielokrotnych przemysłowych marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={adapteryPrzemysloweSubCategoriesData[1]}
        productCardsData={adapteryPrzemysloweWielokrotne_productCards_data}
      />
    </>
  );
};
export default KategorieProduktowPage;
