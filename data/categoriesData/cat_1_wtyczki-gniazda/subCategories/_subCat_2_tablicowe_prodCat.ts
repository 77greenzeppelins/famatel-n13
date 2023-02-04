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
const wtyczkiGniazdaTablicowe_tablesData = [
  // {
  //   tablesData: [
  //     //___for 16A
  //     {
  //       headerTopData: headerTopData_1,
  //       headerBottomData: headerBottomData_1,
  //       headerType: 1,
  //       bodyType: 1,
  //       amper: '16',
  //       rowsData: [
  //         ['3', '10', '13100', '13200', '13304', '13404'],
  //         ['4', '10', '13101', '13201', '13300', '13400'],
  //         ['5', '8', '13104', '13202', '13301', '13401'],
  //       ],
  //     },
  //     //___for 32A
  //     {
  //       headerTopData: [''],
  //       headerBottomData: [''],
  //       headerType: 0,
  //       bodyType: 1,
  //       amper: '32',
  //       rowsData: [
  //         ['3', '5', '13102', '13203', '13305', '13405'],
  //         ['4', '5', '13103', '13204', '13302', '13402'],
  //         ['5', '4', '13105', '13206', '13303', '13403'],
  //       ],
  //     },
  //   ],
  // },
  //______________
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
          ['3', '10', '13531', '13631', '13374', '13837'],
          ['4', '10', '13532', '13632', '13370', '13831'],
          ['5', '8', '13537', '13636', '13371', '13832'],
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
          ['3', '5', '13533', '13633', '13375', '13838'],
          ['4', '5', '13534', '13366', '13372', '13833'],
          ['5', '4', '13538', '13637', '13373', '13834'],
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
          ['3', '10', '13535', '13634', '13733', '13839'],
          ['4', '8', '13536', '13635', '13731', '13835'],
        ],
      },
    ],
  },
  //__3
  {
    tablesData: [
      //___for 63A
      {
        headerTopData: headerTopData_1,
        headerBottomData: headerBottomData_1,
        headerType: 1,
        bodyType: 1,
        amper: '63',
        rowsData: [
          ['3', '5', '13546', '13638', '13376', '13840'],
          ['4', '5', '13539', '13639', '13377', '13841'],
          ['5', '5', '13540', '13640', '13378', '13842'],
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
          ['3', '10', '23170', '23270', '23374', '23474'],
          ['4', '10', '23171', '23271', '23370', '23470'],
          ['5', '10', '23174', '23272', '23371', '23471'],
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
          ['3', '5', '23172', '23273', '23375', '23475'],
          ['4', '4', '23173', '23274', '23372', '23472'],
          ['5', '5', '23175', '23275', '23373', '23473'],
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
        bodyType: 1,
        amper: '16',
        rowsData: [
          ['3', '8', '24170', '24270', '24378', '24474'],
          ['4', '8', '24171', '24271', '24370', '24470'],
          ['5', '8', '24174', '24272', '24371', '24471'],
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
          ['3', '5', '24172', '24273', '24379', '24475'],
          ['4', '4', '24173', '24274', '24372', '24472'],
          ['5', '5', '24175', '24275', '24373', '24473'],
        ],
      },
    ],
  },
  //___6__for 63A / s.39
  {
    tablesData: [
      {
        headerTopData: headerTopData_1,
        headerBottomData: headerBottomData_1,
        headerType: 1,
        bodyType: 1,
        amper: '63',
        rowsData: [
          ['3', '10', '24180', '24280', '24380', '24480'],
          ['4', '10', '24181', '24281', '24375', '24481'],
          ['5', '10', '24182', '24282', '24374', '24482'],
        ],
      },
    ],
  },
  //___7__for 125A / s.39
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

  //__8 / s.41
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
          ['3', '10', '23130', '23230', '23334', '23434'],
          ['4', '10', '23131', '23231', '23330', '23430'],
          ['5', '9', '23134', '23232', '23331', '23431'],
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
          ['3', '5', '23132', '23233', '23335', '23435'],
          ['4', '5', '23133', '23234', '23332', '23432'],
          ['5', '5', '23135', '23235', '23333', '23433'],
        ],
      },
    ],
  },
  // __9
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
          ['3', '10', '24130', '24230', '24340', '24434'],
          ['3', '8', '24131', '24231', '24330', '24430'],
          ['5', '8', '24134', '24232', '24331', '24431'],
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
          ['3', '5', '24132', '24233', '24341', '24441'],
          ['4', '5', '24133', '24234', '24332', '24432'],
          ['5', '5', '24135', '24240', '24333', '24433'],
        ],
      },
    ],
  },
  //__10
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
          ['3', '10', '24100', '24200', '24310', '24410'],
          ['4', '6', '24101', '24201', '24300', '24400'],
          ['5', '4', '24107', '24202', '24301', '24401'],
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
          ['3', '3', '24102', '24203', '24311', '24411'],
          ['4', '3', '24103', '24204', '24302', '24402'],
          ['5', '3', '24112', '24210', '24303', '24403'],
        ],
      },
    ],
  },

  //___11__for 63A / s.41
  {
    tablesData: [
      {
        headerTopData: headerTopData_1,
        headerBottomData: headerBottomData_1,
        headerType: 1,
        bodyType: 1,
        amper: '63',
        rowsData: [
          ['3', '10', '24137', '24235', '24336', '24442'],
          ['4', '10', '24138', '24236', '24334', '24437'],
          ['5', '10', '24141', '24238', '24335', '24438'],
        ],
      },
    ],
  },
  //___12__for 125A / s.41
  {
    tablesData: [
      {
        headerTopData: headerTopData_1,
        headerBottomData: headerBottomData_1,
        headerType: 1,
        bodyType: 1,
        amper: '125',
        rowsData: [
          ['3', '10', '24136', '24237', '24342', '24443'],
          ['4', '10', '24140', '24239', '24337', '24436'],
          ['5', '10', '24142', '24277', '24338', '24440'],
        ],
      },
    ],
  },
];

export { wtyczkiGniazdaTablicowe_tablesData };
