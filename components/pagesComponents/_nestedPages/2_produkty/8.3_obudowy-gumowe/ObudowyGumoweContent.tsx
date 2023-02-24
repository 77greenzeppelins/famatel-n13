import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_A from '../__productContentLayout/ProductContentLayout_A';
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import BasicIconsManager from '../../../../multipagesComponents/iconsManagers/basicIconsManager/BasicIconsManager';
import TablesSection from '../8.3_obudowy-gumowe/tablesSection/TablesSection';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { obudowyGumoweTechSpecData } from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_3_gumowe_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------**/
const ObudowyGumoweContent: React.FunctionComponent<{
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
        const rozdzielniceGumoweHeaderData =
          obudowyGumoweTechSpecData[index].header;
        const rozdzielniceGumoweTableBodyData =
          obudowyGumoweTechSpecData[index].tablesData;
        const svgIcons = obudowyGumoweTechSpecData[index].iconHolderData;
        const norma = obudowyGumoweTechSpecData[index].norma;
        const features = obudowyGumoweTechSpecData[index].features;
        const description = obudowyGumoweTechSpecData[index].opis;
        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <SectionContentLayout>
                <BasicIconsManager svgIcons={svgIcons} />
              </SectionContentLayout>
              <ProductContentLayout_A imageData={productImage}>
                <div className="flex flex-col">
                  <TablesSection
                    tableHeader={rozdzielniceGumoweHeaderData}
                    tableBody={rozdzielniceGumoweTableBodyData}
                    norma={norma}
                    features={features}
                    description={description}
                  />
                </div>
              </ProductContentLayout_A>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default ObudowyGumoweContent;
