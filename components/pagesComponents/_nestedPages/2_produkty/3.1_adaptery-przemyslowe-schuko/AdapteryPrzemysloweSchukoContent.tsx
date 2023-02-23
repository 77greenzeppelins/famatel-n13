import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_A from '../__productContentLayout/ProductContentLayout_A';
import AllTablesContainer from '../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../_sectionWithTable/SectionWithTable';
// import CatalogCardsTables from './catalogCardsTables/CatalogCardsTables';
// import TechTable from './techTable/TechTable';
/**Basic Data**/
import {
  smallPseudoHeaders,
  splitedPathParts,
} from '../../../../../data/_data';
import {
  adapteryPrzemysloweSchuko_tech_data,
  adapteryPrzemysloweSchuko_catalogCard_data,
} from '../../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_1_schuko_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
import TechTable from './techTable/TechTable';
import CatalogTable from './catalogTable/CatalogTable';

/**----------------------------------------**/
const AdapteryPrzemysloweSchukoContent: React.FunctionComponent<{
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
        //___data for techTable
        const techTableData = adapteryPrzemysloweSchuko_tech_data[index];
        //___data for catalogTable
        const catalogData = adapteryPrzemysloweSchuko_catalogCard_data[index];

        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <ProductContentLayout_A imageData={productImage}>
                <AllTablesContainer>
                  <SectionWithTable label={smallPseudoHeaders.l1}>
                    <CatalogTable catalogData={catalogData} />
                  </SectionWithTable>

                  <SectionWithTable label={smallPseudoHeaders.l2}>
                    <TechTable tabledata={techTableData} />
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

export default AdapteryPrzemysloweSchukoContent;
