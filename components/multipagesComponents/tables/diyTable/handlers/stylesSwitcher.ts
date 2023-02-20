/**Tailwind Styles*/
import {
  vertGap,
  tableTextS,
  tableTextM,
  tableTextL,
} from '../../../../../utils/tailwindStyles';

/**HardCoded Data**/
//__containers for col7_Table
const col7full = `grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] ${vertGap} group`;
const col7half = 'grid grid-cols-[2fr_3fr_3fr] divide-x-2 divide-dark group';
const col7short = 'grid grid-cols-[2fr_6fr] divide-x-2 divide-dark group';
//__containers for col7_Table
const col5full =
  'grid grid-cols-[2fr_1fr_1fr_1fr_1fr] divide-x-2 divide-dark group';
const col5half = 'grid grid-cols-[2fr_2fr_2fr] divide-x-2 divide-dark group';
const col5short = 'grid grid-cols-[2fr_4fr] divide-x-2 divide-dark group';
//__containers for col4_Table
const col4full =
  'grid grid-cols-[2fr_2fr_2fr_2fr] divide-x-2 divide-dark group';
const col4half = 'grid grid-cols-[2fr_6fr] divide-x-2 divide-dark group';
//__containers for col3_Table
const col3full = 'grid grid-cols-[2fr_3fr_3fr] divide-x-2 divide-dark group';
const col3half = 'grid grid-cols-[2fr_6fr] divide-x-2 divide-dark group';
//___ampers
const ampsH = 'py-2 pl-2 bg-dark';
const ampC = `text-light ${tableTextL} text-center py-2 bg-greyShade2`;
//___poles
const polesH = `${tableTextM} text-light py-2 pl-2 bg-greyShade2`;
const polesC = `text-light ${tableTextM} text-center py-2 bg-greyShade2`;
//___animated
const animH = `${tableTextM} text-light py-2 pl-2 bg-greyShade2 group-hover:bg-corpo ease-in duration-300 select-none`;
const animC = `fc text-dark ${tableTextM} text-center py-2 bg-greyTint2  group-hover:bg-light ease-in duration-300 select-none`;

const mainStylesSwitcher = (polesNumber: number) => {
  switch (polesNumber) {
    //___for table with full 16A & 32A
    case 7:
      return {
        columnsPoles: col7full,
        columnsAmpers: col7half,
        columnsConnectionType: col7short,
        // animatedRowStyle: [animH, animC, animC, animC, animC, animC, animC],
        animatedRowStyle: [animH, animC, animC, animC, animC, animC, animC],
        ampersStyle: [ampsH, ampC, ampC, ampC, ampC, ampC, ampC],
        polesStyle: [polesH, polesC, polesC, polesC, polesC, polesC, polesC],
      };
    case 5:
      return {
        columnsPoles: col5full,
        columnsAmpers: col5half,
        columnsConnectionType: col5short,
        animatedRowStyle: [animH, animC, animC, animC, animC, animC, animC],
        ampersStyle: [ampsH, ampC, ampC, ampC, ampC, ampC, ampC],
        polesStyle: [polesH, polesC, polesC, polesC, polesC, polesC, polesC],
      };
    case 4:
      return {
        columnsPoles: col4full,
        columnsAmpers: col4half,
        columnsConnectionType: col4half,
        animatedRowStyle: [animH, animC, animC, animC],
        ampersStyle: [ampsH, ampC],
        polesStyle: [polesH, polesC, polesC, polesC],
      };
    case 3:
      return {
        columnsPoles: col3full,
        columnsAmpers: col3half,
        columnsConnectionType: col3half,
        animatedRowStyle: [animH, animC, animC],
        ampersStyle: [ampsH, ampC, ampC],
        polesStyle: [polesH, polesC, polesC],
      };
    // case 2:
    //   return {
    //     columnsPoles: col3full,
    //     columnsAmpers: col3full,
    //     columnsConnectionType: col3half,
    //     animatedRowStyle: [animH, animC, animC],
    //     ampersStyle: [ampsH, ampC, ampC],
    //     polesStyle: [polesH, polesC, polesC],
    //   };
  }
};

export { mainStylesSwitcher, animH, animC };
