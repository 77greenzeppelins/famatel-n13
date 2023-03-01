import React, { useState } from 'react';
/**Components**/
import SectionContent from './sectionContent/SectionContent';
/**HardCoded Staff*/
const headers = [['Szybki', 'podgląd', 'kategorii']];

/**----------------------------**/
const Section_2 = () => {
  /**Local State**/
  const [expanded, setExpanded] = useState<false | number>(false);

  /**JSX**/
  return (
    <div className="fc flex-col gap-6 inner-px-md-xl-xxl pt-[40px]">
      <div className="w-full h-[1px] bg-vY " />
      {headers.map((labels, i) => (
        <SectionContent
          key={i}
          headerIndex={i}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </div>
  );
};

export default Section_2;
