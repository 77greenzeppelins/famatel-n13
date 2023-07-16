import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplate from '../../../../../components/multipagesComponents/_productPageTemplate/ProductPageTemplate';
import PuszkiZamykaneContent from '../../../../../components/pagesComponents/_nestedPages/2_produkty/9.1_puszki-zamykane/PuszkiZamykaneContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import {
  puszkiZamykane_productCard_data,
  puszkiZamykane_SubCategory_data,
} from '../../../../../data/categoriesData/cat_10_puszki-instalacyjne/subCategories/_subCat_1_puszki-zamykane_data';

/**--------------------------------------------------------**/
const WtyczkiGniazdaEstradoweProductPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>Puszka instalacyjna zamykana | Famatel Polska</title>
        <meta
          property="og:title"
          content="Puszka instalacyjna zamykana &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Specyfikacja techniczna zamykanej puszki instalacyjnej marki Famatel."
        ></meta>
        <meta
          property="og:description"
          content="Specyfikacja techniczna zamykanej puszki instalacyjnej marki Famatel."
        ></meta>
      </Head>
      <ProductPageTemplate
        productCardsData={puszkiZamykane_productCard_data}
        //___data for navSection => data about category
        categoryName={
          catalogStructureData[
            mainCategoriesSummaryData.puszkiInstalacyjne.categoryIndex
          ].mainCategoryName
        }
        categoryUrl={
          catalogStructureData[
            mainCategoriesSummaryData.puszkiInstalacyjne.categoryIndex
          ].mainCategoryUrl
        }
        //___data for navSection => data about subCategory
        subCategoryName={puszkiZamykane_SubCategory_data.subCategoryName}
        subCategoryUrl={puszkiZamykane_SubCategory_data.subCategoryUrl}
      >
        <PuszkiZamykaneContent
          productCardsData={puszkiZamykane_productCard_data}
        />
      </ProductPageTemplate>
    </>
  );
};

export default WtyczkiGniazdaEstradoweProductPage;
