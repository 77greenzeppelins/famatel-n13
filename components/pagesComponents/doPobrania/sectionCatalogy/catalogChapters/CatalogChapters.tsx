import React, { useState } from 'react';
/**Components**/
import LinksToPdfStaff from './linksSection/LinksToPdfStaff';
import SvgSlider from './graphicSection/SvgSlider';

/**--------------------------------**/
const CatalogChapters: React.FC = () => {
  /**...**/
  const [stateId, setStateId] = useState<string>('0');
  /**JSX**/
  return (
    <div className="flex gap-10 xxl:flex-row">
      <div
        data-component="CatalogChapters"
        className="w-full lg:w-[50%]  flex flex-col gap-y-4 "
      >
        <LinksToPdfStaff setStateId={setStateId} />
      </div>
      <div className="hidden lg:flex lg:w-[50%] h-auto">
        <SvgSlider stateId={stateId} />
      </div>
    </div>
  );
};

export default CatalogChapters;
