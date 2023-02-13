/**HardCoded Data**/
//__containers for col7_Table
const col7full =
  'grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x-2 divide-dark group';
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
const ampsH = ' py-2 pl-2 bg-dark';
const ampC = ' text-light p-small text-center py-2 bg-greyShade1';
//___poles
const polesH = 'p-small text-light py-2 pl-2 bg-greyShade1';
const polesC = ' text-light p-small text-center py-2 bg-greyShade1';
//___animated
const animH =
  'p-small text-light py-2 pl-2 bg-greyShade1 group-hover:bg-corpo ease-in duration-300 select-none';
const animC =
  'fc text-dark p-small text-center py-2 bg-greyTint2  group-hover:bg-light ease-in duration-300 select-none';

const mainStylesSwitcher = (polesNumber: number) => {
  switch (polesNumber) {
    case 7:
      return {
        columnsPoles: col7full,
        columnsAmpers: col7half,
        columnsConnectionType: col7short,
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
        columnsAmpers: col3full,
        columnsConnectionType: col3half,
        animatedRowStyle: [animH, animC, animC],
        ampersStyle: [ampsH, ampC, ampC],
        polesStyle: [polesH, polesC, polesC],
      };
  }
};

export { mainStylesSwitcher, animH, animC };
