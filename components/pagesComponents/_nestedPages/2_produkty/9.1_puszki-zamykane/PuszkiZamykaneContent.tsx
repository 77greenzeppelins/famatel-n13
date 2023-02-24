import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_B from '../__productContentLayout/ProductContentLayout_B';
import TablesSection from './tablesSection/TablesSection';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { puszkiZamykane_tech_data } from '../../../../../data/categoriesData/cat_10_puszki-instalacyjne/subCategories/_subCat_1_puszki-zamykane_techspec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------**/
const PuszkiZamykaneContent: React.FunctionComponent<{
  productCardsData: IF_ProductCardData[];
}> = ({ productCardsData }) => {
  const router = useRouter();

  /**JSX**/
  return (
    <>
      {productCardsData.map((productData, index) => {
        const productPath = productData.path.split('/');
        const productPathPivotalPart = productPath[splitedPathParts.product];
        const productImage = productData.imageData;
        const productTablesData = puszkiZamykane_tech_data[index];
        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <ProductContentLayout_B imageData={productImage}>
                <TablesSection productTablesData={productTablesData} />
              </ProductContentLayout_B>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default PuszkiZamykaneContent;
