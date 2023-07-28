import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect } from 'react';
/**Components**/
import PageWrapper from '../../../../../components/layouts/pseudoLayouts/pageWrapper/PageWrapper';
import Footer from '../../../../../components/layouts/rootLayout/footer/Footer';
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import WtyczkiGniazdaEstradoweContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/1.8_wtyczki-gniazda-estradowe/WtyczkiGniazdaEstradoweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  wtyczkiGniazdaEstradowe_SubCategory_data,
  wtyczkiGniazdaEstradowe_productCard_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_8_estradowe_data';

/**--------------------------------------**/
const EstradoweModelPage: NextPage = () => {
  /*
  __1__ With these steps, Next.js app will always scroll to the top of the page when a new page is loaded
  */
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  /**JSX**/
  return (
    <>
      <PageWrapper>
        <Head>
          <title>Osprzęt elektryczny estradowy | Famatel Polska</title>
          <meta
            property="og:title"
            content="Osprzęt elektryczny estradowy &nbsp;|&nbsp; Famatel Polska"
          ></meta>
          <meta
            name="description"
            content="Specyfikacja techniczna osprzętu elektrycznego estradowego marki Famatel."
          ></meta>
          <meta
            property="og:description"
            content="Specyfikacja techniczna osprzętu elektrycznego estradowego marki Famatel."
          ></meta>
        </Head>
        <ProductPageTemplate
          productCardsData={wtyczkiGniazdaEstradowe_productCard_data}
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
            wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryName
          }
          subCategoryUrl={
            wtyczkiGniazdaEstradowe_SubCategory_data.subCategoryUrl
          }
        >
          <WtyczkiGniazdaEstradoweContent
            productCardsData={wtyczkiGniazdaEstradowe_productCard_data}
          />
        </ProductPageTemplate>
        {/* <div className="bg-red-400 h-[25vh] w-full"></div>
        <div className="bg-red-800 h-[25vh] w-full"></div> */}
      </PageWrapper>
      <Footer />
    </>
  );
};

export default EstradoweModelPage;
