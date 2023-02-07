/**Data for data**/
const headerTopData_1 = [
  ['3P = 2P + T', '4P = 3P + T', '5P = 3P + T + N'],
  ['110V', '50/60Hz'],
  ['230V', '50/60Hz'],
  ['400V', '50/60Hz'],
];
const headerBottomData_1 = [
  ['Ampery', 'Bieguny', 'Opakowanie'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 4h 4h 4h'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 6h 9h 9h'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 9h 6h 6h'],
];

/*
Data for Components
*/
const gniazdaBlokadaTablicowe_tablesData = [
  {
    tablesData: [
      //___for 16A
      {
        headerTopData: headerTopData_1,
        headerBottomData: headerBottomData_1,
        headerType: 6,
        bodyType: 6,
        amper: '16',
        rowsData: [
          ['3', '1', '25031', '25033', '25023'],
          ['4', '1', '25032', '25034', '25036'],
          ['5', '1', '25019', '25035', '25037'],
        ],
      },
      //___for 32A
      {
        headerTopData: [''],
        headerBottomData: [''],
        headerType: 0,
        bodyType: 6,
        amper: '32',
        rowsData: [
          ['3', '1', '25038', '25040', '25024'],
          ['4', '1', '25039', '25041', '25043'],
          ['5', '1', '25020', '25042', '25044'],
        ],
      },
    ],
  },
  //__2
  {
    tablesData: [
      //___for 16A
      {
        headerTopData: headerTopData_1,
        headerBottomData: headerBottomData_1,
        headerType: 6,
        bodyType: 6,
        amper: '16',
        rowsData: [
          ['3', '1', '25045', '25000', '25075'],
          ['4', '1', '25046', '25047', '25001'],
          ['5', '1', '25021', '25048', '25002'],
        ],
      },
      //___for 32A
      {
        headerTopData: [''],
        headerBottomData: [''],
        headerType: 0,
        bodyType: 6,
        amper: '32',
        rowsData: [
          ['3', '1', '25049', '25003', '25076'],
          ['4', '1', '25050', '25051', '25004'],
          ['5', '1', '25022', '25052', '25005'],
        ],
      },
    ],
  },
  //__3
  {
    tablesData: [
      //___for 16A
      {
        headerTopData: headerTopData_1,
        headerBottomData: headerBottomData_1,
        headerType: 6,
        bodyType: 6,
        amper: '16',
        rowsData: [
          ['3', '1', '25054', '25056', '25079'],
          ['4', '1', '25055', '25057', '25059'],
          ['5', '1', '25085', '25058', '25060'],
        ],
      },
      //___for 32A
      {
        headerTopData: [''],
        headerBottomData: [''],
        headerType: 0,
        bodyType: 6,
        amper: '32',
        rowsData: [
          ['3', '1', '25137', '25063', '25080'],
          ['4', '1', '25061', '25064', '25066'],
          ['5', '1', '25086', '25065', '25067'],
        ],
      },
    ],
  },
  //__4
  {
    tablesData: [
      //___for 16A
      {
        headerTopData: headerTopData_1,
        headerBottomData: headerBottomData_1,
        headerType: 6,
        bodyType: 6,
        amper: '16',
        rowsData: [
          ['3', '1', '25138', '25008', '25081'],
          ['4', '1', '25139', '25068', '25009'],
          ['5', '1', '25077', '25069', '25010'],
        ],
      },
      //___for 32A
      {
        headerTopData: [''],
        headerBottomData: [''],
        headerType: 0,
        bodyType: 6,
        amper: '32',
        rowsData: [
          ['3', '1', '25070', '25011', '25082'],
          ['4', '1', '25071', '25072', '25012'],
          ['5', '1', '25078', '25073', '25013'],
        ],
      },
    ],
  },
];

export { gniazdaBlokadaTablicowe_tablesData };
