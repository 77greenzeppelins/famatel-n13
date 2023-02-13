import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SquareHolderWithImage from '../../../../multipagesComponents/holders/squareHolderWithImage/SquareHolderWithImage';
import Layout1 from './layout1/Layout1';
import Layout2 from './layout2/Layout2';
import Layout4 from './layout4/Layout4';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import {
  wtyczkiGniazdaEstradowe_l1_tech1_data,
  wtyczkiGniazdaEstradowe_l3_feat1_data,
  wtyczkiGniazdaEstradowe_l3_prodCat_data,
  wtyczkiGniazdaEstradowe_l4_tab1_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_8_estradowe_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------**/
const WtyczkiGniazdaEstradoweContent: React.FunctionComponent<{
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
                        tableData={wtyczkiGniazdaEstradowe_l1_tech1_data[index]}
                        index={index}
                      />
                    )
                  }
                  {
                    //___products 6-10 / index 5-9
                    index > 4 && index < 10 && (
                      <Layout2
                        tableData={
                          wtyczkiGniazdaEstradowe_l3_prodCat_data[index - 5]
                        }
                        featuresData={
                          wtyczkiGniazdaEstradowe_l3_feat1_data[index - 5]
                        }
                        index={index}
                      />
                    )
                  }
                  {index === 10 && (
                    <Layout4 tableData={wtyczkiGniazdaEstradowe_l4_tab1_data} />
                  )}
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

export default WtyczkiGniazdaEstradoweContent;
