const rozlacznikiBezpieczenstwaGeneralFeatures_1_data = [
  ['Wymiary (sz / w / gł)', '96,5 × 131 × 105,5 mm'],
  ['Waga', '0.15 kg'],
  ['Stopień ochrony', 'IP65'],
  ['Odporność mechaniczna', 'IK08'],
  ['Temperatura robocza', '-5 + 40°C'],
  ['Max. temp. pracy', '60°C'],
  ['Test rozżarzonego drutu', '650°C '],
  ['Bieguny', '2P - 3P - 4P'],
  ['Napięcie znamionowe izolacji', '690 V'],
  ['Napięcie impulsowe', '6 KV'],
  ['Prąd termiczny wewnątrz obudowy', '40 A'],
  ['Warunkowy prąd zwarciowy', '10 KA'],
  ['Częstotliwość: ', '50/60 Hz'],
  ['Zaciski dla przewodu elastycznego / sztywnego mm²: ', '1.5 / 10'],
];

const catalogTable_1_data = {
  header: ['Prąd znamionowy', 'Bieguny', 'Uwagi', 'Model'],
  sections: [
    {
      horizontalHeader: '16A',
      bodyData: [
        ['2+E', '---', '25510'],
        ['2+NP+E', 'N nierozłączany', '25511'],
        ['3+E', '---', '25512'],
        ['3+NP+E', 'N nierozłączany', '25513'],
        ['4+E', '---', '25514'],
        ['4+NP+E', 'N nierozłączany', '25515'],
      ],
    },
    {
      horizontalHeader: '20A',
      bodyData: [
        ['2+E', '---', '25501'],
        ['2+NP+E', 'N nierozłączany', '25516'],
        ['3+E', '---', '25502'],
        ['3+NP+E', 'N nierozłączany', '25517'],
        ['4+E', '---', '25513'],
        ['4+NP+E', 'N nierozłączany', '25518'],
      ],
    },
    {
      horizontalHeader: '25A',
      bodyData: [
        ['2+E', '---', '25519'],
        ['2+NP+E', 'N nierozłączany', '25520'],
        ['3+E', '---', '25521'],
        ['3+NP+E', 'N nierozłączany', '25522'],
        ['4+E', '---', '25533'],
        ['4+NP+E', 'N nierozłączany', '25524'],
      ],
    },
    {
      horizontalHeader: '32A',
      bodyData: [
        ['2+E', '---', '25504'],
        ['2+NP+E', 'N nierozłączany', '25525'],
        ['3+E', '---', '25505'],
        ['3+NP+E', 'N nierozłączany', '25526'],
        ['4+E', '---', '25506'],
        ['4+NP+E', 'N nierozłączany', '25527'],
      ],
    },
    {
      horizontalHeader: '40A',
      bodyData: [
        ['2+E', '---', '25507'],
        ['2+NP+E', 'N nierozłączany', '25528'],
        ['3+E', '---', '25508'],
        ['3+NP+E', 'N nierozłączany', '25529'],
        ['4+E', '---', '25509'],
        ['4+NP+E', 'N nierozłączany', '25530'],
      ],
    },
  ],
};

const catalogTable_2_data = {
  topHeaderLeftCol: 'Kategoria użytkowania',
  sideHeader: ['AC23A', 'AC22A', 'AC21A'],
  topHeaderLine1: 'Klasa użytkowania',
  topHeaderLine2: 'Prąd znamionowy dla klasy A',
  topHeaderLine3: ['16', '20', '25', '32', '40'],
  bodyRows: [
    ['10A', '690V', '16A', '690V', '20A', '690V', '25A', '690V', '25A', '690V'],
    ['16A', '500V', '20A', '500V', '25A', '500V', '32A', '500V', '32A', '500V'],
    ['16A', '690V', '20A', '690V', '25A', '690V', '32A', '690V', '32A', '690V'],
    ['16A', '690V', '20A', '690V', '25A', '690V', '32A', '690V', '40A', '690V'],
  ],
};
//___???
const rozlacznikiBezpieczenstwa_feat_data = [
  ['Wymiary (sz / w / gł)', '96,5 × 131 × 105,5 mm'],
  ['Waga', '0.15 kg'],
  ['Stopień ochrony', 'IP65'],
  ['Odporność mechaniczna', 'IK08'],
  ['Temperatura robocza', '-5 + 40°C'],
  ['Max. temp. pracy', '60°C'],
  ['Test rozżarzonego drutu', '650°C '],
  ['Bieguny', '2P - 3P - 4P'],
  ['Napięcie znamionowe izolacji', '690 V'],
  ['Napięcie impulsowe', '6 KV'],
  ['Prąd termiczny wewnątrz obudowy', '40 A'],
  ['Warunkowy prąd zwarciowy', '10 KA'],
  ['Częstotliwość: ', '50/60 Hz'],
  ['Zaciski dla przewodu elastycznego / sztywnego mm²: ', '1.5 / 10'],
];
const rozlacznikiBezpieczenstwa_norma_data = [['Norma', 'CEI EN 60947-3']];

export {
  rozlacznikiBezpieczenstwaGeneralFeatures_1_data,
  // rozlacznikiBezpieczenstwaGeneralFeatures_2_data,
  catalogTable_1_data,
  catalogTable_2_data,
  rozlacznikiBezpieczenstwa_feat_data,
  rozlacznikiBezpieczenstwa_norma_data,
};
