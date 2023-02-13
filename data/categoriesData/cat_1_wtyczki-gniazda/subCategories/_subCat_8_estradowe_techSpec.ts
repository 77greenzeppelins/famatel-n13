/*
Data for component
*/

const wtyczkiGniazdaEstradowe_l1_tech1_data: string[][][] = [
  //___1 / IP54
  [
    [' ', '16A / 220/240V'],
    ['Bieguny', '3'],
    ['A', '150'],
    ['B', '55'],
    ['C', '110'],
    ['Ø K', '6 - 15'],
    ['Rodzaj połączenia', 'Zaciski śrubowe'],
    ['Przewód giętki (mm²)', '1 - 2.5'],
    ['Waga', '123'],
  ],
  //___2 / IP67
  [
    [' ', '16A / 220/240V'],
    ['Bieguny', '3'],
    ['A', '157'],
    ['B', '85'],
    ['C', '110'],
    ['Ø K', '6 - 15'],
    ['Rodzaj połączenia', 'Zaciski śrubowe'],
    ['Przewód giętki (mm²)', '1 - 2.5'],
    ['Waga', '215'],
  ],
  //___3 / IP67
  [
    [' ', '16A / 220/240V'],
    ['Bieguny', '3'],
    ['A', '55'],
    ['B', '55'],
    ['C', '44'],
    ['D', '44'],
    ['f', '48'],
    ['g', '15'],
    ['Rodzaj połączenia', 'Zaciski śrubowe'],
    ['Przewód giętki (mm²)', '1 - 2.5'],
    ['Waga', '138'],
  ],
];

const wtyczkiGniazdaEstradowe_l1_feat1_data = [
  ['Napięcie znamionowe: ', '220 - 240 V'],
  ['Prąd znamionowy: ', '40 A'],
  ['Rezystancja izolacji', '>10MΩ@500Vdc'],
  ['Wytrzymałość elektryczna: ', '2,5 kV'],
  ['Temperatura robocza: ', '-25 °C/ 40 °C'],
  ['Stopień ochrony: ', 'IP55'],
  ['Odporność na uderzenie: ', 'IK06'],
  ['Materiał Obudowy: ', 'PA6/ABS'],
  ['Styki: ', 'Mosiądz'],
  ['Opakowanie: ', '10 szt.'],
];
const wtyczkiGniazdaEstradowe_l1_feat2_data = [
  ['Bieguny: ', '2P+T(2P+E)'],
  ['Stopień ochrony: ', 'IP54'],
  ['Odporność na uderzenie: ', 'IK07'],
  ['Materiał Obudowy: ', 'PA6/ABS'],
  ['Styki: ', 'Nickel-plated'],
  ['Opakowanie: ', '10 szt.'],
  ['Norma: ', 'EN 60309-1 / EN 60309-2'],
];

const wtyczkiGniazdaEstradowe_l3_prodCat_data: {
  line1: string[];
  line2: string[];
  line3: string[];
}[] = [
  {
    line1: [' ', '230V', '50/60Hz'],
    line2: ['Ampery', 'Gniazdo', 'Bieguny: 3P', 'Godzina P: 6h'],
    line3: ['16', '3P (2x)', '17220'],
  },
  {
    line1: [' ', '230V', '50/60Hz'],
    line2: ['Ampery', 'Wtyczki', 'Gniazda', 'Bieguny: 3P', 'Godzina P: 6h'],
    line3: ['16', '3P (1x)', '3P (1x)', '17120'],
  },
  {
    line1: [' ', '230V', '50/60Hz'],
    line2: ['Ampery', 'Wtyczki', 'Gniazda', 'Bieguny: 3P', 'Godzina P: 6h'],
    line3: ['16', '3P (1x)', '3P (2x)', '17122'],
  },
  {
    line1: [' ', '230V', '50/60Hz'],
    line2: ['Ampery', 'Wtyczki', 'Gniazda', 'Bieguny: 3P', 'Godzina P: 6h'],
    line3: ['16', '3P (1x)', '3P (1x)', '17023'],
  },
  {
    line1: [' ', '230V', '50/60Hz'],
    line2: ['Ampery', 'Gniazdo', 'Bieguny: 3P', 'Godzina P: 6h'],
    line3: ['16', '3P (2x)', '17020'],
  },
];

