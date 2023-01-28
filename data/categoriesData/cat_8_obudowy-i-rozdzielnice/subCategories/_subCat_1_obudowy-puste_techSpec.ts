import { corpoColors } from '../../../_data';
/*
Basic Data
*/
const iconColorBG = corpoColors.dark;
const iconColorFG = corpoColors.light;
const iconContainerSize = 50;
const textLabelStyle = 'text-light text-[0.75rem]';
const arrOfDescriptions = [
  'Pokrywa i podstawa z ABS',
  'Transparentne okienko z PC',
  'Osłony śrub dla IP w komplecie',
];

/*
.....
*/
const obudowyPusteTechSpecData = [
  //___1
  {
    header: ['Wymiary'],
    tablesData: [
      [
        { label: 'Wysokość', value: '305' },
        { label: 'Szerokość', value: '125' },
        { label: 'Głębokość', value: '107' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '18'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV', 'MOD6'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__2
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '490' },
        { label: 'Szerokość', value: '490' },
        { label: 'Głębokość', value: '107' },
      ],
      [
        { label: 'Góra', value: '1 x Ø25 / 32' },
        { label: 'Dół', value: '1 x Ø25 / 32' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '12'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV', 'MOD8'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__3
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '230' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø25 - Ø20 + 1 x Ø40 - Ø32' },
        { label: 'Dół', value: '2 x Ø25 - Ø20 + 1 x Ø40 - Ø32' },
        { label: 'Bok', value: '2x (3 x Ø40 - Ø32 + 2 x Ø25 - Ø20)' },
      ],
    ],

    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '6'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__4
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '330' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Bok', value: '2 x (2 x Ø40-Ø32 + 2 x Ø25-Ø20)' },
      ],
    ],

    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '4'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__5
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '300' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Bok', value: '2 x (3 x Ø40 - Ø32 + 2 x Ø25 - Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '4'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__6
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '685' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø25-Ø20 + 2 x Ø40-Ø32 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø25-Ø20 + 2 x Ø40-Ø32 + 1 x Ø50-Ø40' },
        { label: 'Bok', value: '2 x (3 x Ø25 - Ø20 + 4 x Ø40 - Ø32)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '1'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__7
  {
    header: ['Wymiary'],
    tablesData: [
      [
        { label: 'Wysokość', value: '260' },
        { label: 'Szerokość', value: '215' },
        { label: 'Głębokość', value: '150' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '7'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__8
  {
    header: ['Wymiary'],
    tablesData: [
      [
        { label: 'Wysokość', value: '350' },
        { label: 'Szerokość', value: '215' },
        { label: 'Głębokość', value: '150' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '6'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  // //__9
  {
    header: ['Wymiary'],
    tablesData: [
      [
        { label: 'Wysokość', value: '400' },
        { label: 'Szerokość', value: '265' },
        { label: 'Głębokość', value: '153' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '1'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  // //__10
  {
    header: ['Wymiary'],
    tablesData: [
      [
        { label: 'Wysokość', value: '305' },
        { label: 'Szerokość', value: '125' },
        { label: 'Głębokość', value: '107' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '18'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__11
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '490' },
        { label: 'Szerokość', value: '125' },
        { label: 'Głębokość', value: '107' },
      ],
      [
        { label: 'Góra', value: '1 x Ø25 / 32' },
        { label: 'Dół', value: '1 x Ø25 / 32' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '12'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__12
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '330' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '150' },
      ],
      [
        { label: 'Góra', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Bok', value: '2 x (2 x Ø40-Ø32 + 2 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '6'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__13
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '230' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø25 - Ø20 + 1 x Ø50 - Ø40' },
        { label: 'Dół', value: '2 x Ø25 - Ø20 + 1 x Ø50 - Ø40' },
        { label: 'Bok', value: '2 x (3 x Ø40 - Ø32 + 2 x Ø25 - Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '6'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  // //__14
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Bok', value: '2 x (3 x Ø40 - Ø32 + 2 x Ø25 - Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '4'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  // //__15
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '685' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        { label: 'Góra', value: '2 x Ø25-Ø20 + 2 x Ø40-Ø32 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø25-Ø20 + 2 x Ø40-Ø32 + 1 x Ø50-Ø40' },
        { label: 'Bok', value: '2 x (3 x Ø25 - Ø20 + 4 x Ø40 - Ø32)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '1'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  // //__16
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '175' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '135' },
      ],
      [
        { label: 'Góra', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40' },
        { label: 'Dół', value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20' },
        { label: 'Bok', value: '2 x (1 x Ø40-Ø32 + 1 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '8'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  // //__17
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '335' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '135' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø25 - Ø20 + 2 x Ø40 - Ø32 + 1 x Ø50 - Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø25 - Ø20 + 2 x Ø40 - Ø32 + 1 x Ø50 - Ø40',
        },
        { label: 'Bok', value: '2 x (2 x Ø40 - Ø32 + 2 x Ø25 - Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '4'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  // //__18
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        { label: 'Bok', value: '2 x (3 x Ø40-Ø32 + 2 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '6'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  // //__19
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        { label: 'Bok', value: '2 x (3 x Ø40-Ø32 + 2 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '4'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  // //__20
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '330' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '135' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        { label: 'Bok', value: '2 x (2 x Ø40-Ø32 + 2 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '4'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__21
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '500' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        { label: 'Bok', value: '2 x (2 x Ø40-Ø32 + 2 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '4'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__22
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '685' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        { label: 'Bok', value: '2 x (3 x Ø25-Ø20 + 4 x Ø40-Ø32)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '1'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__23
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '175' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '135' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        { label: 'Bok', value: '2 x (1 x Ø40-Ø32 + 1 x Ø25-Ø20)' },
      ],
    ],

    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '8'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
  //__24
  {
    header: ['Wymiary', 'Wejścia'],
    tablesData: [
      [
        { label: 'Wysokość', value: '175' },
        { label: 'Szerokość', value: '330' },
        { label: 'Głębokość', value: '155' },
      ],
      [
        {
          label: 'Góra',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20 + 1 x Ø50-Ø40',
        },
        {
          label: 'Dół',
          value: '2 x Ø40-Ø32 + 2 x Ø25-Ø20',
        },
        { label: 'Bok', value: '2 x (1 x Ø40-Ø32 + 1 x Ø25-Ø20)' },
      ],
    ],
    norma: ['Norma', 'EN 62208'],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '13'],
    ],
    description: [...arrOfDescriptions],
    iconHolderData: {
      svgLabel: ['IP40', 'IP65', 'IK08', 'FREE', 'IZO', 'UV'],
      textLabel: [{ label: '650°C', textStyle: textLabelStyle }],
      iconColorBG: iconColorBG,
      iconColorFG: iconColorFG,
      iconSize: iconContainerSize,
    },
  },
];
/*
data for specTable
*/
// const gridTemplate = 'grid gap-[0.125rem] grid-cols-[1fr_1fr] w-full';
// const headerLabelStyle = 'text-[0.625rem]  xxl:text-[0.875rem] text-light';
// const headerCellStyle = 'bg-grey px-1 py-[0.4rem]';
// const bodyLabelStyle =
//   'text-[0.625rem]  xxl:text-[0.875rem] text-dark text-center';
// const bodyCellStyle = ' px-1 py-[0.4rem]';

export {
  obudowyPusteTechSpecData,
  // gridTemplate,
  // headerLabelStyle,
  // headerCellStyle,
  // bodyLabelStyle,
  // bodyCellStyle,
};
