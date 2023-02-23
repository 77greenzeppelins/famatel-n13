import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_B from '../__productContentLayout/ProductContentLayout_B';
import SectionWithTable from '../_sectionWithTable/SectionWithTable';
import CatalogTable from './catalogTable/CatalogTable';
import CatalogTable2 from './catalogTable/CatalogTable2';
/**Basic Data**/
import {
  smallPseudoHeaders,
  splitedPathParts,
} from '../../../../../data/_data';
import {
  wtyczkiGniazdaSchuko_catalog_data,
  wtyczkiGniazdaSchuko_catalog_2_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_5_jednofazowe_prodCat';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------------------------**/
const WtyczkiGniazdaSchukoContent: React.FunctionComponent<{
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
        const catalogData = wtyczkiGniazdaSchuko_catalog_data[index];
        const catalogData2 = wtyczkiGniazdaSchuko_catalog_2_data[index];

        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <ProductContentLayout_B imageData={productImage}>
                {' '}
                <SectionWithTable label={smallPseudoHeaders.l1}>
                  <CatalogTable catalogData={catalogData} />
                  <CatalogTable2 catalogData={catalogData2} />
                </SectionWithTable>
              </ProductContentLayout_B>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default WtyczkiGniazdaSchukoContent;
