/*TS*/

/*
Data for component
*/

const adapteryPrzemysloweSchuko_tech_data: {
  header: string[];
  sizes: string[];
  l1: string[];
  l2: string[];
  l3: string[];
}[] = [
  //___1__
  {
    header: ['16A / 250 ~ 2P + T'],
    sizes: ['A', 'B'],
    l1: ['Wymiary', '226', '237'],
    l2: ['Wejścia', 'Wtyczka CEE 16A / 250V ~ 2P+T 6h'],
    l3: ['Waga', '530'],
  },
  //___2__
  {
    header: ['16A / 250 ~ 2P + T'],
    sizes: ['A', 'B'],
    l1: ['Wymiary', '160', '168'],
    l2: ['Wejścia', 'Wtyczka CEE 16A / 250V ~ 2P+T 6h'],
    l3: ['Waga', '530'],
  },
];

const adapteryPrzemysloweSchuko_catalogCard_data: {
  line1: { label: string; value: string };
  line2: { label: string; value: string };
  line3: string[];
}[] = [
  {
    line1: { label: 'Model: 16010 / Standard', value: 'EU' },
    line2: { label: 'Model: 16010F / Standard', value: 'PL' },
    line3: [
      'Wyjście',
      '2 gniazda CEE 2P+T 16A/250V 6h +',
      '1 gniazdo schuko 16A/250V',
    ],
  },
  {
    line1: { label: 'Model: 15002 / Standard', value: 'EU' },
    line2: { label: 'Model: 15002F / Standard', value: 'PL' },
    line3: [
      'Wyjście',
      '1 gniazdo CEE 2P+T 16A/250V 6h +',
      '1 gniazdo schuko 16A/250V',
    ],
  },
];

export {
  adapteryPrzemysloweSchuko_tech_data,
  adapteryPrzemysloweSchuko_catalogCard_data,
};
