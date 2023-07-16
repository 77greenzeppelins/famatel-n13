import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import WtyczkiGniazdaKonteneroweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/1.7_wtyczki-gniazda-kontenerowe/WtyczkiGniazdaKonteneroweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  wtyczkiGniazdaKontenerowe_SubCategory_data,
  wtyczkiGniazdaKontenerowe_productCard_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_7_kontenerowe_data';

/**--------------------------------------**/
const WtyczkiGniazdaKonteneroweProductPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>Osprzęt elektryczny kontenerowy | Famatel Polska</title>
        <meta
          property="og:title"
          content="Osprzęt elektryczny kontenerowy &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna osprzętu elektrycznego kontenerowego marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna osprzętu elektrycznego kontenerowego marki Famatel."
        ></meta>
      </Head>
      <ProductPageTemplate
        productCardsData={wtyczkiGniazdaKontenerowe_productCard_data}
        //___data for navSection => data about category
        categoryName={
          catalogStructureData[
            mainCategoriesSummaryData.wtyczkiGniazda.categoryIndex
          ].mainCategoryName
        }
        categoryUrl={
          catalogStructureData[
            mainCategoriesSummaryData.wtyczkiGniazda.categoryIndex
          ].mainCategoryUrl
        }
        //___data for navSection => data about subCategory
        subCategoryName={
          wtyczkiGniazdaKontenerowe_SubCategory_data.subCategoryName
        }
        subCategoryUrl={
          wtyczkiGniazdaKontenerowe_SubCategory_data.subCategoryUrl
        }
      >
        <WtyczkiGniazdaKonteneroweContent
          productCardsData={wtyczkiGniazdaKontenerowe_productCard_data}
        />
      </ProductPageTemplate>
    </>
  );
};

export default WtyczkiGniazdaKonteneroweProductPage;
