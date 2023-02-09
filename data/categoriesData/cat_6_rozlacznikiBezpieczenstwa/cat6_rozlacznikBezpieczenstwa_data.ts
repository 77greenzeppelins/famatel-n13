const rozlacznikiBezpieczenstwaGeneralFeatures_1_data = [
  ['Stopień ochrony: ', 'IP55'],
  ['Odporność na uderzenie: ', 'IK06'],
  ['Wymiary (sz × w × g)', '96,5 x 131 x 105,50 mm'],
  ['Waga ', '0.310kg'],
  ['Norma: ', 'CEI EN 60947-3'],
  //___
  ['Laying temperature: ', '-5°C +40°C'],
  ['Operating temperature: ', '60°C'],
  ['Test rozżarzonego drutu: ', '650°C '],
  ['Bieguny: ', '2P - 3P - 4P'],
  ['Napięcie izolacji: ', '690 V'],
  ['Rated voltage pulses: ', '6 KV'],
  ['Rated thermal current inside the box: ', '40 A'],
  ['Rated conditional short-circuit: ', '10 KA'],
  ['Częstotliwość: ', '50/60 Hz'],
  ['Connecting conductors flexible / solid mm²: ', '1.5 / 10'],
];

const catalogTable_1_data = {
  header: ['Nominal current', 'Bieguny', 'Uwagi', 'Model'],
  sections: [
    {
      horizontalHeader: '16A',
      bodyData: [
        ['2+E', '---', '25510'],
        ['2+NP+E', 'Solid Neutral', '25511'],
        ['3+E', '---', '25512'],
        ['3+NP+E', 'Solid Neutral', '25513'],
        ['4+E', '---', '25514'],
        ['4+NP+E', 'Solid Neutral', '25515'],
      ],
    },
    {
      horizontalHeader: '20A',
      bodyData: [
        ['2+E', '---', '25501'],
        ['2+NP+E', 'Solid Neutral', '25516'],
        ['3+E', '---', '25502'],
        ['3+NP+E', 'Solid Neutral', '25517'],
        ['4+E', '---', '25513'],
        ['4+NP+E', 'Solid Neutral', '25518'],
      ],
    },
    {
      horizontalHeader: '25A',
      bodyData: [
        ['2+E', '---', '25519'],
        ['2+NP+E', 'Solid Neutral', '25520'],
        ['3+E', '---', '25521'],
        ['3+NP+E', 'Solid Neutral', '25522'],
        ['4+E', '---', '25533'],
        ['4+NP+E', 'Solid Neutral', '25524'],
      ],
    },
    {
      horizontalHeader: '32A',
      bodyData: [
        ['2+E', '---', '25504'],
        ['2+NP+E', 'Solid Neutral', '25525'],
        ['3+E', '---', '25505'],
        ['3+NP+E', 'Solid Neutral', '25526'],
        ['4+E', '---', '25506'],
        ['4+NP+E', 'Solid Neutral', '25527'],
      ],
    },
    {
      horizontalHeader: '40A',
      bodyData: [
        ['2+E', '---', '25507'],
        ['2+NP+E', 'Solid Neutral', '25528'],
        ['3+E', '---', '25508'],
        ['3+NP+E', 'Solid Neutral', '25529'],
        ['4+E', '---', '25509'],
        ['4+NP+E', 'Solid Neutral', '25530'],
      ],
    },
  ],
};

const catalogTable_2_data = {
  sideHeader: ['Range of use', 'AC23A', 'AC22A', 'AC21A'],
  topHeaderLine1: ['Rating use', 'Nominal current of use A'],
  topHeaderLine2: ['Nominal current of use A'],
  topHeaderLine3: ['16', '20', '25', '32', '40'],
  bodyRows: [
    ['10A', '690V', '16A', '690V', '20A', '690V', '25A', '690V', '25A', '690V'],
    ['16A', '500V', '20A', '500V', '25A', '500V', '32A', '500V', '32A', '500V'],
    ['16A', '690V', '20A', '690V', '25A', '690V', '32A', '690V', '32A', '690V'],
    ['16A', '690V', '20A', '690V', '25A', '690V', '32A', '690V', '40A', '690V'],
  ],
};
//___???
// const rozlacznikiBezpieczenstwaGeneralFeatures_2_data = [
//   ['Laying temperature: ', '-5°C +40°C'],
//   ['Operating temperature: ', '60°C'],
//   ['Test rozżarzonego drutu: ', '650°C '],
//   ['Bieguny: ', '2P - 3P - 4P'],
//   ['Napięcie izolacji: ', '690 V'],
//   ['Rated voltage pulses: ', '6 KV'],
//   ['Rated thermal current inside the box: ', '40 A'],
//   ['Rated conditional short-circuit: ', '10 KA'],
//   ['Częstotliwość: ', '50/60 Hz'],
//   ['Connecting conductors flexible / solid mm²: ', '1.5 / 10'],
// ];

export {
  rozlacznikiBezpieczenstwaGeneralFeatures_1_data,
  // rozlacznikiBezpieczenstwaGeneralFeatures_2_data,
  catalogTable_1_data,
  catalogTable_2_data,
};
