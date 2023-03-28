import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import BasicIconsManager from '../../../../multipagesComponents/iconsManagers/basicIconsManager/BasicIconsManager';
import TablesSection from './tablesSection/TablesSection';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { obudowyPusteTechSpecData } from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_1_obudowy-puste_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
import ProductContentLayout_B from '../__productContentLayout/ProductContentLayout_B';

/**----------------------------------------**/
const ObudowyPusteContent: React.FunctionComponent<{
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
        //__data from "obudowyPusteTechSpecData"
        const svgIcons =
          obudowyPusteTechSpecData[index].iconHolderData.svgLabel;
        const tablesHeaders = obudowyPusteTechSpecData[index].header;
        const tablesWithSizes = obudowyPusteTechSpecData[index].tablesData;
        const generalDescription = obudowyPusteTechSpecData[index].description;
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              {/* <SectionContentLayout>
                <BasicIconsManager svgIcons={svgIcons} />
              </SectionContentLayout> */}
              <ProductContentLayout_B imageData={productImage}>
                <TablesSection
                  tablesHeaders={tablesHeaders}
                  tablesData={tablesWithSizes}
                  generalDescription={generalDescription}
                  svgIcons={svgIcons}
                />
              </ProductContentLayout_B>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default ObudowyPusteContent;
