import React from 'react';
/**Components**/
import DownloadableRow from '../../__downloadableRow/DownloadableRow';
/**Basic Data*/
import {
  catalogChapters,
  staffLinks,
  buttonsLabels,
} from './catalogChapters_data';

/**--------------------------------**/
const CatalogChapters = () => {
  /**JSX**/
  return (
    <div
      data-component="CatalogChapters"
      className="w-full flex flex-col gap-y-4 max-w-[800px]"
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

export default CatalogChapters;
