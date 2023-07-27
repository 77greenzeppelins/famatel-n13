import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import WtyczkiGniazdaCampingoweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/1.9_wtyczki-gniazda-campingowe/WtyczkiGniazdaCampingoweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  wtyczkiGniazdaCampingowe_SubCategory_data,
  wtyczkiGniazdaCampingowe_productCard_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_9_campingowe_data';
import { useEffect } from 'react';

/**--------------------------------------**/
const WtyczkiGniazdaCampingoweProductPage: NextPage = () => {
  /**ScrollToTop**/
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**JSX**/
  return (
    <>
      <Head>
        <title>Osprzęt elektryczny campingowy | Famatel Polska</title>
        <meta
          property="og:title"
          content="Osprzęt elektryczny campingowy &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna osprzętu elektrycznego campingowego marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna osprzętu elektrycznego campingowego marki Famatel."
        ></meta>
      </Head>
      <ProductPageTemplate
        productCardsData={wtyczkiGniazdaCampingowe_productCard_data}
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
          wtyczkiGniazdaCampingowe_SubCategory_data.subCategoryName
        }
        subCategoryUrl={
          wtyczkiGniazdaCampingowe_SubCategory_data.subCategoryUrl
        }
      >
        <WtyczkiGniazdaCampingoweContent
          productCardsData={wtyczkiGniazdaCampingowe_productCard_data}
        />
      </ProductPageTemplate>
    </>
  );
};

export default WtyczkiGniazdaCampingoweProductPage;
