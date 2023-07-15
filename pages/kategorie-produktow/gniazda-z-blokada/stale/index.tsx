import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData*/
import { gniazdaBlokadaSubCategoriesData } from '../../../../data/categoriesData/cat_2_gniazda-z-blokada/_cat2_gniazda-z-blokada_data';
import { gniazdaBlokadaStale_productCards_data } from '../../../../data/categoriesData/cat_2_gniazda-z-blokada/subCategories/_subCat_2_stale_data';

/**--------------------------------------------------------------**/
const GniazdaZBlokadaStalePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gniazda stałe z rozłącznikiem i blokadą | Famatel Polska</title>
        <meta
          property="og:title"
          content="Gniazda stałe z rozłącznikiem i blokadą &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę gniazd stałych z rozłącznikiem i blokadą marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę gniazd stałych z rozłącznikiem i blokadą marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={gniazdaBlokadaSubCategoriesData[1]}
        // subCategoryData={['Gniazda stałe']}
        productCardsData={gniazdaBlokadaStale_productCards_data}
      />
    </>
  );
};

export default GniazdaZBlokadaStalePage;
