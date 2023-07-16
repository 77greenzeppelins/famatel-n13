import Head from 'next/head';
import { NextPage } from 'next/types';
/**Components**/
import ProductPageTemplateShort from '../../../../components/multipagesComponents/_productPageTemplateShort/ProductPageTemplateShort';
import PrzedluzaczeBebnowePrzemysloweContent from '../../../../components/pagesComponents/_nestedPages/2_produkty/5.2_short_przedluzacze-bebnowe-przemyslowe/PrzedluzaczeBebnowePrzemysloweContent';
/**BasicData**/
import { mainCategoriesSummaryData } from '../../../../data/_data';
import { catalogStructureData } from '../../../../data/_catalogStructure_data';
import { przedluzaczeBebnowePrzemyslowe_productCards_data } from '../../../../data/categoriesData/cat_5_przedluzacze-bebnowe/subCategories/_subCat_2_przemyslowe_data';
/**BasicData*/
const { categoryIndex } = mainCategoriesSummaryData.przedluzaczeBebnowe;

/**--------------------------------------**/
const PrzedluzaczeBebnowePrzemysloweProductPage: NextPage = () => {
  /**JSX**/
  return (
    <>
      <Head>
        <title>
          Przemysłowe przedłużacze bębnowe z gniazdami IP67 | Famatel Polska
        </title>
        <meta
          property="og:title"
          content="Przemysłowe przedłużacze bębnowe z gniazdami IP67 &nbsp;|&nbsp; Famatel Polska"
        ></meta>
        <meta
          name="description"
          content="Poznaj ofertę przemysłowych przedłużaczy bębnowych z gniazdami IP67."
        ></meta>
        <meta
          property="og:description"
          content="Poznaj ofertę przemysłowych przedłużaczy bębnowych z gniazdami IP67."
        ></meta>
      </Head>
      <ProductPageTemplateShort
        productCardsData={przedluzaczeBebnowePrzemyslowe_productCards_data}
        //___data for navSection => data about category
        categoryName={catalogStructureData[categoryIndex].mainCategoryName}
        categoryUrl={catalogStructureData[categoryIndex].mainCategoryUrl}
      >
        <PrzedluzaczeBebnowePrzemysloweContent />
      </ProductPageTemplateShort>
    </>
  );
};

export default PrzedluzaczeBebnowePrzemysloweProductPage;
