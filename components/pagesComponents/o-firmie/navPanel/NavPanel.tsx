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
    <div className="absolute flex justify-between inset-0 pointer-events-none">
      <div className="flex-1 ">
        <ButtonsSection
          sectionsNumber={sectionsNumber}
          slideNumber={slideNumber}
          setSlideState={setSlideState}
        />
      </div>
      <div className="flex items-end w-[30px] md:w-[40px] xl:w-[120px] pb-[60px] pointer-events-none">
        <ScrollSection />
      </div>
    </div>
  );
};

export default NavPanel;