const wtyczkiGniazdaEstradowe_l3_feat1_data: string[][][] = [
  [
    ['Przepust kablowy: ', 'M20'],
    ['Opakowanie', '8'],
  ],
  [
    ['Przepust kablowy: ', 'M20'],
    ['Opakowanie', '8'],
  ],
  [
    ['Przepust kablowy: ', 'M20'],
    ['Opakowanie', '8'],
  ],
  [
    ['Przepust kablowy: ', 'M20'],
    ['Kabel', '1,5 m H07RN-F'],
    ['Opakowanie', '4'],
  ],
  [
    ['Przepust kablowy: ', 'M20'],
    ['Opakowanie', '8'],
  ],
];

const wtyczkiGniazdaEstradowe_l4_tab1_data: string[][] = [
  ['', 'Wymiary'],
  ['Model', 'A', 'B', 'C'],
  ['39103', '400', '350', '340'],
  ['39104', '560', '350', '340*'],
  ['39105', '600', '400', '545*'],
  ['39106', '600', '400', '670*'],
];

//

export {
  wtyczkiGniazdaEstradowe_l1_tech1_data,
  wtyczkiGniazdaEstradowe_l1_feat1_data,
  wtyczkiGniazdaEstradowe_l1_feat2_data,
  wtyczkiGniazdaEstradowe_l3_prodCat_data,
  wtyczkiGniazdaEstradowe_l3_feat1_data,
  wtyczkiGniazdaEstradowe_l4_tab1_data,
};

// const wtyczkiGniazdaEstradowe_l3_prodCat_data = [
//   //__index
//   {
//     tablesData: [
//       //___for 16A
//       {
//         headerTopData: headerTopData_1,
//         headerBottomData: headerBottomData_1,
//         headerType: 3,
//         bodyType: 3,
//         amper: '16',
//         rowsData: [['3P (2x)', '8', '17220']],
//       },
//     ],
//   },
//   {
//     tablesData: [
//       //___for 16A
//       {
//         headerTopData: headerTopData_1,
//         headerBottomData: headerBottomData_1,
//         headerType: 3,
//         bodyType: 3,
//         amper: '16',
//         rowsData: [['3P (2x)', '8', '13311']],
//       },
//     ],
//   },
//   {
//     tablesData: [
//       //___for 16A
//       {
//         headerTopData: headerTopData_1,
//         headerBottomData: headerBottomData_1,
//         headerType: 3,
//         bodyType: 3,
//         amper: '16',
//         rowsData: [['3P (2x)', '8', '13311']],
//       },
//     ],
//   },
//   {
//     tablesData: [
//       //___for 16A
//       {
//         headerTopData: headerTopData_1,
//         headerBottomData: headerBottomData_1,
//         headerType: 3,
//         bodyType: 3,
//         amper: '16',
//         rowsData: [['3P (2x)', '4', '13311']],
//       },
//     ],
//   },
//   {
//     tablesData: [
//       //___for 16A
//       {
//         headerTopData: headerTopData_1,
//         headerBottomData: headerBottomData_1,
//         headerType: 3,
//         bodyType: 3,
//         amper: '16',
//         rowsData: [['3P (1x)', '8', '17020']],
//       },
//     ],
//   },
// ];

// ['Wymiary (sz × w × g)', '96,5 x 131 x 105,50 mm'],
// ['Norma: ', 'CEI EN 60947-3'],
//___
// ['Laying temperature: ', '-5°C +40°C'],
// ['Test rozżarzonego drutu: ', '650°C '],
// ['Bieguny: ', '2P - 3P - 4P'],
// ['Napięcie izolacji: ', '690 V'],
// ['Rated voltage pulses: ', '6 KV'],
// ['Rated conditional short-circuit: ', '10 KA'],
// ['Częstotliwość: ', '50/60 Hz'],
// ['Connecting conductors flexible / solid mm²: ', '1.5 / 10']
