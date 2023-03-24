import React from 'react';
import DownloadableRow from '../__downloadableRow/DownloadableRow';
/**HardCoded Data**/
const catalogChapters = [
  'Deklaracja 1',
  'Deklaracja 1',
  'Deklaracja 1',
  'Deklaracja 1',
];
const fakeLinks = [
  '/pdf/catalogChapters/05_przedluzacze_bebnowe.pdf',
  '/pdf/catalogChapters/05_przedluzacze_bebnowe.pdf',
];
const staffLinks = [fakeLinks, fakeLinks, fakeLinks, fakeLinks];
const buttonsLabels = [['2 mb'], ['5 mb'], ['2 mb'], ['5 mb']];

const DeclarationsSection = () => {
  return (
    <div
      data-component="CatalogChapters"
      className="w-full flex flex-col gap-y-4 max-w-[800px]"
    >
      {catalogChapters.map((name, i) => (
        <DownloadableRow
          key={i}
          rowLabel={name}
          rowNumber={1 + 1}
          buttonsLabels={buttonsLabels[i]}
          staffToDownload={staffLinks[i]}
        />
      ))}
    </div>
  );
};

export default DeclarationsSection;

// {
//   catalogChapters.map((name, i) => (
//     // <ChapterLine key={i} chapterNumber={i + 1} chapterName={name} />
//     <DownloadableRow
//       key={i}
//       rowLabel={name}
//       rowNumber={1 + 1}
//       buttonsLabels={buttonsLabels[i]}
//       staffToDownload={staffLinks[i]}
//     />
//   ));
// }
