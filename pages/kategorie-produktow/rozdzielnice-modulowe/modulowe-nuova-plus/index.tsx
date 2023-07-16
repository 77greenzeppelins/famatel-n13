import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData*/
import { rozdzielniceModuloweSubCategoriesData } from '../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/_cat9_rozdzielnice-modulowe_data';
import { productCardsData } from '../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/subCategories/_subCat_4_modulowe-nuovaPlus';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>Rozdzielnice modułowe Nuova+ IP40 | Famatel Polska</title>
        <meta
          property="og:title"
          content="Rozdzielnice modułowe Nuova+ IP40 &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę rozdzielnic modułowych Nuova+ IP40 marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę rozdzielnic modułowych Nuova+ IP40 marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={rozdzielniceModuloweSubCategoriesData[3]}
        productCardsData={productCardsData}
      />
    </>
  );
};

export default KategorieProduktowPage;
