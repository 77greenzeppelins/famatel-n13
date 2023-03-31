import React from 'react';
/**Components**/
import DownloadableRow from '../__downloadableRow/DownloadableRow';
/**Basic Data*/
import { mainCategoriesNames } from '../../../../data/_data';

/**HardCoded Data**/
const catalogChapters = ['Wstęp', ...mainCategoriesNames];
const fakeLinks = ['/pdf/catalogChapters/00.Wstęp.pdf'];
const staffLinks = [
  ['/pdf/catalogChapters/00.Wstęp.pdf'],
  ['/pdf/catalogChapters/01.Wtyczki i gniazda.pdf'],
  ['/pdf/catalogChapters/02.Gniazda z blokadą.pdf'],
  ['/pdf/catalogChapters/03.Adaptery przemysłowe.pdf'],
  ['/pdf/catalogChapters/04.Gniazda podwieszane.pdf'],
  ['/pdf/catalogChapters/05.Przedłużacze bębnowe.pdf'],
  ['/pdf/catalogChapters/06.Wyłącznik bezpieczeństwa.pdf'],
  ['/pdf/catalogChapters/07.Ładowarki.pdf'],
  ['/pdf/catalogChapters/08.Obudowy i rozdzielnice.pdf'],
  ['/pdf/catalogChapters/09.Rozdzielnice modułowe.pdf'],
  ['/pdf/catalogChapters/10.Puszki instalacyjne.pdf'],
];
const buttonsLabels = [
  ['6.3 MB'],
  ['12.9 MB'],
  ['5.7 MB'],
  ['1.4 MB'],
  ['3.4 MB'],
  ['1.2 MB'],
  ['0.4 MB'],
  ['1.9 MB'],
  ['6.6 MB'],
  ['9.5 MB'],
  ['5.8 MB'],
];

/**--------------------------------**/
const CatalogChapters = () => {
  return (
    <div
      data-component="CatalogChapters"
      className="w-full flex flex-col gap-y-4 max-w-[800px]"
    >
      {/* <ChapterLine chapterNumber={1} chapterName={'name'} /> */}
      {catalogChapters.map((name, i) => (
        // <ChapterLine key={i} chapterNumber={i + 1} chapterName={name} />
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

export default CatalogChapters;
