import React from 'react';
import DownloadableRow from '../../__downloadableRow/DownloadableRow';
/**HardCoded Data**/
const catalogChapters = [
  'Deklaracja zgodności wyrobów o numerach katalogowych 3952.XXXX (IP44, IP65 stacjonarne i przenośne)',
  'Deklaracja zgodności wyrobów o numerach katalogowych 3957.XXXX (IP44, IP65 stacjonarne i przenośne)',
  'Deklaracja zgodności wyrobów o numerach katalogowych 3958.XXXX (IP44, IP65 stacjonarne i przenośne)',
  'Deklaracja zgodności wyrobów o numerach katalogowych 3959.XXXX (IP44, IP65 stacjonarne i przenośne)',
  'Deklaracja zgodności wyrobów o numerach katalogowych 3977.XXXX (IP44, IP65 stacjonarne i przenośne)',
];
const staffLinks = [
  ['/pdf/declarations/D3952.XXXX zbiorcza.pdf'],
  ['/pdf/declarations/D3957.XXXX zbiorcza.pdf'],
  ['/pdf/declarations/D3958.XXXX zbiorcza.pdf'],
  ['/pdf/declarations/D3959.XXXX zbiorcza.pdf'],
  ['/pdf/declarations/D3977.XXXX zbiorcza.pdf'],
];
const buttonsLabels = [
  ['0.6 MB'],
  ['0.6 MB'],
  ['0.2 MB'],
  ['0.6 MB'],
  ['0.6 MB'],
];

const DeclarationsList = () => {
  return (
    <div
      data-component="CatalogChapters"
      className="w-full flex flex-col gap-y-4 "
    >
      {catalogChapters.map((name, i) => (
        <DownloadableRow
          key={i}
          rowLabel={name}
          rowNumber={i + 1}
          buttonsLabels={buttonsLabels[i]}
          staffToDownload={staffLinks[i]}
        />
      ))}
    </div>
  );
};
export default DeclarationsList;
