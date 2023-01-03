import React from 'react';
/**Components**/
import ButtonsSection from './buttonsSection/ButtonsSection';
import ScrollSection from './scrollSection/ScrollSection';

const NavPanel: React.FunctionComponent<{
  slideNumber: number;
  setSlideState: React.Dispatch<
    React.SetStateAction<{
      number: number;
    }>
  >;
  sectionsNumber: number;
}> = ({ slideNumber, setSlideState, sectionsNumber }) => {
  /**JSX*/
  return (
    <div className="absolute hidden xl:flex justify-between inset-0 pointer-events-none">
      <div className="flex-1 ">
        <ButtonsSection
          sectionsNumber={sectionsNumber}
          slideNumber={slideNumber}
          setSlideState={setSlideState}
        />
      </div>
      <div className="flex items-start sm:items-end w-[60px] xl:w-[120px]">
        <ScrollSection />
      </div>
    </div>
  );
};

export default NavPanel;
