import React from 'react';
/**Components**/
import CatalogCardsSection from '../../../../../multipagesComponents/tables/catalogCardTable/catalogCardsSection/CatalogCardsSection';
import DIYTable from '../../../../../multipagesComponents/tables/diyTable/DIYTable';
/**HardCoded Data**/
const mainGrid = 'grid grid-cols-[repeat(4,1fr)] divide-x-[2px] divide-dark';
/**-----------------------------------------------------**/
const CatalogCardsTables: React.FunctionComponent<{
  index: number;
  catalogCardTablesData_1:
    | false
    | (
        | {
            headerTopData: string[][];
            headerBottomData: string[][];
            headerType: number;
            bodyType: number;
            amper: string;
            rowsData: string[][];
          }
        | {
            headerTopData: string[];
            headerBottomData: string[];
            headerType: number;
            bodyType: number;
            amper: string;
            rowsData: string[][];
          }
      )[];
  catalogCardTablesData_2: false | string[][];
}> = ({ index, catalogCardTablesData_1, catalogCardTablesData_2 }) => {
  /**JSX**/
  return catalogCardTablesData_1 ? (
    <CatalogCardsSection catalogCardTablesData={catalogCardTablesData_1} />
  ) : (
    <DIYTable
    //  tableLayout={'flex flex-col w-full'}
    >
      {catalogCardTablesData_2 && (
        <div className="flex flex-col divide-y-[2px] divide-dark">
          {/*line___1___*/}
          <div className={mainGrid}>
            <div className="" />
            <div className={`col-start-2 col-span-full bg-vR px-1 py-2`}>
              {catalogCardTablesData_2[0].map((label, index) => (
                <div key={index} className="fc">
                  <p className="p-small text-light"> {label}</p>
                </div>
              ))}
            </div>
          </div>
          {/*line___2___*/}
          <div className={mainGrid}>
            <div
              className={`col-start-1 col-end-2 fc divide-x-[2px] divide-dark  `}
            >
              {catalogCardTablesData_2[1].map((label, index) => (
                <div
                  key={index}
                  className="px-1 py-2 fc bg-greyShade1 w-[50%] h-full"
                >
                  <p className="text-center break-all p-small text-light">
                    {' '}
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="col-start-2 col-span-full " />
          </div>
          {/*line___3___*/}
          <div className={mainGrid}>
            <div className="" />
            <div className={`col-start-2 col-span-full bg-vR px-1 py-2`}>
              {catalogCardTablesData_2[2].map((label, index) => (
                <div key={index} className=" fc">
                  <p className="p-small text-light"> {label}</p>
                </div>
              ))}
            </div>
          </div>
          {/*line___4___*/}
          <div className={mainGrid}>
            <div
              className={`col-start-1 col-span-1 flex items-center bg-dark px-1 py-2`}
            >
              <p className="p-small text-light">
                {' '}
                {catalogCardTablesData_2[3]}
              </p>
            </div>
            <div
              className={`col-start-2 col-span-1 fc flex-col bg-vR px-1 py-2`}
            >
              {catalogCardTablesData_2[4].map((label, i) => (
                <div key={i}>
                  {' '}
                  <p className="p-small text-light">{label}</p>
                </div>
              ))}
            </div>
            <div
              className={`col-start-3 col-span-1 fc flex-col bg-vB px-1 py-2`}
            >
              {catalogCardTablesData_2[5].map((label, i) => (
                <div key={i}>
                  {' '}
                  <p className="p-small text-light">{label}</p>
                </div>
              ))}
            </div>
            <div
              className={`col-start-4 col-span-1 fc flex-col bg-vR px-1 py-2`}
            >
              {catalogCardTablesData_2[6].map((label, i) => (
                <div key={i}>
                  {' '}
                  <p className="p-small text-light">{label}</p>
                </div>
              ))}
            </div>
          </div>
          {/*line___5___*/}
          <div className={mainGrid}>
            <div
              className={`col-start-1 col-span-1 flex items-center bg-dark px-1 py-2`}
            >
              <p className="p-small text-light">
                {' '}
                {catalogCardTablesData_2[7]}
              </p>
            </div>
            <div
              className={`col-start-2 col-span-1 fc flex-col bg-vB px-1 py-2`}
            >
              {catalogCardTablesData_2[8].map((label, i) => (
                <div key={i}>
                  {' '}
                  <p className="p-small text-light">{label}</p>
                </div>
              ))}
            </div>
            <div
              className={`col-start-3 col-span-1 fc flex-col bg-vB px-1 py-2`}
            >
              {catalogCardTablesData_2[9].map((label, i) => (
                <div key={i}>
                  {' '}
                  <p className="p-small text-light">{label}</p>
                </div>
              ))}
            </div>
            <div
              className={`col-start-4 col-span-1 fc flex-col bg-vR px-1 py-2`}
            >
              {catalogCardTablesData_2[10].map((label, i) => (
                <div key={i}>
                  {' '}
                  <p className="p-small text-light">{label}</p>
                </div>
              ))}
            </div>
          </div>
          {/*line___6___*/}
          <div className={`${mainGrid} pt-[4px]`}>
            <div
              className={`col-start-1 col-end-2 fc divide-x-[2px] divide-dark  `}
            >
              {catalogCardTablesData_2[11].map((label, index) => (
                <div
                  key={index}
                  className={`px-1 py-2 fc ${
                    index ? 'bg-greyTint1' : 'bg-greyShade1'
                  }  w-[50%] h-full`}
                >
                  <p className="text-center break-all p-small text-light">
                    {' '}
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div
              className={`col-start-2 col-span-full flex divide-x-[2px] divide-dark bg-corpo `}
            >
              {catalogCardTablesData_2[12].map((label, index) => (
                <div key={index} className={`relative px-1 py-2 fc  w-full`}>
                  <div
                    className={`absolute inset-0  ${
                      index < 2 ? 'bg-vB' : 'bg-vR'
                    }`}
                  />
                  <p className="relative text-center break-all p-small text-light">
                    {' '}
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </DIYTable>
  );
};

export default CatalogCardsTables;

/**
 * 
 index< 3 ? 
    <CatalogCardsSection
                      catalogCardTablesData={catalogCardTablesData}
                    /> 
  : null


          // <RowType_5
        //   rowData={catalogCardTablesData_2[0]}
        //   backGroundStyleCase={0}
        //   rowContainerStyle={'grid grid-cols-[repeat(5,1fr)_20px] '}
        //   bgColors={[]}
        // />
 */
