import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData**/
import { rozdzielniceModuloweSubCategoriesData } from '../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/_cat9_rozdzielnice-modulowe_data';
import { productCardsData } from '../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/subCategories/_subCat_6_rozdzielnice-scienne-icp';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>Rozdzielnice modułowe ścienne ICP | Famatel Polska</title>
        <meta
          property="og:title"
          content="Rozdzielnice modułowe ścienne ICP &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę rozdzielnic modułowych ściennych ICP marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę rozdzielnic modułowych ściennych ICP marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={rozdzielniceModuloweSubCategoriesData[5]}
        productCardsData={productCardsData}
      />
    </>
  );
};
export default KategorieProduktowPage;
