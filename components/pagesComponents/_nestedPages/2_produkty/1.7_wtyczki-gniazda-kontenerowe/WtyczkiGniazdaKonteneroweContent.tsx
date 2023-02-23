import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_B from '../__productContentLayout/ProductContentLayout_B';
import AllTablesContainer from '../_allTablesContainer/AllTablesContainer';
import SectionWithTable from '../_sectionWithTable/SectionWithTable';
import TechSpecTable from './techSpecTable/TechSpecTable';
/**Basic Data**/
import { wtyczkiGniazdaKontenerowe_tech_data } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_7_kontenerowe_techspec';
import {
  smallPseudoHeaders,
  splitedPathParts,
} from '../../../../../data/_data';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------**/
const WtyczkiGniazdaKonteneroweContent: React.FunctionComponent<{
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
        const productTechData = wtyczkiGniazdaKontenerowe_tech_data[index];
        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <ProductContentLayout_B imageData={productImage}>
                <AllTablesContainer>
                  <SectionWithTable label={smallPseudoHeaders.l2}>
                    <TechSpecTable catalogData={productTechData} />
                  </SectionWithTable>
                </AllTablesContainer>
              </ProductContentLayout_B>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default WtyczkiGniazdaKonteneroweContent;
