import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SquareHolderWithImage from '../../../../multipagesComponents/holders/squareHolderWithImage/SquareHolderWithImage';
import CatalogCardsSection from '../../../../multipagesComponents/tables/catalogCardTable/catalogCardsSection/CatalogCardsSection';
import DIYTable from '../../../../multipagesComponents/tables/diyTable/DIYTable';
import RowType_6 from '../../../../multipagesComponents/tables/diyTable/rowType_6/RowType_6';
import RowType_5 from '../../../../multipagesComponents/tables/diyTable/rowType_5/RowType_5';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { adapteryPrzemysloweWielokrotne_tablesData } from '../../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_2_wielokrotne_prodCat';
import { adapteryPrzemysloweWielokrotne_tech_data } from '../../../../../data/categoriesData/cat_3_adaptery-przemyslowe/subCategories/_subCat_2_wielokrotne_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
import CatalogCardsTables from './catalogCardsTables/CatalogCardsTables';

/**----------------------------------------**/
const AdapteryPrzemysloweWielokrotneContent: React.FunctionComponent<{
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

        // //___data for "catalogTable"
        const catalogCardTablesData =
          index < 5 &&
          adapteryPrzemysloweWielokrotne_tablesData[index].tablesData;

        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <SectionContentLayout divStyle="flex flex-col-reverse gap-y-4 lg:flex-row lg:gap-x-10 ">
                <div className="flex flex-col gap-y-10 w-full lg:w-[50%] ">
                  <div className="flex flex-col gap-10">
                    {/* <CatalogCardsSection
                      catalogCardTablesData={
                        adapteryPrzemysloweWielokrotne_tablesData[index]
                          .tablesData
                      }
                    /> */}

                    {/* <CatalogCardsTables
                      catalogCardTablesData={catalogCardTablesData}
                    /> */}

                    <DIYTable tableLayout="flex flex-col gap-y-[4px]">
                      <RowType_6
                        rowData={
                          adapteryPrzemysloweWielokrotne_tech_data[index].header
                        }
                        rowContainerStyle={'grid grid-cols-[repeat(5,1fr)]'}
                        glitchedCellStyle={
                          'relative col-start-1 col-end-3 fc flex-col border-x-[1px] border-dark gap-y-[1px]'
                        }
                        indexOfGlitch={0}
                      />
                      <div className="flex flex-col gap-y-[2px]">
                        {adapteryPrzemysloweWielokrotne_tech_data[
                          index
                        ].tableBody.map((rowData, index) => (
                          <RowType_5
                            key={index}
                            backGroundStyleCase={1}
                            rowContainerStyle="grid grid-cols-[repeat(5,1fr)] "
                            rowData={rowData}
                            labelStyle={
                              'relative p-small text-center pointer-events-none text-dark'
                            }
                            bgColors={['bg-greyTint2']}
                          />
                        ))}
                      </div>
                    </DIYTable>
                  </div>
                </div>
                <div className="w-full h-[40vh] sm:h-[50vh] lg:w-[50%] lg:h-auto lg:min-h-[400px]  bg-grey">
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

export default AdapteryPrzemysloweWielokrotneContent;
