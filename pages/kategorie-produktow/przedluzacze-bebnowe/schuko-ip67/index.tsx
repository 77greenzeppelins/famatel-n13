import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplateShort from '../../../../components/multipagesComponents/_productPageTemplateShort/ProductPageTemplateShort';
import PrzedluzaczeBebnoweSchukoContent from '../../../../components/pagesComponents/_nestedPages/2_produkty/5.1_short_przedluzacze-bebnowe-shuko/PrzedluzaczeBebnoweSchukoContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../data/_data';
import { catalogStructureData } from '../../../../data/_catalogStructure_data';
import { przedluzaczeBebnoweSchuko_productCards_data } from '../../../../data/categoriesData/cat_5_przedluzacze-bebnowe/subCategories/_subCat_1_schuko_data';
/**Get BasicData*/
const { categoryIndex } = mainCategoriesSummaryData.przedluzaczeBebnowe;

/**--------------------------------------**/
const PrzedluzaczeBebnowePrzemysloweProductPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>
          Przemysłowe przedłużacze bębnowe IP67 z gniazdami Schuko | Famatel
          Polska
        </title>
        <meta
          property="og:title"
          content="Przemysłowe przedłużacze bębnowe IP67 z gniazdami Schuko &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę przemysłowych przedłużaczy bębnowych IP67 z gniazdami Schuko."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę przemysłowych przedłużaczy bębnowych IP67 z gniazdami Schuko."
        ></meta>
      </Head>
      <ProductPageTemplateShort
        productCardsData={przedluzaczeBebnoweSchuko_productCards_data}
        //___data for navSection => data about category
        categoryName={catalogStructureData[categoryIndex].mainCategoryName}
        categoryUrl={catalogStructureData[categoryIndex].mainCategoryUrl}
        //___data for navSection => data about subCategory
      >
        <PrzedluzaczeBebnoweSchukoContent />
      </ProductPageTemplateShort>
    </>
  );
};

export default PrzedluzaczeBebnowePrzemysloweProductPage;
