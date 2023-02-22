import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_A from '../__productContentLayout/ProductContentLayout_A';
import TablesSection from './tablesSection/TablesSection';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { wtyczkiGniazdaPrzenosne_tech_data } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_1_przenosne_techspec';
import { wtyczkiGniazdaPrzenosne_tablesData } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_1_przenosne_prodCat';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------**/
const WtyczkiGniazdaPrzenosneContent: React.FunctionComponent<{
  productCardsData: IF_ProductCardData[];
}> = ({ productCardsData }) => {
  /**Router Section**/
  const router = useRouter();
  /**JSX**/
  return (
    <>
      {productCardsData.map((productData, index) => {
        const productPath = productData.path.split('/');
        const productPathPivotalPart = productPath[splitedPathParts.product];
        const productImage = productData.imageData;
        //__data from "wtyczkiGniazdaPrzenosne_tech_data"
        const ampersData = wtyczkiGniazdaPrzenosne_tech_data[index].ampers;
        const polesNumber =
          wtyczkiGniazdaPrzenosne_tech_data[index].poles.length;
        const tableType = wtyczkiGniazdaPrzenosne_tech_data[index]?.tableType;
        const polesData = wtyczkiGniazdaPrzenosne_tech_data[index].poles;
        const bodyData = wtyczkiGniazdaPrzenosne_tech_data[index].bodyData;
        const przewodData = wtyczkiGniazdaPrzenosne_tech_data[index].mm;
        const wagaData = wtyczkiGniazdaPrzenosne_tech_data[index].weight;
        const connectionTypeData =
          wtyczkiGniazdaPrzenosne_tech_data[index].connectionType;
        //___data for "catalogTable"
        const catalogCardTablesData =
          wtyczkiGniazdaPrzenosne_tablesData[index].tablesData;

        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <ProductContentLayout_A imageData={productImage}>
                <TablesSection
                  polesNumber={tableType ? tableType : polesNumber}
                  polesData={polesData}
                  ampersData={ampersData}
                  bodyData={bodyData}
                  connectionTypeData={connectionTypeData}
                  weightData={wagaData}
                  wireData={przewodData}
                  catalogCardTablesData={catalogCardTablesData}
                />
              </ProductContentLayout_A>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default WtyczkiGniazdaPrzenosneContent;
