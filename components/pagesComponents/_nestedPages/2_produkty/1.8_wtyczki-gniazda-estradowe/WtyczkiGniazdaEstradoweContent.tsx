import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_B from '../__productContentLayout/ProductContentLayout_B';
import SectionWithTable from '../_sectionWithTable/SectionWithTable';
import TableWithUnderlinedRows from '../../../../multipagesComponents/tables/tableWithUnderlinedRows/TableWithUnderlinedRows';
import Layout1 from './layout1/Layout1';
import Layout2 from './layout2/Layout2';
import Layout4 from './layout4/Layout4';
/**Basic Data**/
import {
  smallPseudoHeaders,
  splitedPathParts,
} from '../../../../../data/_data';
import {
  wtyczkiGniazdaEstradowe_l1_tech1_data,
  wtyczkiGniazdaEstradowe_l3_feat1_data,
  wtyczkiGniazdaEstradowe_l3_prodCat_data,
  wtyczkiGniazdaEstradowe_l4_tab1_data,
  wtyczkiGniazdaEstradowe_l5_feat_data,
  wtyczkiGniazdaEstradowe_l6_feat_data,
} from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_8_estradowe_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';
/**Tailwind Styles**/
import { undelinedTableTextStyle } from '../../../../../utils/tailwindStyles';

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
              <ProductContentLayout_B imageData={productImage}>
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
                {
                  //___index 11; skrzynia!
                  index === 10 && (
                    <Layout4 tableData={wtyczkiGniazdaEstradowe_l4_tab1_data} />
                  )
                }
                {
                  //___index 11; stojak!
                  index === 11 && (
                    <SectionWithTable label={smallPseudoHeaders.l3}>
                      <TableWithUnderlinedRows
                        rowsData={wtyczkiGniazdaEstradowe_l5_feat_data}
                        cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                        textStyle={[
                          undelinedTableTextStyle,
                          undelinedTableTextStyle,
                        ]}
                      />
                    </SectionWithTable>
                  )
                }
                {
                  //___index 11; stojak!
                  index === 12 && (
                    <SectionWithTable label={smallPseudoHeaders.l3}>
                      <TableWithUnderlinedRows
                        rowsData={wtyczkiGniazdaEstradowe_l6_feat_data}
                        cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
                        textStyle={[
                          undelinedTableTextStyle,
                          undelinedTableTextStyle,
                        ]}
                      />
                    </SectionWithTable>
                  )
                }
              </ProductContentLayout_B>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default WtyczkiGniazdaEstradoweContent;
