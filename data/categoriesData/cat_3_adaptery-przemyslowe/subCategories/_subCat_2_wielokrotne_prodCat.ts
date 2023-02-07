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
const adapteryPrzemysloweWielokrotne_tablesData = [
  //___1
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
          ['3', '2', '15013', '15006', '15020', '15026'],
          ['4', '2', '15014', '15021', '15007', '15027'],
          ['5', '2', '15015', '15022', '15008', '15028'],
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
          ['3', '4', '15016', '15019', '15023', '15029'],
          ['4', '4', '15017', '15024', '15010', '15030'],
          ['5', '4', '15018', '15025', '15009', '15031'],
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
        bodyType: 1,
        amper: '16',
        rowsData: [
          ['3', '2', '16013', '16002', '16024', '16026'],
          ['4', '2', '16014', '16019', '16003', '16027'],
          ['5', '2', '16015', '16020', '16004', '16028'],
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
          ['3', '4', '16016', '16021', '16025', '16029'],
          ['4', '4', '16017', '16022', '16009', '16030'],
          ['5', '4', '16018', '16023', '16005', '16031'],
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
          ['3', '4', '15032', '15000', '15036', '15039'],
          ['4', '4', '15033', '15037', '15001', '15040'],
        ],
      },
    ],
  },
  //__4
  {
    tablesData: [
      {
        headerTopData: headerTopData_1,
        headerBottomData: headerBottomData_1,
        headerType: 1,
        bodyType: 1,
        amper: '16',
        rowsData: [
          ['3', '4', '16032', '16000', '16036', '16039'],
          ['4', '4', '16033', '16037', '16000', '16040'],
        ],
      },
    ],
  },
  //___5_____inne
  {
    row1: '',
    // tablesData: [
    //   {
    //     headerTopData: headerTopData_1,
    //     headerBottomData: headerBottomData_1,
    //     headerType: 1,
    //     bodyType: 1,
    //     amper: '63',
    //     rowsData: [
    //       ['3', '10', '24180', '24280', '24380', '24480'],
    //       ['4', '10', '24181', '24281', '24375', '24481'],
    //       ['5', '10', '24182', '24282', '24374', '24482'],
    //     ],
    //   },
    // ],
  },
  //___6___inne
  {
    tablesData: [
      {
        headerTopData: headerTopData_1,
        headerBottomData: headerBottomData_1,
        headerType: 1,
        bodyType: 1,
        amper: '125',
        rowsData: [
          ['3', '2', '24174', '24274', '24381', '24483'],
          ['4', '2', '24184', '24284', '24376', '24484'],
          ['5', '2', '24185', '24285', '24377', '24485'],
        ],
      },
    ],
  },
];

export { adapteryPrzemysloweWielokrotne_tablesData };
