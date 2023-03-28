import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import TablesSection from './tablesSection/TablesSection';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { RozdzielniceSciennneTechSpecData } from '../../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/subCategories/_subCat_1_rozdzielnice-scienne_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
import ProductContentLayout_B from '../__productContentLayout/ProductContentLayout_B';

/**----------------------------------------**/
const RozdzielniceScienneContent: React.FunctionComponent<{
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
        //__data from "RozdzielniceSciennneTechSpecData"
        const svgIcons =
          RozdzielniceSciennneTechSpecData[index].iconHolderData.svgLabel;
        const tablesHeaders = RozdzielniceSciennneTechSpecData[index].header;
        const tablesWithSizes =
          RozdzielniceSciennneTechSpecData[index].tablesData;
        const generalDescription =
          RozdzielniceSciennneTechSpecData[index].description;
        const norms = RozdzielniceSciennneTechSpecData[index].norma;
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <ProductContentLayout_B imageData={productImage}>
                <TablesSection
                  tablesHeaders={tablesHeaders}
                  tablesData={tablesWithSizes}
                  generalDescription={generalDescription}
                  svgIcons={svgIcons}
                  norms={norms}
                />
              </ProductContentLayout_B>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default RozdzielniceScienneContent;
