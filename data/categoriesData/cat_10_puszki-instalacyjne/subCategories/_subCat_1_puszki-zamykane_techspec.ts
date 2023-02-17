import { corpoColors } from '../../../_data';
/*
Basic Data
*/
const arrOfDescriptions1 = [
  'Pokrywa i podstawa z PP/PS',
  'Zewnętrzny system mocujący',
  'Osłabienia do wprowadzania przewodów',
];
const arrOfDescriptions2 = [
  'Pokrywa i podstawa z ABS',
  'Pokrywa zatrzaskowa',
  'Dławnice do bezpośredniego wprowadzania przewodów',
];

const arrOfDescriptions3a = [
  'Pokrywa z PC / podstawa z ABS',
  'Pokrywa na zawiasach',
  'Śruby zamykające na 1/4 obrotu',
];
const arrOfDescriptions3b = [
  'Pokrywa i podstawa z ABS / Pokrywa z PC i podstawa z ABS',
  'Pokrywa na zawiasach',
  'Śruby zamykające na 1/4 obrotu',
];
const arrOfDescriptions4 = [
  'Pokrywa i podstawa z ABS',
  'Pokrywa na zawiasach',
  'Osłabienia do wprowadzania przewodów',
  'Możliwość łączenia',
];

const arrOfDescriptions5 = [
  'Pokrywa i podstawa z ABS',
  'Pokrywa na zawiasach',
  'Śruby zamykające na 1/4 obrotu',
];
const arrOfDescriptions6 = [
  'Okablowane gniazdo 1-faz. 16A-250V~',
  ...arrOfDescriptions5,
];

