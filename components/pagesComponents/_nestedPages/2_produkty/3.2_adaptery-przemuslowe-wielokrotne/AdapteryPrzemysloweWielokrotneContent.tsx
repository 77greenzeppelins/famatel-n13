import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_A from '../__productContentLayout/ProductContentLayout_A';
import AllTablesContainer from '../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../_sectionWithTable/SectionWithTable';
import CatalogCardsTables from './catalogCardsTables/CatalogCardsTables';
import TechTable from './techTable/TechTable';
/**Basic Data**/
import {
  smallPseudoHeaders,
  splitedPathParts,
} from '../../../../../data/_data';
import {
  adapteryPrzemysloweWielokrotne_1_tablesData,
  adapteryPrzemysloweWielokrotne_2_tablesData,
} from '../../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_2_wielokrotne_prodCat';
import { adapteryPrzemysloweWielokrotne_tech_data } from '../../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_2_wielokrotne_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------**/
const AdapteryPrzemysloweWielokrotneContent: React.FunctionComponent<{
  productCardsData: IF_ProductCardData[];
}> = ({ productCardsData }) => {
  /**Router Section**/
  const router = useRouter();
  /**JSX**/
  return (
    <>
      {productCardsData.map((productData, index) => {
        //__data from "productCardsData"
        const productPath = productData.path.split('/');
        const productPathPivotalPart = productPath[splitedPathParts.product];
        const productImage = productData.imageData;

        // //___data for "catalogTable"
        const catalogCardTablesData_1 =
          index < 4 &&
          adapteryPrzemysloweWielokrotne_1_tablesData[index].tablesData;

        const catalogCardTablesData_2 =
          index >= 4 &&
          adapteryPrzemysloweWielokrotne_2_tablesData[index - 4].tablesData;

        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <ProductContentLayout_A imageData={productImage}>
                <AllTablesContainer>
                  <SectionWithTable label={smallPseudoHeaders.l1}>
                    <CatalogCardsTables
                      index={index}
                      catalogCardTablesData_1={catalogCardTablesData_1}
                      catalogCardTablesData_2={catalogCardTablesData_2}
                    />
                  </SectionWithTable>

                  <SectionWithTable label={smallPseudoHeaders.l2}>
                    <TechTable
                      headerData={
                        adapteryPrzemysloweWielokrotne_tech_data[index].header
                      }
                      bodyData={
                        adapteryPrzemysloweWielokrotne_tech_data[index]
                          .tableBody
                      }
                    />
                  </SectionWithTable>
                </AllTablesContainer>
              </ProductContentLayout_A>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default AdapteryPrzemysloweWielokrotneContent;
