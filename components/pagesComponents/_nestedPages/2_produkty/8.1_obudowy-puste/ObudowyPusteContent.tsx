import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import BasicIconsManager from '../../../../multipagesComponents/iconsManagers/basicIconsManager/BasicIconsManager';
import TablesSection from './tablesSection/TablesSection';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { obudowyPusteTechSpecData } from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_1_obudowy-puste_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';

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
        const packageDetails = obudowyPusteTechSpecData[index].packageDetails;
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <SectionContentLayout>
                <BasicIconsManager svgIcons={svgIcons} />
              </SectionContentLayout>
              <SectionContentLayout
                divStyle="grid grid-cols-[1fr] gap-4 md:grid-cols-[1fr_1fr] md:grid-rows-3"
                // divStyle="flex flex-col gap-y-4 md:flex-row md:gap-x-4 flex-wrap"
              >
                <div
                  // className=" md:min-w-[50%]"
                  className="md:col-start-1 md:row-start-1"
                >
                  <TablesSection
                    tablesHeaders={tablesHeaders}
                    tablesData={tablesWithSizes}
                    generalDescription={generalDescription}
                    packageDetails={packageDetails}
                  />
                </div>

                <div className=" h-[700px]  bg-light md:col-start-2  md:row-start-1 md:row-end-3" />
                {/* <div
                  className="md:col-start-1 md:row-start-2 h-[200px]  bg-blue-800  "
                  //  className="md:col-start-1 bg-blue-800 h-[500px]"
                /> */}
              </SectionContentLayout>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default ObudowyPusteContent;
