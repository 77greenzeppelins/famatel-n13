const gniazdaPodwieszane_feat_1_data = [
  ['Napięcie znamionowe izolacji', '500 V'],
  ['Prąd znamionowy', '16A - 32A - 63A - 125A'],
  ['Stopień ochrony', 'IP65'],
  ['Odporność mechaniczna', 'IK08'],
  ['Max. temp. pracy', '70°C'],
  ['Temperatura robocza', '-25°C / 40°C'],
  ['Kompatybilność kabli', 'M20 / M25 / M32'],
];
const gniazdaPodwieszane_norma_data = [['Norma', 'IEC 61439-3']];
const gniazdaPodwieszane_material_data = [['Obudowa', 'Technopolimer']];

const catalogTable_1_data = {
  header: [
    'Model',
    'Dławnica kablowa',
    'Zalecany kabel',
    'A',
    'U supply',
    'Schuko',
    'CEE 16A 3P 230V',
    'CEE 16A 5P 400V',
    'CEE 32A 5P 400V',
    'IP',
  ],
  tableBody: [
    ['28000', 'M20', '3G 2.5', '', '', '', '', '', '', 'IP65'],
    ['28001', 'M20', '3G 2.5', '16A', '230', '5', '', '', '', 'IP65'],
    ['28002', 'M20', '3G 2.5', '16A', '230', '5', '', '', '', 'IP65'],
    ['28003', 'M25', '5G 2.5', '16A', '400', '4', '', '1', '', 'IP65'],
    ['28004', 'M32', '5G 6', '32A', '400', '2', '', '', '1', 'IP65'],
    ['28005', 'M25', '5G 2.5', '16A', '400', '', '', '3', '', 'IP65'],
    ['28006', 'M25', '5G 2.5', '16A', '400', '2', '2', '', '', 'IP65'],
    ['28007', 'M25', '5G 2.5', '16A', '400', '2', '', '2', '', 'IP65'],
    ['28008', 'M25', '5G 2.5', '16A', '400', '', '2', '2', '', 'IP65'],
  ],
};

const catalogTable_2_data = {
  header: [
    'Model',
    'Dławnica kablowa',
    'Zalecany kabel',
    'A',
    'U supply',
    'Schuko',
    'CEE 16A 3P 230V',
    'CEE 16A 5P 400V',
    'CEE 32A 5P 400V',
    'IP',
  ],
  tableBody: [
    ['27001', 'M20', '3G 2.5', '16A', '230', '5', '', '', '', 'IP65'],
    ['27002', 'M20', '3G 2.5', '16A', '230', '4', '1', '', '', 'IP65'],
    ['27003', 'M25', '5G 2.5', '16A', '400', '4', '', '1', '', 'IP65'],
    ['27004', 'M32', '5G 6', '32A', '400', '2', '', '', '1', 'IP65'],
    ['27005', 'M25', '5G 2.5', '16A', '400', '', '', '3', '', 'IP65'],
    ['27006', 'M25', '5G 2.5', '16A', '400', '2', '2', '', '', 'IP65'],
    ['27007', 'M25', '5G 2.5', '16A', '400', '2', '', '2', '', 'IP65'],
    ['27008', 'M25', '5G 2.5', '16A', '400', '', '2', '2', '', 'IP65'],
  ],
};

export {
  //__underlined tables
  gniazdaPodwieszane_feat_1_data,
  gniazdaPodwieszane_norma_data,
  gniazdaPodwieszane_material_data,
  //___
  catalogTable_1_data,
  catalogTable_2_data,
};
