const ladowarkiSamochodowe_feat_1_data = [
  ['Charger mode', 'Mode 3'],
  ['Connector type', 'Type 2 acc. to IEC 62196-2'],
  ['Rated voltage', '230 V / 400 V AC (50Hz)'],
  ['Prąd znamionowy', '16A / 32A'],
  ['Rated power', '3,7kW I-pase, 7,2kW I-pase, 11kW III-pase, 22kW III-phase'],
  ['Temperatura robocza', '-25°C / 40°C'],
  ['Stopień ochrony', 'IP54'],
  ['Odporność mechaniczna', 'IK08'],
  ['Wymiary (sz / w / gł)', '405 × 260 × 120 mm'],
  ['Test rozżarzonego drutu', '650°C '],
  ['Kolor', 'Biały'],
];
const ladowarkiSamochodowe_norma_data = [
  [
    'Norma',
    'IEC 61851-1, IEC 61851-22, IEC 62196-1, IE 6C 2196- IE2, C 61439-7',
  ],
];
const ladowarkiSamochodowe_material_data = [['Obudowa', 'Technopolimer']];

const ladowarkiSamochodowe_feat_2_data = {
  header: ['Technical features', 'e - 3wallbox Basic', 'e - 3wallbox Advance'],
  tableBody: [
    ['Regulatory DC Leakage detector 6mA', 'TAK', 'TAK'],
    ['Overheating temperature sensor', 'TAK', 'TAK'],
    ['Current limiter adjustable', 'TAK', 'TAK'],
    ['Locking mechanism', 'TAK', 'TAK'],
    [
      'Continuous monitoring of the continuity of the protective earthing conductor',
      'TAK',
      'TAK',
    ],
    [
      'Identification of the rated current of the external cord-set',
      'TAK',
      'TAK',
    ],
    ['Monitoring of switching device', 'NIE', 'TAK'],
    ['RCCB Type A', 'NIE', 'TAK'],
  ],
};

const catalogTable_1_data = {
  header: ['Model', 'Power (kW) Phases', 'Outlet', 'Extra schuko option'],
  tableBody: [
    ['96000', '3,7 kW (1 P -16A)'],
    ['96100', '7,2 kW (1 P -32A)'],
    ['96200', '11 kW (3 P -16A)'],
    ['96300', '22 kW (3 P -32A)'],
    ['96020', '3,7 kW (1 P -16A)'],
    ['96120', '7,2 kW (1 P -32A)'],
    ['96220', '11 kW (3 P -16A)'],
    ['96320', '22 kW (3 P -32A)'],
  ],
  outlet1: 'Socket-outlet Type2 without shutters',
  outlet2: '5m cable + connector Type 2',
};

const catalogTable_2_data = {
  header: ['Model', 'Power (kW) Phases', 'Extra schuko option', 'Outlet'],
  tableBody: [
    ['97010', '3,7 kW (1 P -16A)', 'nie'],
    ['97110', '7,2 kW (1 P -32A)', 'nie'],
    ['97210', '11 kW (3 P -16A)', 'nie'],
    ['97310', '22 kW (3 P -32A)', 'nie'],
    ['97011', '3,7 kW (1 P -16A)', 'tak'],
    ['97111', '7,2 kW (1 P -32A)', 'tak'],
    ['97211', '11 kW (3 P -16A)', 'tak'],
    ['97311', '22 kW (3 P -32A)', 'tak'],
    //___
    ['97020', '3,7 kW (1 P -16A)', 'nie'],
    ['97120', '7,2 kW (1 P -32A)', 'nie'],
    ['97220', '11 kW (3 P -16A)', 'nie'],
    ['97320', '22 kW (3 P -32A)', 'nie'],
    ['97021', '3,7 kW (1 P -16A)', 'tak'],
    ['97121', '7,2 kW (1 P -32A)', 'tak'],
    ['97221', '11 kW (3 P -16A)', 'tak'],
    ['97321', '22 kW (3 P -32A)', 'tak'],
  ],
  outlet1: 'Socket-outlet Type2 without shutters',
  outlet2: '5m cable + connector Type 2',
};

export {
  //__underlined tables
  ladowarkiSamochodowe_feat_1_data,
  ladowarkiSamochodowe_norma_data,
  ladowarkiSamochodowe_material_data,
  //___
  ladowarkiSamochodowe_feat_2_data,
  //___
  catalogTable_1_data,
  catalogTable_2_data,
};
