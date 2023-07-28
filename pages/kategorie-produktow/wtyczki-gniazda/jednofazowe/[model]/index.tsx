import { useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import WtyczkiGniazdaSchukoContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/1.5_wtyczki-gniazda-schuko/WtyczkiGniazdaSchukoContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  wtyczkiGniazdaSchuko_SubCategory_data,
  wtyczkiGniazdaSchuko_productCards_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_5_jednofazowe_data';

/**--------------------------------------**/
const WtyczkiGniazdaSchukoProductPage: NextPage = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  /**JSX**/
  return (
    <>
      <Head>
        <title>Osprzęt elektryczny jednofazowy | Famatel Polska</title>
        <meta
          property="og:title"
          content="Osprzęt elektryczny jednofazowy &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna osprzętu elektrycznego jednofazowego marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna osprzętu elektrycznego jednofazowego marki Famatel."
        ></meta>
      </Head>
      <ProductPageTemplate
        productCardsData={wtyczkiGniazdaSchuko_productCards_data}
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
        subCategoryName={wtyczkiGniazdaSchuko_SubCategory_data.subCategoryName}
        subCategoryUrl={wtyczkiGniazdaSchuko_SubCategory_data.subCategoryUrl}
      >
        <WtyczkiGniazdaSchukoContent
          productCardsData={wtyczkiGniazdaSchuko_productCards_data}
        />
      </ProductPageTemplate>
    </>
  );
};

export default WtyczkiGniazdaSchukoProductPage;
