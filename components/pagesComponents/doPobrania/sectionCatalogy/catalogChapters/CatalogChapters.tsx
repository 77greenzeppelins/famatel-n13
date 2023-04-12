import React, { useState } from 'react';
/**Components**/
import LinksToPdfStaff from './linksSection/LinksToPdfStaff';
import SvgSlider from './graphicSection/SvgSlider';
/**TS**/
import { IF_NormalizedNumbers } from '../../../../../utils/TS/typeScriptStaff';

/**--------------------------------**/
const CatalogChapters: React.FC<IF_NormalizedNumbers> = ({
  normalizedValues,
}) => {
  /**...**/
  const [stateId, setStateId] = useState<string>('0');
  /**JSX**/
  return (
    <div className="flex  xxl:flex-row gap-10">
      <div
        data-component="CatalogChapters"
        className="w-full lg:w-[50%]  flex flex-col gap-y-4 "
      >
        <LinksToPdfStaff setStateId={setStateId} />
      </div>
      <div className="hidden lg:flex lg:w-[50%] h-auto">
        <SvgSlider stateId={stateId} normalizedValues={normalizedValues} />
      </div>
    </div>
  );
};

export default CatalogChapters;
