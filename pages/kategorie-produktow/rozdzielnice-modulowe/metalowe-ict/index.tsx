import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData**/
import { rozdzielniceModuloweSubCategoriesData } from '../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/_cat9_rozdzielnice-modulowe_data';
import { productCardsData } from '../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/subCategories/_subCat_8_rozdzielnice-metalowe-ict';

/**--------------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rozdzielnice modułowe metalowe ICT | Famatel Polska</title>
        <meta
          property="og:title"
          content="Rozdzielnice modułowe metalowe ICT &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę rozdzielnic modułowych metalowych ICT marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę rozdzielnic modułowych metalowych ICT marki Famatel."
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
