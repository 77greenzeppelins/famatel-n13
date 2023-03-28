import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_B from '../__productContentLayout/ProductContentLayout_B';
import TablesSection from './tablesSection/TablesSection';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { RozdzielniceModuloweTechSpecData } from '../../../../../data/categoriesData/cat_9_rozdzielnice-modulowe/subCategories/_subCat_2_modulowe_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------**/
const RozdzielniceModuloweContent: React.FunctionComponent<{
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
        //__data from "RozdzielniceModuloweTechSpecData"
        const svgIcons =
          RozdzielniceModuloweTechSpecData[index].iconHolderData.svgLabel;
        const tablesHeaders = RozdzielniceModuloweTechSpecData[index].header;
        const tablesWithSizes =
          RozdzielniceModuloweTechSpecData[index].tablesData;
        const generalDescription =
          RozdzielniceModuloweTechSpecData[index].description;
        const norms = RozdzielniceModuloweTechSpecData[index].norma;
        //___

        console.log('router.query.model ', router.query.model);
        console.log('productPathPivotalPart', productPathPivotalPart);
        //___
        if (router.query.model === productPathPivotalPart) {
          console.log(
            'router.query.model === productPathPivotalPart',
            router.query.model === productPathPivotalPart
          );

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

export default RozdzielniceModuloweContent;
