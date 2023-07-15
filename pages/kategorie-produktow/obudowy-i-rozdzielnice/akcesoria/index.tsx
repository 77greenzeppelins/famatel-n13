import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';

/**BasicData*/
import { obudowyRozdzielniceSubCategoriesData } from '../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/_cat8_obudowy-i-rozdzielnice_data';
import { productCardsData } from '../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_4_akcesoria';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Akcesoria do rozdzielnic i odudów przemysłowych | Famatel Polska
        </title>
        <meta
          property="og:title"
          content="Akcesoria do rozdzielnic i odudów przemysłowych &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę akcesoriów do rozdzielnic i odudów przemysłowych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę akcesoriów do rozdzielnic i odudów przemysłowych marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={obudowyRozdzielniceSubCategoriesData[3]}
        productCardsData={productCardsData}
      />
    </>
  );
};

export default KategorieProduktowPage;
