import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import Layout1 from './layout1/Layout1';
import Layout2 from './layout2/Layout2';
import Layout3 from './layout3/Layout3';
import Layout4 from './layout4/Layout4';
import Layout5 from './layout5/Layout5';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import {
  wtyczkiGniazdaCampingowe_l1_tech_data,
  wtyczkiGniazdaCampingowe_l1_rest_data,
  wtyczkiGniazdaCampingowe_l2_rest_data,
  wtyczkiGniazdaCampingowe_l3_tech_data,
  wtyczkiGniazdaCampingowe_l3_rest_data,
  wtyczkiGniazdaCampingowe_l4_tech_data,
  wtyczkiGniazdaCampingowe_l4_rest_data,
  wtyczkiGniazdaCampingowe_l6_tech_data,
  wtyczkiGniazdaCampingowe_l6_rest_data,
  wtyczkiGniazdaCampingowe_l7_tech_data,
  // wtyczkiGniazdaCampingowe_l7_rest_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_9_campingowe_techSpec';

/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
import ProductContentLayout_B from '../__productContentLayout/ProductContentLayout_B';

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
              <ProductContentLayout_B imageData={productImage}>
                {
                  //___products 1-3
                  index < 3 && (
                    <Layout1
                      index={index}
                      tableHeaderData={
                        wtyczkiGniazdaCampingowe_l1_tech_data[index].tableHeader
                      }
                      tableBodyData={
                        wtyczkiGniazdaCampingowe_l1_tech_data[index].tableBody
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
                    underlinedTableData={wtyczkiGniazdaCampingowe_l3_rest_data}
                  />
                )}
                {index > 5 && index < 8 && (
                  <Layout4
                    tableData={wtyczkiGniazdaCampingowe_l4_tech_data[index - 6]}
                    underlinedTableData={
                      wtyczkiGniazdaCampingowe_l4_rest_data[index - 6]
                    }
                  />
                )}
                {index === 8 && <Layout5 />}
                {index === 9 && (
                  <Layout3
                    tableData={wtyczkiGniazdaCampingowe_l6_tech_data}
                    underlinedTableData={wtyczkiGniazdaCampingowe_l6_rest_data}
                  />
                )}
                <div className="flex flex-col gap-10">
                  {index === 10 &&
                    wtyczkiGniazdaCampingowe_l7_tech_data.map(
                      (tableData, i) => (
                        <Layout3 key={i} tableData={tableData} />
                      )
                    )}
                </div>
              </ProductContentLayout_B>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default WtyczkiGniazdaCampingoweContent;
