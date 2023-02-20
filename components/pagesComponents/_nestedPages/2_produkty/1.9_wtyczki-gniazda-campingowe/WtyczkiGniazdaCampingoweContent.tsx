import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SquareHolderWithImage from '../../../../multipagesComponents/holders/squareHolderWithImage/SquareHolderWithImage';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import Layout1 from './layout1/Layout1';
import Layout2 from './layout2/Layout2';
import Layout3 from './layout3/Layout3';
import Layout4 from './layout4/Layout4';
import Layout5 from './layout5/Layout5';
/**Basic Data**/
import {
  smallPseudoHeaders,
  splitedPathParts,
} from '../../../../../data/_data';
import {
  wtyczkiGniazdaCampingowe_l1_tech_data,
  wtyczkiGniazdaCampingowe_l1_header_data,
  wtyczkiGniazdaCampingowe_l1_rest_data,
  wtyczkiGniazdaCampingowe_l2_rest_data,
  wtyczkiGniazdaCampingowe_l3_tech_data,
  wtyczkiGniazdaCampingowe_l3_rest_data,
  wtyczkiGniazdaCampingowe_l4_tech_data,
  wtyczkiGniazdaCampingowe_l4_rest_data,
  wtyczkiGniazdaCampingowe_l6_tech_data,
  wtyczkiGniazdaCampingowe_l6_rest_data,
  wtyczkiGniazdaCampingowe_l7_tech_data,
  wtyczkiGniazdaCampingowe_l7_rest_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_9_campingowe_techSpec';
/**Tailwind Styles**/
import { undelinedTableTextStyle } from '../../../../../utils/tailwindStyles';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------**/
const WtyczkiGniazdaCampingoweContent: React.FunctionComponent<{
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
        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <SectionContentLayout divStyle="flex flex-col-reverse gap-y-4 lg:flex-row lg:gap-x-10 ">
                <div className="flex flex-col gap-y-10 w-full lg:w-[50%] ">
                  {
                    //___products 1-3
                    index < 3 && (
                      <Layout1
                        index={index}
                        tableHeaderData={
                          wtyczkiGniazdaCampingowe_l1_tech_data[index]
                            .tableHeader
                        }
                        tableBodyData={
                          wtyczkiGniazdaCampingowe_l1_tech_data[index].tableBody
                        }
                        headerType={
                          wtyczkiGniazdaCampingowe_l1_header_data[index]
                        }
                        underlinedTableData={
                          wtyczkiGniazdaCampingowe_l1_rest_data[index]
                        }
                      />
                    )
                  }
                  {index > 2 && index < 5 && (
                    <Layout2
                      underlinedTableData={
                        wtyczkiGniazdaCampingowe_l2_rest_data[index - 3]
                      }
                    />
                  )}
                  {index === 5 && (
                    <Layout3
                      tableData={wtyczkiGniazdaCampingowe_l3_tech_data}
                      underlinedTableData={
                        wtyczkiGniazdaCampingowe_l3_rest_data
                      }
                    />
                  )}
                  {index > 5 && index < 8 && (
                    <Layout4
                      tableData={
                        wtyczkiGniazdaCampingowe_l4_tech_data[index - 6]
                      }
                      underlinedTableData={
                        wtyczkiGniazdaCampingowe_l4_rest_data[index - 6]
                      }
                    />
                  )}
                  {index === 8 && <Layout5 />}
                  {index === 9 && (
                    <Layout3
                      tableData={wtyczkiGniazdaCampingowe_l6_tech_data}
                      underlinedTableData={
                        wtyczkiGniazdaCampingowe_l6_rest_data
                      }
                    />
                  )}
                  <div className="flex flex-col gap-10">
                    {index === 10 &&
                      wtyczkiGniazdaCampingowe_l7_tech_data.map(
                        (tableData, i) => (
                          <Layout3 key={i} tableData={tableData} />
                        )
                      )}
                    {/* <SectionContentLayout divStyle="flex flex-col gap-y-8">
                      <SmallPseudoHeader
                        text={smallPseudoHeaders.l3}
                        hasBox={true}
                        hasVerticalOrnament={false}
                      />
                      <TableWithUnderlinedRows
                        rowsData={wtyczkiGniazdaCampingowe_l7_rest_data}
                        cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                        textStyle={[
                          undelinedTableTextStyle,
                          undelinedTableTextStyle,
                        ]}
                      />
                    </SectionContentLayout> */}
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

export default WtyczkiGniazdaCampingoweContent;
