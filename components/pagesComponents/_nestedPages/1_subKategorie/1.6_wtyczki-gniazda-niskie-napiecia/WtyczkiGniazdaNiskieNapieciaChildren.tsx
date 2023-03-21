import { motion } from 'framer-motion';
import React from 'react';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import DIYTable from '../../../../multipagesComponents/tables/diyTable/DIYTable';
import RowType_5 from '../../../../multipagesComponents/tables/diyTable/rowType_5/RowType_5';
/**BasicData*/
import { niskieNapięciaSubCatTable1Data } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_6_niskie-napiecia_data';
import { corpoColors } from '../../../../../data/_data';
import RowType_6 from '../../../../multipagesComponents/tables/diyTable/rowType_6/RowType_6';
/**...........experiments*/

const WtyczkiGniazdaNiskieNapieciaChildren = () => {
  /**JSX**/
  return (
    <SectionContentLayout data-component="WtyczkiGniazdaNiskieNapieciaChildren">
      <SmallPseudoHeader text="Informacja na temat...." />
      <div>
        <p className="p-small text-grey">
          Wpust dla osprzętu na bardzo niskie napięcie używany jest w celu
          odróżnienia napięcia i częstotliwości - szczegóły w tabeli
        </p>
      </div>
      <DIYTable
      //  tableLayout="flex flex-col gap-y-[2px]"
      >
        <RowType_6
          rowData={niskieNapięciaSubCatTable1Data.header}
          rowContainerStyle={'grid grid-cols-[repeat(5,1fr)_20px]'}
          glitchedCellStyle={
            'relative col-start-3 col-end-5 fc flex-col border-x-[1px] border-dark gap-y-[2px]'
          }
          indexOfGlitch={2}
          typeOfGlitch={1}
        />

        {niskieNapięciaSubCatTable1Data.sectionsRow1.map((rowData, index) => {
          //___thera are two rows; one should be "violet" and the second one "white" in color...
          const mainColor = index === 0 ? 'bg-vV' : ' bg-light';
          const hoverColor =
            index === 0 ? corpoColors.vModViolet : corpoColors.vModLight;
          return (
            <RowType_5
              key={index}
              backGroundStyleCase={2}
              rowContainerStyle="grid grid-cols-[repeat(5,1fr)_20px] "
              rowData={rowData}
              labelStyle={`relative p-small text-center pointer-events-none ${
                index % 2 ? 'text-dark' : 'text-light'
              }  `}
              bgColors={[mainColor, 'bg-dark']}
              hoverColor={hoverColor}
            />
          );
        })}
        {/*green column_1*/}
        <div className="grid grid-cols-[repeat(5,1fr)_20px] grid-rows-[repeat(4,1fr)] gap-y-[2px]">
          <div className="relative col-start-1 col-end-2 row-span-full fc flex-col  border-x-[1px] border-dark">
            <motion.div
              whileHover={{
                backgroundColor: corpoColors.vModGreen,
                transition: { duration: 0.4, delay: 0.2 },
              }}
              className={`absolute inset-0 bg-vG`}
            />
            <p className="relative p-small text-center text-light pointer-events-none">
              20-25 i{' '}
            </p>
            <p className="relative p-small text-center text-light pointer-events-none">
              40-50
            </p>
          </div>
          {niskieNapięciaSubCatTable1Data.greenSectionRows.map(
            (rowData, index) => (
              <RowType_5
                key={index}
                backGroundStyleCase={2}
                rowContainerStyle="grid grid-cols-[repeat(4,1fr)_20px] col-start-2 col-span-full"
                rowData={rowData}
                labelStyle="relative p-small text-center pointer-events-none text-light"
                bgColors={[`bg-vG`, `bg-dark`]}
                hoverColor={corpoColors.vModGreen}
              />
            )
          )}
        </div>
        <RowType_5
          backGroundStyleCase={2}
          rowContainerStyle="grid grid-cols-[repeat(5,1fr)_20px] "
          rowData={niskieNapięciaSubCatTable1Data.dcLine}
          labelStyle="relative p-small text-center pointer-events-none text-dark"
          bgColors={['bg-light']}
        />
      </DIYTable>
      <div>
        <p className="p-small text-grey">* Dostępne na życzenie</p>
      </div>

      <div>
        <p className="p-small text-grey">
          Seria ma na celu rozwiązanie problemów związanych z zasilaniem lub
          połączeniem obwodów elektrycznych sieci o napięciu znamionowym do 50V,
          stosowana w środowiskach przewodzących lub z dużym ryzykiem pożaru i
          wybuchu.
        </p>
      </div>
    </SectionContentLayout>
  );
};

export default WtyczkiGniazdaNiskieNapieciaChildren;
