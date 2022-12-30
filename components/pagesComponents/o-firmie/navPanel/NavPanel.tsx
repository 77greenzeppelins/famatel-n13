import React from 'react';
/**Components**/
import ButtonSection from './buttonsSection/ButtonSection';
import ScrollSection from './scrollSection/ScrollSection';

const NavPanel: React.FunctionComponent<{
  slideNumber: number;
  setSlideState: React.Dispatch<
    React.SetStateAction<{
      number: number;
      deltaY: number;
    }>
  >;
  sectionsNumber: number;
}> = ({ slideNumber, setSlideState, sectionsNumber }) => {
  /**JSX*/
  return (
    <div className="absolute hidden xl:flex justify-between inset-0 pointer-events-none">
      <div className="flex-1 ">
        <ButtonSection sectionsNumber={3} slideNumber={slideNumber} />
      </div>
      <div className="flex items-start sm:items-end w-[60px] xl:w-[120px]">
        <ScrollSection />
      </div>
    </div>

    // <div className="absolute fc bottom-0 left-0 right-0 h-[70px] pb-[10px]">
    //   <div className="flex justify-between w-[340px] h-full ">
    //     {Array.from({ length: sectionsNumber }).map((_, i) => (
    //       <div key={i}>
    //         <AriaMotionButton
    //           ariaLabel={`zobacz slajd ${i + 1}`}
    //           whileHover={animatedButton.whileHover}
    //           transition={animatedButton.transition}
    //           onClick={() => {
    //             console.log('...........NavPanel / GraphicSection');
    //           }}
    //         >
    //           <div key={i} className="fc h-[2px] w-[80px] bg-light"></div>
    //         </AriaMotionButton>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default NavPanel;
