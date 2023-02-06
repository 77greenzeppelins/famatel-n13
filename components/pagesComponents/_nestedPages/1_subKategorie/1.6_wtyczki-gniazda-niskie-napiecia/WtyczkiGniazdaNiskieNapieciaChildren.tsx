import { motion } from 'framer-motion';
import React from 'react';
/**Components**/
import SectionContentLayout from '../../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
/**BasicData*/
import { niskieNapięciaSubCatTable1Data } from '../../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_6_niskie-napiecia_data';
import { corpoColors } from '../../../../../data/_data';

const TableRow = ({
  rowData,
  rowContainerStyle,
  labelStyle,
  bgColor,
}: {
  rowData: string[];
  rowContainerStyle: string;
  labelStyle?: string;
  bgColor?: string;
}) => {
  return (
    <div data-component="TableRow__container" className={rowContainerStyle}>
      {rowData.map((label, index) => (
        <div
          className={`relative fc py-2 border-x-[1px] border-dark`}
          key={index}
        >
          <motion.div
            whileHover={{
              opacity: 0.7,
              transition: { duration: 0.4, delay: 0.2 },
            }}
            className={`${
              index < rowData.length - 1 ? bgColor : 'bg-dark'
            } absolute inset-0`}
          />
          <p
            className={
              labelStyle
                ? labelStyle
                : `relative p-small text-center pointer-events-none text-light `
            }
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

const Header = ({ rowData }: { rowData: (string | string[])[] }) => {
  return (
    <div
      data-component="TableRow__container"
      className="grid grid-cols-[repeat(5,1fr)_20px] "
    >
      {rowData.map((label, index) => {
        if (index === 2 && Array.isArray(label)) {
          return (
            <div
              key={index}
              className="relative col-start-3 col-end-5 fc flex-col border-x-[1px] border-dark gap-y-[2px]"
            >
              <div className="fc row-start-1 row-end-2 w-full bg-greyShade1 py-2">
                <p className="p-small text-center pointer-events-none text-light">
                  {label[0]}
                </p>
              </div>
              <div className="flex  row-start-2 row-end-3 w-full gap-x-[2px]">
                <div className="fc w-full bg-greyShade1 py-2">
                  <p className="p-small text-center pointer-events-none text-light">
                    {label[1]}
                  </p>
                </div>
                <div className="fc w-full bg-greyShade1 py-2">
                  <p className="p-small text-center pointer-events-none text-light">
                    {label[2]}
                  </p>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div
            className={`relative fc py-2 border-x-[1px] border-dark`}
            key={index}
          >
            <div className="absolute inset-0 bg-greyShade1" />
            <p className="relative p-small text-center pointer-events-none text-light">
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

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
      <div className="flex flex-col gap-y-[2px]">
        <Header rowData={niskieNapięciaSubCatTable1Data.header} />
        {niskieNapięciaSubCatTable1Data.sectionsRow1.map((rowData, index) => (
          <TableRow
            key={index}
            rowContainerStyle="grid grid-cols-[repeat(5,1fr)_20px] "
            rowData={rowData}
            labelStyle={`relative p-small text-center pointer-events-none ${
              index % 2 ? 'text-dark' : 'text-light'
            }  `}
            bgColor={index === 0 ? `bg-[${corpoColors.violet}]` : ' bg-light'}
          />
        ))}
        {/* </div> */}
        <div className="grid grid-cols-[repeat(5,1fr)_20px] grid-rows-[repeat(4,1fr)] gap-y-[2px]">
          <div className="relative col-start-1 col-end-2 row-span-full fc flex-col  border-x-[1px] border-dark">
            <motion.div
              whileHover={{
                opacity: 0.7,
                transition: { duration: 0.4, delay: 0.2 },
              }}
              className={`absolute inset-0 bg-[${corpoColors.green}]`}
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
              <TableRow
                key={index}
                rowContainerStyle="grid grid-cols-[repeat(4,1fr)_20px] col-start-2 col-span-full"
                rowData={rowData}
                labelStyle="relative p-small text-center pointer-events-none text-light"
                bgColor={` bg-[${corpoColors.green}]`}
              />
            )
          )}
        </div>
        <TableRow
          rowContainerStyle="grid grid-cols-[repeat(5,1fr)_20px] "
          rowData={niskieNapięciaSubCatTable1Data.dcLine}
          labelStyle="relative p-small text-center pointer-events-none text-dark"
          bgColor="bg-light"
        />
      </div>
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
