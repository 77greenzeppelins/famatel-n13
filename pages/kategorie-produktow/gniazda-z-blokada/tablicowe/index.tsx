import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components*/
import SubCategoryPageTemplate from '../../../../components/multipagesComponents/_subCategoryPageTemplate/SubCategoryPageTemplate';
/**BasicData*/
import { gniazdaBlokadaSubCategoriesData } from '../../../../data/categoriesData/cat_2_gniazda-z-blokada/_cat2_gniazda-z-blokada_data';
import { gniazdaBlokadaTablicowe_productCards_data } from '../../../../data/categoriesData/cat_2_gniazda-z-blokada/subCategories/_subCat_1_tablicowe_data';

/**--------------------------------------------------------------**/
const GniazdaBlokadaTablicowePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Gniazda tablicowe z rozłącznikiem i blokadą | Famatel Polska
        </title>
        <meta
          property="og:title"
          content="Gniazda tablicowe z rozłącznikiem i blokadą &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę gniazd tablicowych z rozłącznikiem i blokadą marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę gniazd tablicowych z rozłącznikiem i blokadą marki Famatel."
        ></meta>
      </Head>
      <SubCategoryPageTemplate
        subCategoryData={gniazdaBlokadaSubCategoriesData[0]}
        productCardsData={gniazdaBlokadaTablicowe_productCards_data}
      />
    </>
  );
};

export default GniazdaBlokadaTablicowePage;
