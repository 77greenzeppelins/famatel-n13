import React from 'react';
/**Components**/
import ChapterLine from './chapterLine/ChapterLine';
/**Basic Data*/
import { mainCategoriesNames } from '../../../../data/_data';
/**HardCoded Data**/
const catalogChapters = ['Wstęp', ...mainCategoriesNames];

/**--------------------------------**/
const CatalogChapters = () => {
  return (
    <div
      data-component="CatalogChapters"
      className="w-full flex flex-col gap-y-4 max-w-[800px]"
    >
      {/* <ChapterLine chapterNumber={1} chapterName={'name'} /> */}
      {catalogChapters.map((name, i) => (
        <ChapterLine key={i} chapterNumber={i + 1} chapterName={name} />
      ))}
    </div>
  );
};

export default CatalogChapters;
