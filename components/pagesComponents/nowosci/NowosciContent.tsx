import React from 'react';
/**Components**/
import Section2 from './section_2/Section2';

/**----------------------------------**/
const NowosciContent = () => {
  /**JSX**/
  return (
    <div
      data-component="KontaktContent__container"
      className="relative bg-dark pt-[60px]  "
    >
      <div className="w-full min-h-screen fc inner-px-md-xl-xxl">
        <Section2 />
      </div>
    </div>
  );
};

export default NowosciContent;
