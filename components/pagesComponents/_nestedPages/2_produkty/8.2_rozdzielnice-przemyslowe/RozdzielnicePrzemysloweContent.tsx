import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_A from '../__productContentLayout/ProductContentLayout_A';
import TablesSection from './tablesSection/TablesSection';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import {
  rozdzielnicePrzemysloweTechSpecData,
  gridTemplate7Columns,
  gridTemplate8Columns,
} from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_2_przemyslowe_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------**/
const RozdzielnicePrzemysloweContent: React.FunctionComponent<{
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

        //__data from "rozdzielnicePrzemysloweTechSpecData"
        const tableColumnsNumber =
          rozdzielnicePrzemysloweTechSpecData[index].columnsNumber;
        const rozdzielnicePrzemysloweTableData =
          rozdzielnicePrzemysloweTechSpecData[index].dataLines;
        const svgIcons =
          rozdzielnicePrzemysloweTechSpecData[index].iconHolderData.svgLabel;
        const norma = rozdzielnicePrzemysloweTechSpecData[index].norma;
        const packageDetails =
          rozdzielnicePrzemysloweTechSpecData[index].packageDetails;

        const rozdzielniceBudowlaneHeader1 =
          rozdzielnicePrzemysloweTechSpecData[index].table1Header;
        const rozdzielniceBudowlaneTableData1 =
          rozdzielnicePrzemysloweTechSpecData[index].table1Data;

        const rozdzielniceBudowlaneHeader2 =
          rozdzielnicePrzemysloweTechSpecData[index].table2Header;
        const rozdzielniceBudowlaneTableData2 =
          rozdzielnicePrzemysloweTechSpecData[index].table2Data;
        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <ProductContentLayout_A imageData={productImage}>
                <TablesSection
                  productIndex={index}
                  tableColumnsNumber={tableColumnsNumber}
                  rozdzielnicePrzemysloweTableData={
                    rozdzielnicePrzemysloweTableData
                  }
                  tableLayout={
                    tableColumnsNumber === 8
                      ? gridTemplate8Columns
                      : gridTemplate7Columns
                  }
                  rozdzielniceBudowlaneHeader2={rozdzielniceBudowlaneHeader2}
                  rozdzielniceBudowlaneTableData2={
                    rozdzielniceBudowlaneTableData2
                  }
                  rozdzielniceBudowlaneHeader1={rozdzielniceBudowlaneHeader1}
                  rozdzielniceBudowlaneTableData1={
                    rozdzielniceBudowlaneTableData1
                  }
                  packageDetails={packageDetails}
                  norma={norma}
                  svgIcons={svgIcons}
                />
              </ProductContentLayout_A>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default RozdzielnicePrzemysloweContent;
