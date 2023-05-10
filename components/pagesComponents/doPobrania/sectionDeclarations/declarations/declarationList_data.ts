/**HardCoded Data**/
const catalogChapters: string[] = [
  'Deklaracja zgodności wyrobów o numerach katalogowych 3952.XXXX (IP44, IP65 stacjonarne i przenośne)',
  'Deklaracja zgodności wyrobów o numerach katalogowych 3957.XXXX (IP44, IP65 stacjonarne i przenośne)',
  'Deklaracja zgodności wyrobów o numerach katalogowych 3958.XXXX (IP44, IP65 stacjonarne i przenośne)',
  'Deklaracja zgodności wyrobów o numerach katalogowych 3959.XXXX (IP44, IP65 stacjonarne i przenośne)',
  'Deklaracja zgodności wyrobów o numerach katalogowych 3977.XXXX (IP44, IP65 stacjonarne i przenośne)',
];
const staffLinks: string[][] = [
  ['/pdf/declarations/D3952.XXXX zbiorcza.pdf'],
  ['/pdf/declarations/D3957.XXXX zbiorcza.pdf'],
  ['/pdf/declarations/D3958.XXXX zbiorcza.pdf'],
  ['/pdf/declarations/D3959.XXXX zbiorcza.pdf'],
  ['/pdf/declarations/D3977.XXXX zbiorcza.pdf'],
];
const buttonsLabels: string[][] = [
  ['0.6 MB'],
  ['0.6 MB'],
  ['0.2 MB'],
  ['0.6 MB'],
  ['0.6 MB'],
];

const allDeclarations = [
  {
    models: ['3952'],
    url: '/pdf/declarations/D3952.XXXX zbiorcza.pdf',
    size: '0.6 MB',
    title:
      'Deklaracja zgodności wyrobów o numerach katalogowych 3952.XXXX (IP44, IP65 stacjonarne i przenośne)',
  },
  {
    models: ['3957'],
    url: '/pdf/declarations/D3957.XXXX zbiorcza.pdf',
    size: '0.6 MB',
    title:
      'Deklaracja zgodności wyrobów o numerach katalogowych 3957.XXXX (IP44, IP65 stacjonarne i przenośne)',
  },
  {
    models: ['3958'],
    url: '/pdf/declarations/D3958.XXXX zbiorcza.pdf',
    size: '0.2 MB',
    title:
      'Deklaracja zgodności wyrobów o numerach katalogowych 3958.XXXX (IP44, IP65 stacjonarne i przenośne)',
  },
  {
    models: ['3959'],
    url: '/pdf/declarations/D3959.XXXX zbiorcza.pdf',
    size: '0.6 MB',
    title:
      'Deklaracja zgodności wyrobów o numerach katalogowych 3959.XXXX (IP44, IP65 stacjonarne i przenośne)',
  },
  {
    models: ['3977'],
    url: '/pdf/declarations/D3977.XXXX zbiorcza.pdf',
    size: '0.6 MB',
    title:
      'Deklaracja zgodności wyrobów o numerach katalogowych 3977.XXXX (IP44, IP65 stacjonarne i przenośne)',
  },
];

export { catalogChapters, staffLinks, buttonsLabels, allDeclarations };
