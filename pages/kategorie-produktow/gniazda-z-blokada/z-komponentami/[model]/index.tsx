import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import GniazdaBlokadaKomponentyContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/2.3_gniazda-blokada-z-komponentami/GniazdaBlokadaKomponentyContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  gniazdaBlokadaKomponenty_SubCategory_data,
  gniazdaBlokadaKomponenty_productCards_data,
} from '../../../../../data/categoriesData/cat_2_gniazda-z-blokada/subCategories/_subCat_3_z-komponentami_data';

/**--------------------------------------**/
const GniazdaBlokadaKomponentyProductPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>
          Gniazdo z rozłącznikiem, blokadą oraz opcjonalnymi komponentami |
          Famatel Polska
        </title>
        <meta
          property="og:title"
          content="Gniazdo z rozłącznikiem, blokadą oraz opcjonalnymi komponentami &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna gniaza z rozłącznikiem, blokadą oraz opcjonalnymi komponentami."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna gniaza z rozłącznikiem, blokadą oraz opcjonalnymi komponentami."
        ></meta>
      </Head>
      <ProductPageTemplate
        productCardsData={gniazdaBlokadaKomponenty_productCards_data}
        //___data for navSection => data about category
        categoryName={
          catalogStructureData[
            mainCategoriesSummaryData.gniazdaBlokada.categoryIndex
          ].mainCategoryName
        }
        categoryUrl={
          catalogStructureData[
            mainCategoriesSummaryData.gniazdaBlokada.categoryIndex
          ].mainCategoryUrl
        }
        //___data for navSection => data about subCategory
        subCategoryName={
          gniazdaBlokadaKomponenty_SubCategory_data.subCategoryName
        }
        subCategoryUrl={
          gniazdaBlokadaKomponenty_SubCategory_data.subCategoryUrl
        }
      >
        <GniazdaBlokadaKomponentyContent
          productCardsData={gniazdaBlokadaKomponenty_productCards_data}
        />
      </ProductPageTemplate>
    </>
  );
};

export default GniazdaBlokadaKomponentyProductPage;