/**...**/
const puszkiZamykane_tech_data: {
  wymiary: {
    tableHeader: string[];
    tableBody: string[][];
  };
  entry?: {
    tableHeader: string[];
    tableBody: string[][];
  };
  entry2?: {
    tableHeader: string[];
    tableBody: string[][];
  };
  extraStaff?: {
    tableHeader: string[];
    tableBody: string[][];
  };
  norma?: string[][];
  packageDetails?: string[][];
  description: string[];
  iconHolderData?: string[];
}[] = [
  //__1__s.304
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '43'],
        ['Szerokość', '90'],
        ['Głębokość', '39'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '3 × Ø 8-19'],
        ['Dół', '3 × Ø 8-19'],
        ['Bok', '2 × (2 × Ø 4-16)'],
      ],
    },

    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '8'],
      ['Opakowanie zbiorcze', '456'],
    ],
    description: [...arrOfDescriptions1],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__2
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '75'],
        ['Szerokość', '75'],
        ['Głębokość', '39'],
      ],
    },
    entry2: {
      tableHeader: ['Wejścia', '3056', '3059'],
      tableBody: [
        ['Góra', '---', '---'],
        ['Dół', '1 × Ø 16/20', '1 × Ø 20/25'],
        ['Bok', '2 × (1 × Ø 16/20)', '2 × (1 × Ø 20/25)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '8'],
      ['Opakowanie zbiorcze', '280'],
    ],
    description: [...arrOfDescriptions1],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__3
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '85'],
        ['Szerokość', '85'],
        ['Głębokość', '39'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '3 × Ø 8-19'],
        ['Dół', '3 × Ø 8-19'],
        ['Bok', '2 × (2 × Ø 8-19)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '8'],
      ['Opakowanie zbiorcze', '244'],
    ],
    description: [...arrOfDescriptions1],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__4
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '75'],
        ['Szerokość', '75'],
        ['Głębokość', '39'],
      ],
    },
    entry2: {
      tableHeader: ['Wejścia', '3056', '3059'],
      tableBody: [
        ['Góra', '--', '--'],
        ['Dół', '1 × Ø 16/20', '1 × Ø 20/25'],
        ['Bok', '2 × (1 × Ø 16/20)', '2 × (1 × Ø 20/25)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '90'],
    ],
    description: [
      'Pokrywa i podstawa z PP/PS',
      'Zewnętrzny system mocujący',
      'Wejście do bezpośredniego montażu rur metrycznych',
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__5__s.306
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '45'],
        ['Szerokość', 'Ø 60'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [['Bok', '4 × Ø 20']],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '186'],
    ],
    description: [...arrOfDescriptions2],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__6__s.306
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '45'],
        ['Szerokość', 'Ø 70'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [['Bok', '4 × Ø 20']],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '144'],
    ],
    description: [...arrOfDescriptions2],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__7__s.306
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '65'],
        ['Szerokość', '65'],
        ['Głębokość', '45'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '1 × Ø 20'],
        ['Dół', '1 × Ø 20'],
        ['Bok', '2 × (1 × Ø 20)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '144'],
    ],
    description: [...arrOfDescriptions2],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__8__s.306
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '80'],
        ['Szerokość', '80'],
        ['Głębokość', '45'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '1 × Ø 20'],
        ['Dół', '2 × Ø 20'],
        ['Bok', '2 × (2 × Ø 20)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '90'],
    ],
    description: [...arrOfDescriptions2],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },

  //__9__s.308
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '80'],
        ['Szerokość', '80'],
        ['Głębokość', '36'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '2 × Ø 20'],
        ['Dół', '1 × Ø 20'],
        ['Bok', '2 × (2 × Ø 20)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '1'],
    ],
    description: [
      'Puszka szczelna',
      'Żel izolacyjny',
      '2 dławnice skręcane M20',
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__10__s.308
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '100'],
        ['Szerokość', '100'],
        ['Głębokość', '45'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '2 × Ø 20'],
        ['Dół', '1 × Ø 20'],
        ['Bok', '2 × (2 × Ø 20)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '150'],
    ],
    description: [...arrOfDescriptions2],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__11__s.308
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '103'],
        ['Szerokość', '103'],
        ['Głębokość', '55'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '2 × Ø 25'],
        ['Dół', '1 × Ø 25'],
        ['Bok', '2 × (2 × Ø 25)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '72'],
    ],
    description: [
      arrOfDescriptions2[0],
      arrOfDescriptions2[2],
      'Pokrywa na zawiasach',
      'Śruby zamykające na 1/4 obrotu',
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__12__s.308
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '110'],
        ['Szerokość', '152'],
        ['Głębokość', '63'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '3 × Ø 25'],
        ['Dół', '3 × Ø 25'],
        ['Bok', '2 × (1 × Ø 25 + 1 × Ø 32)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '4'],
      ['Opakowanie zbiorcze', '72'],
    ],
    description: [
      arrOfDescriptions2[0],
      arrOfDescriptions2[2],
      'Pokrywa na zawiasach',
      'Śruby zamykające na 1/4 obrotu',
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },

  //__13__s.310
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '135'],
        ['Szerokość', '161'],
        ['Głębokość', '83'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '3 × Ø 32'],
        ['Dół', '3 × Ø 32'],
        ['Bok', '2 × (1 × Ø 32 + 1 × Ø 40)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '42'],
    ],
    description: [
      arrOfDescriptions2[0],
      arrOfDescriptions2[2],
      'Pokrywa na zawiasach',
      'Śruby zamykające na 1/4 obrotu',
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__14__s.310
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '175'],
        ['Szerokość', '225'],
        ['Głębokość', '85'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '2 × Ø 40 + 1 × Ø 32'],
        ['Dół', '2 × Ø 40 + 1 × Ø 32'],
        ['Bok', '2 × (1 × Ø 32 + 1 × Ø 40)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [
      arrOfDescriptions2[0],
      arrOfDescriptions2[2],
      'Pokrywa na zawiasach',
      'Śruby zamykające na 1/4 obrotu',
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__15__s.310
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '110'],
        ['Szerokość', '152'],
        ['Głębokość', '63'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '2 × Ø 50 + 1 × Ø 40'],
        ['Dół', '2 × Ø 50 + 1 × Ø 40'],
        ['Bok', '2 × (2 × Ø 50 + 1 × Ø 40)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [
      arrOfDescriptions2[0],
      arrOfDescriptions2[2],
      'Pokrywa na zawiasach',
      'Śruby zamykające na 1/4 obrotu',
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__16__s.312
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '80'],
        ['Szerokość', '80'],
        ['Głębokość', '36'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [arrOfDescriptions2[0], arrOfDescriptions2[2]],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__17__s.312
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '100'],
        ['Szerokość', '100'],
        ['Głębokość', '45'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [arrOfDescriptions2[0], arrOfDescriptions2[2]],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__18__s.312
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '103'],
        ['Szerokość', '103'],
        ['Głębokość', '55'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [
      arrOfDescriptions2[0],
      'Pokrywa na zawiasach',
      'Śruby zamykające na 1/4 obrotu',
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__19__s.312
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '110'],
        ['Szerokość', '150'],
        ['Głębokość', '63'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [...arrOfDescriptions3a],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__20__s.312
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '110'],
        ['Szerokość', '150'],
        ['Głębokość', '63'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [...arrOfDescriptions3b],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__21__s.314
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '135'],
        ['Szerokość', '160'],
        ['Głębokość', '83'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '48'],
    ],
    description: [...arrOfDescriptions3a],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__22__s.314
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '135'],
        ['Szerokość', '160'],
        ['Głębokość', '83'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '48'],
    ],
    description: [...arrOfDescriptions3b],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__23__s.314
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '175'],
        ['Szerokość', '225'],
        ['Głębokość', '85'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [...arrOfDescriptions3a],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__24__s.314
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '175'],
        ['Szerokość', '225'],
        ['Głębokość', '85'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [...arrOfDescriptions3b],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__25__s.314
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '240'],
        ['Szerokość', '310'],
        ['Głębokość', '125'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [...arrOfDescriptions3a],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__26__s.314
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '240'],
        ['Szerokość', '310'],
        ['Głębokość', '125'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [...arrOfDescriptions3b],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__27__s.314
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '95'],
        ['Szerokość', 'Ø 70'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [['Bok', '4 × Ø 20']],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [...arrOfDescriptions2, 'Ceramiczna oprawka E-27'],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__28__s.316
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '175'],
        ['Szerokość', '330'],
        ['Głębokość', '135'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '2 × Ø 32-40 + 2 × Ø 20-25 + 1 × Ø 40-50'],
        ['Dół', '2 × Ø 32-40 + 2 × Ø 20-25'],
        ['Bok', '2 (1 × Ø 32-40 + 1 × Ø 20-25)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '144'],
    ],
    description: [...arrOfDescriptions4],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__29__s.316
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '330'],
        ['Szerokość', '330'],
        ['Głębokość', '135'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '2 × Ø 32-40 + 2 × Ø 20-25 + 1 × Ø 40-50'],
        ['Dół', '2 × Ø 32-40 + 2 × Ø 20-25 + 1 × Ø 40-50'],
        ['Bok', '2 (2 × Ø 32-40 + 2 × Ø 20-25)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '6'],
      ['Opakowanie zbiorcze', '144'],
    ],
    description: [...arrOfDescriptions4],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__30__s.318
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '500'],
        ['Szerokość', '225'],
        ['Głębokość', '135'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '2 × Ø 20-25  + 1 × Ø 32-40'],
        ['Dół', '2 × Ø 20-25  + 1 × Ø 32-40'],
        ['Bok', '2 ( 3 × Ø 32-40 + 2 × Ø 20-25)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '6'],
    ],
    description: [...arrOfDescriptions4],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__31__s.318
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '500'],
        ['Szerokość', '330'],
        ['Głębokość', '135'],
      ],
    },
    entry: {
      tableHeader: ['Wejścia'],
      tableBody: [
        ['Góra', '2 × Ø 20-25  + 2 × Ø 32-40 + 1 × Ø 40-50'],
        ['Dół', '2 × Ø 20-25  + 2 × Ø 32-40 + 1 × Ø 40-50'],
        ['Bok', '2 ( 3 × Ø 32-40 + 2 × Ø 20-25)'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '3'],
    ],
    description: [...arrOfDescriptions4],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__32__s.320
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '110'],
        ['Szerokość', '150'],
        ['Głębokość', '63'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '4'],
      ['Opakowanie zbiorcze', '32'],
    ],
    description: ['Szyna łączeniowa neutralna 100A', ...arrOfDescriptions5],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__33__s.320
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '135'],
        ['Szerokość', '160'],
        ['Głębokość', '83'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '2'],
      ['Opakowanie zbiorcze', '48'],
    ],
    description: [
      'Podstawa bezpiecznikowa 1P + zacisk łączenikowy 16 mm²',
      ...arrOfDescriptions5,
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__34__s.320
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '135'],
        ['Szerokość', '160'],
        ['Głębokość', '83'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '2'],
      ['Opakowanie zbiorcze', '48'],
    ],
    description: [
      'Podstawa bezpiecznikowa 2P + zacisk łączenik4owy 16 mm²',
      ...arrOfDescriptions5,
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__35__s.320
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '135'],
        ['Szerokość', '160'],
        ['Głębokość', '83'],
      ],
    },
    // extraStaff: {
    //   tableHeader: ['Dodatkowe wyposażenie'],
    //   tableBody: [['Podstawa bezpiecznikowa 3P + zacisk łączenikowy 16 mm²']],
    // },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '2'],
      ['Opakowanie zbiorcze', '48'],
    ],
    description: [
      'Podstawa bezpiecznikowa 3P + zacisk łączenikowy 16 mm²',
      ...arrOfDescriptions5,
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },

  //__36__s.322
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '103'],
        ['Szerokość', '103'],
        ['Głębokość', '55'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '36'],
    ],
    description: [...arrOfDescriptions6],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__37__s.322
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '110'],
        ['Szerokość', '150'],
        ['Głębokość', '83'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '28'],
    ],
    description: [...arrOfDescriptions6],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__38__s.322
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '135'],
        ['Szerokość', '160'],
        ['Głębokość', '83'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '18'],
    ],
    description: [...arrOfDescriptions6],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__39__s.322
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '175'],
        ['Szerokość', '225'],
        ['Głębokość', '65'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [...arrOfDescriptions6],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__40__s.324
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '110'],
        ['Szerokość', '150'],
        ['Głębokość', '63'],
      ],
    },
    extraStaff: {
      tableHeader: ['Dodatkowe wyposażenie'],
      tableBody: [
        ['Gniazda', '1 × CEE 16A 3P+N+T 400V~ + 1 × GS 16A 2P+T 230V~'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '18'],
    ],
    description: [...arrOfDescriptions5],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //__41__s.324
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '135'],
        ['Szerokość', '160'],
        ['Głębokość', '83'],
      ],
    },
    extraStaff: {
      tableHeader: ['Dodatkowe wyposażenie'],
      tableBody: [
        ['Gniazda', '2 × CEE 16A 3P+N+T 400V~ + 1 × GS 16A 2P+T 230V~'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [...arrOfDescriptions5],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  //___akcesoria
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '135'],
        ['Szerokość', '160'],
        ['Głębokość', '83'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [
      'Wyposażenie: 2 × CEE 16A 3P+N+T 400V~ + 1 × GS 16A 2P+T 230V~',
      ...arrOfDescriptions5,
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '135'],
        ['Szerokość', '160'],
        ['Głębokość', '83'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [
      'Wyposażenie: 2 × CEE 16A 3P+N+T 400V~ + 1 × GS 16A 2P+T 230V~',
      ...arrOfDescriptions5,
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
  {
    wymiary: {
      tableHeader: ['Wymiary'],
      tableBody: [
        ['Wysokość', '135'],
        ['Szerokość', '160'],
        ['Głębokość', '83'],
      ],
    },
    norma: [['Norma', 'EN 60670-22']],
    packageDetails: [
      ['Opakowanie podstawowe', '1'],
      ['Opakowanie zbiorcze', '10'],
    ],
    description: [
      'Wyposażenie: 2 × CEE 16A 3P+N+T 400V~ + 1 × GS 16A 2P+T 230V~',
      ...arrOfDescriptions5,
    ],
    iconHolderData: ['IP65', 'IK08', 'FREE', 'IZO', 'UV', 'DRUT650'],
  },
];

export { puszkiZamykane_tech_data };
