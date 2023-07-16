import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData*/
import { rozdzielniceModuloweSubCategoriesData } from '../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/_cat9_rozdzielnice-modulowe_data';
import { productCardsData } from '../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/subCategories/_subCat_9_akcesoria';

/**----------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Akcesoria do rozdzielnic modułowych | Famatel Polska</title>
        <meta
          property="og:title"
          content="Akcesoria do rozdzielnic modułowych &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę akcesoriów do rozdzielnic modułowych marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę akcesoriów do rozdzielnic modułowych marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={rozdzielniceModuloweSubCategoriesData[7]}
        productCardsData={productCardsData}
      />
    </>
  );
};

export default KategorieProduktowPage;
