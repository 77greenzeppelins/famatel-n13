import React from 'react';
/**HardCoded Data*/
const headerColors = [
  'bg-[#ceae0e]',
  'bg-[#134976]',
  'bg-[#a01b29]',
  'bg-[#474a50]',
];

const CatalogTableHeader: React.FunctionComponent<{
  headerTopData: string[] | string[][];
  headerBottomData: string[] | string[][];
  headerType: number;
}> = ({ headerTopData, headerType, headerBottomData }) => {
  /**...**/
  const createStyles = (headerType: number) => {
    switch (headerType) {
      case 1:
        return {
          containerStyle:
            'grid grid-cols-[3fr_2fr_2fr_2fr_2fr] divide-x-2 divide-dark group gap-y-2',
          topCell_1: 'bg-dark flex flex-col border border-greyShade1 p-1',
          vatCollors: [
            'bg-[#ceae0e]',
            'bg-[#134976]',
            'bg-[#a01b29]',
            'bg-[#2c3038]',
          ],
        };

      case 2:
        return {
          containerStyle:
            'grid grid-cols-[3fr_3fr_3fr] divide-x-2 divide-dark group gap-y-2',
          topCell_1: 'bg-dark flex flex-col border border-greyShade1',
          vatCollors: ['bg-[#134976]', 'bg-[#a01b29]'],
        };
      case 3:
        return {
          containerStyle:
            'grid grid-cols-[3fr_6fr] divide-x-2 divide-dark group gap-y-2',
          topCell_1: 'bg-dark flex flex-col border border-greyShade1 p-1',
          vatCollors: ['bg-[#a01b29]'],
        };
    }
  };

  /**...WTF**/
  console.log('headerTopData', headerTopData);
  /**JSX**/
  return (
    <div className={createStyles(headerType)?.containerStyle}>
      {headerTopData.map((lab, index) => {
        if (index === 0 && lab[0]) {
          return (
            <div className={createStyles(headerType)?.topCell_1} key={index}>
              <div>
                <p className="p-v-small text-grey">{lab[0]}</p>
              </div>
              <div>
                <p className="p-v-small text-grey">{lab[1]}</p>
              </div>
              <div>
                <p className="p-v-small text-grey">{lab[2]}</p>
              </div>
            </div>
          );
        }
        return (
          <div
            className={`flex flex-col ${
              createStyles(headerType)?.vatCollors[index - 1]
            }`}
            //___headerColors[index - 1]
            key={index}
          >
            <div className="fc h-[60%] ">
              <p className="p-medium text-center text-light">{lab[0]}</p>
            </div>
            <div className="fc h-[40%]">
              <p className="p-small text-center text-light">{lab[1]}</p>
            </div>
          </div>
        );
      })}
      {headerBottomData.map((lab, index) => {
        if (index === 0 && lab[0]) {
          return (
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-1" key={index}>
              <div className="fc bg-greyShade1 p-1">
                <p className="p-v-small text-center text-light break-all">
                  {lab[0]}
                </p>
              </div>
              <div className="fc bg-greyShade1 p-1">
                <p className="p-v-small text-center text-light break-all">
                  {lab[1]}
                </p>
              </div>
              <div className="fc bg-greyShade1 p-1">
                <p className="p-v-small text-center text-light break-all">
                  {lab[2]}
                </p>
              </div>
            </div>
          );
        }
        return (
          <div
            className=" flex flex-col"
            //___headerColors[index - 1]
            key={index}
          >
            <div className="fc h-[50%] ">
              <p className="p-v-small  text-grey">{lab[0]}</p>
            </div>
            <div className="fc h-[50%]">
              <p className="p-v-small  text-grey">{lab[1]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CatalogTableHeader;
