import React from 'react';
/**Router Staff**/
import { useRouter } from 'next/router';
/**Components**/
import ProductContentLayout_A from '../__productContentLayout/ProductContentLayout_A';
import TablesSection from './tablesSection/TablesSection';
/**Basic Data**/
import { splitedPathParts } from '../../../../../data/_data';
import { gniazdaBlokadaKomponenty_tablesData } from '../../../../../data/categoriesData/cat_2_gniazda-z-blokada/subCategories/_subCat_3_z-komponentami_prodCat';
import { gniazdaBlokadaKomponenty_tech_data } from '../../../../../data/categoriesData/cat_2_gniazda-z-blokada/subCategories/_subCat_3_z-komponentami_techSpec';
/**TS**/
import { IF_ProductCardData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------**/
const GniazdaBlokadaKomponentyContent: React.FunctionComponent<{
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
        //__data from "wtyczkiGniazdaNiskieNapiecia_tech_data"
        const ampersData = gniazdaBlokadaKomponenty_tech_data[index].ampers;
        const polesNumber =
          gniazdaBlokadaKomponenty_tech_data[index].poles.length;
        const polesData = gniazdaBlokadaKomponenty_tech_data[index].poles;
        const bodyData = gniazdaBlokadaKomponenty_tech_data[index].bodyData;
        const przewodData = gniazdaBlokadaKomponenty_tech_data[index].mm;
        const wagaData = gniazdaBlokadaKomponenty_tech_data[index].weight;
        const connectionTypeData =
          gniazdaBlokadaKomponenty_tech_data[index].connectionType;
        //___data for "catalogTable"
        const catalogCardTablesData =
          gniazdaBlokadaKomponenty_tablesData[index].tablesData;

        //___
        if (router.query.model === productPathPivotalPart) {
          return (
            <React.Fragment key={index}>
              <ProductContentLayout_A imageData={productImage}>
                <TablesSection
                  productCardIndex={index}
                  polesNumber={polesNumber}
                  polesData={polesData}
                  ampersData={ampersData}
                  bodyData={bodyData}
                  connectionTypeData={connectionTypeData}
                  weightData={wagaData}
                  wireData={przewodData}
                  catalogCardTablesData={catalogCardTablesData}
                />
              </ProductContentLayout_A>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default GniazdaBlokadaKomponentyContent;
