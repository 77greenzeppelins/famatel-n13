import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import BasicIconsManager from '../../../../multipagesComponents/iconsManagers/basicIconsManager/BasicIconsManager';
import SquareHolderWithImage from '../../../../multipagesComponents/holders/squareHolderWithImage/SquareHolderWithImage';
import TablesSection from '../8.3_obudowy-gumowe/tablesSection/TablesSection';
import ObudowyGumoweDescription from './descriptionsSection/ObudowyGumoweDescription';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { obudowyGumoweTechSpecData } from '../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_3_gumowe_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

// import TablesSection from './tablesSection/TablesSection';

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
              <SectionContentLayout divStyle="flex flex-col-reverse gap-y-4 lg:flex-row lg:gap-x-10 ">
                <div className="flex flex-col gap-y-10 w-full lg:w-[50%]">
                  <TablesSection
                    tableHeader={rozdzielniceGumoweHeaderData}
                    tableBody={rozdzielniceGumoweTableBodyData}
                    norma={norma}
                    features={features}
                  />
                  <ObudowyGumoweDescription description={description} />
                </div>
                <div className="w-full h-[40vh] sm:h-[50vh] lg:w-[50%] lg:h-auto  bg-grey">
                  <SquareHolderWithImage
                    imageData={productImage}
                    squareHolderOuterContainer="flex justify-center items-center w-full h-full bg-light"
                    //___items-start
                    squareHolderInnerContainer="relative overflow-hidden bg-light p-4"
                  />
                </div>
              </SectionContentLayout>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default ObudowyGumoweContent;
