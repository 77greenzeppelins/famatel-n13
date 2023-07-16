import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData*/
import { obudowyRozdzielniceSubCategoriesData } from '../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/_cat8_obudowy-i-rozdzielnice_data';
import { productCardsData } from '../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_2_przemyslowe';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rozdzielnice przemysłowe | Famatel Polska</title>
        <meta
          property="og:title"
          content="Rozdzielnice przemysłowe &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę rozdzielnic przemysłowych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę rozdzielnic przemysłowych marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={obudowyRozdzielniceSubCategoriesData[1]}
        productCardsData={productCardsData}
      />
    </>
  );
};

export default KategorieProduktowPage;
