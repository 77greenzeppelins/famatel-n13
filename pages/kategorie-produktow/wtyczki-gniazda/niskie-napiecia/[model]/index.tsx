import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import WtyczkiGniazdaNiskieNapieciaContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/1.6_wtyczki-gniazda-niskie-napiecia/WtyczkiGniazdaNiskieNapieciaContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  productCardsData,
  wtyczkiGniazdaNiskieNapiecia_SubCategory_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_6_niskie-napiecia_data';

/**---------------------------------------------------------------**/
const WtyczkiGniazdaNiskieNapięciaProductPage: NextPage = () => {
  /**Router Section**/
  //   const router = useRouter();
  //   console.log('obudowyPusteSubCategoryData:', obudowyPusteSubCategoryData);
  /**...**/

  /**JSX**/
  return (
    <>
      <Head>
        <title>Osprzęt elektryczny na niskie napięcia | Famatel Polska</title>
        <meta
          property="og:title"
          content="Osprzęt elektryczny na niskie napięcia &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna osprzętu elektrycznego na niskie napięcia marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna osprzętu elektrycznego na niskie napięcia marki Famatel."
        ></meta>
      </Head>
      <ProductPageTemplate
        productCardsData={productCardsData}
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
          wtyczkiGniazdaNiskieNapiecia_SubCategory_data.subCategoryName
        }
        subCategoryUrl={
          wtyczkiGniazdaNiskieNapiecia_SubCategory_data.subCategoryUrl
        }
      >
        <WtyczkiGniazdaNiskieNapieciaContent
          productCardsData={productCardsData}
        />
      </ProductPageTemplate>
    </>
  );
};

export default WtyczkiGniazdaNiskieNapięciaProductPage;
