/**Data for data**/
const headerTopData_1 = [
  ['3P = 2P + T', '4P = 3P + T', '5P = 3P + T + N'],
  ['110V', '50/60Hz'],
  ['230V', '50/60Hz'],
  ['400V', '50/60Hz'],
  ['500V', '50/60Hz'],
];
const headerBottomData_1 = [
  ['Ampery', 'Bieguny', 'Opakowanie'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 4h 4h 4h'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 6h 9h 9h'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 9h 6h 6h'],
  ['Bieguny: 3P 4P 5P', 'Godz.P: 7h 7h 7h'],
];

/*
Data for Components
*/
const adapteryPrzemysloweWielokrotneKabel_tablesData = [
  //___1
  {
    tablesData: [
      //___for 16A
      {
        headerTopData: headerTopData_1,
        headerBottomData: headerBottomData_1,
        headerType: 1,
        bodyType: 7,
        amper: '16',
        rowsData: [
          ['3', '2', '31002', '31004', '31063', '31064'],
          ['4', '2', '31003', '31005', '31006', '31007'],
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
        headerType: 1,
        bodyType: 7,
        amper: '16',
        rowsData: [
          ['3', '2', '31008', '31010', '16069', '16070'],
          ['4', '2', '31009', '31011', '31012', '31013'],
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
        headerType: 1,
        bodyType: 1,
        amper: '16',
        rowsData: [
          ['3', '1', '31044', '31034', '31054', '31056'],
          ['4', '1', '31045', '31035', '31040', '31050'],
          ['5', '1', '31046', '31036', '31041', '31051'],
        ],
      },
      //___for 32A
      {
        headerTopData: [''],
        headerBottomData: [''],
        headerType: 0,
        bodyType: 1,
        amper: '32',
        rowsData: [
          ['3', '1', '31047', '31037', '31055', '31057'],
          ['4', '1', '31048', '31038', '31042', '31052'],
          ['5', '1', '31049', '31039', '31043', '31053'],
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
        headerType: 1,
        bodyType: 1,
        amper: '16',
        rowsData: [
          ['3', '1', '31024', '31014', '31058', '31060'],
          ['4', '1', '31025', '31015', '31020', '31030'],
          ['5', '1', '31026', '31016', '31021', '31031'],
        ],
      },
      //___for 32A
      {
        headerTopData: [''],
        headerBottomData: [''],
        headerType: 0,
        bodyType: 1,
        amper: '32',
        rowsData: [
          ['3', '1', '31027', '31017', '31059', '31062'],
          ['4', '1', '31028', '31018', '31022', '31032'],
          ['5', '1', '31029', '31019', '31023', '31033'],
        ],
      },
    ],
  },
  //__5
  {
    tablesData: [
      {
        headerTopData: headerTopData_1,
        headerBottomData: headerBottomData_1,
        headerType: 1,
        bodyType: 8,
        amper: '16',
        rowsData: [['3', '1', '--', '31071', '--', '--']],
      },
    ],
  },
];

const adapteryPrzemysloweWielokrotneKabel_feat_data = [
  [
    ['Przewód', '2 m'],
    ['Zabezpieczenie wtyczki', 'IP44'],
    ['Gniazda', '2 gniazda przemysłowe'],
  ],
  [
    ['Przewód', '2 m'],
    ['Zabezpieczenie wtyczki', 'IP67'],
    ['Gniazda', '2 gniazda przemysłowe'],
  ],
  [
    ['Przewód', '2 m'],
    ['Zabezpieczenie wtyczki', 'IP44'],
    ['Gniazda', '3 gniazda przemysłowe'],
  ],
  [
    ['Przewód', '2 m'],
    ['Zabezpieczenie wtyczki', 'IP67'],
    ['Gniazda', '3 gniazda przemysłowe'],
  ],
  [
    ['Przewód', '2 m'],
    ['Zabezpieczenie wtyczki', 'IP54'],
    ['Gniazda', '4 gniazda przemysłowe'],
  ],
];

export {
  adapteryPrzemysloweWielokrotneKabel_tablesData,
  adapteryPrzemysloweWielokrotneKabel_feat_data,
};
