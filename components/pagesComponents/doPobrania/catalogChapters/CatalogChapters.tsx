import React from 'react';
/**Components**/
import DownloadableRow from '../__downloadableRow/DownloadableRow';
/**Basic Data*/
import { mainCategoriesNames } from '../../../../data/_data';

/**HardCoded Data**/
const catalogChapters = ['Wstęp', ...mainCategoriesNames];
const fakeLinks = [
  '/pdf/catalogChapters/05_przedluzacze_bebnowe.pdf',
  '/pdf/catalogChapters/05_przedluzacze_bebnowe.pdf',
];
const staffLinks = [
  fakeLinks,
  fakeLinks,
  fakeLinks,
  fakeLinks,
  fakeLinks,
  fakeLinks,
  fakeLinks,
  fakeLinks,
  fakeLinks,
  fakeLinks,
  fakeLinks,
];
const buttonsLabels = [
  ['150 mb', '32 mb'],
  ['100 mb', '25 mb'],
  ['99 mb', '20 mb'],
  ['150 mb', '32 mb'],
  ['100 mb', '25 mb'],
  ['99 mb', '20 mb'],
  ['150 mb', '32 mb'],
  ['100 mb', '25 mb'],
  ['99 mb', '20 mb'],
  ['150 mb', '32 mb'],
  ['100 mb', '25 mb'],
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
