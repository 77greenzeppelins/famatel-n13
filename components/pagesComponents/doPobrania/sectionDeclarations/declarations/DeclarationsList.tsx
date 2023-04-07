import React from 'react';
import DownloadableRow from '../../__downloadableRow/DownloadableRow';
/**HardCoded Data**/
import {
  catalogChapters,
  staffLinks,
  buttonsLabels,
} from './declarationList_data';

/**------------------------------**/

const DeclarationsList = () => {
  /**JSX**/
  return (
    <ul
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
    </ul>
  );
};
export default DeclarationsList;
