import React from 'react';
import { story } from '../../../../../data/_data';

const TextForEntry = () => {
  return (
    <div className="fc inner-px-md-xl-xxl py-[10vh]">
      <p className="text-light text-center text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] xxl:text-[5rem] font-bold tracking-[2px] leading-tight">
        {story.s1[0]}
      </p>
    </div>
  );
};

export default TextForEntry;
