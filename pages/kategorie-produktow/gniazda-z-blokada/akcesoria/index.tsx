import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';

/**BasicData*/
import { gniazdaBlokadaSubCategoriesData } from '../../../../data/categoriesData/cat_2_gniazda-z-blokada/_cat2_gniazda-z-blokada_data';
import { gniazdaBlokadaAkcesoria_productCards_data } from '../../../../data/categoriesData/cat_2_gniazda-z-blokada/subCategories/_subCat_4_akcesoria_data';

/**--------------------------------------------------------------**/
const GniazdaZBlokadaAkcesoriaPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Akcesoria do gniazd z rozłącznikiem i blokadą | Famatel Polska
        </title>
        <meta
          property="og:title"
          content="Akcesoria do gniazd z rozłącznikiem i blokadą &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj akcesoria do gniazd z rozłącznikiem i blokadą marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj akcesoria do gniazd z rozłącznikiem i blokadą marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={gniazdaBlokadaSubCategoriesData[3]}
        productCardsData={gniazdaBlokadaAkcesoria_productCards_data}
      />
    </>
  );
};

export default GniazdaZBlokadaAkcesoriaPage;
