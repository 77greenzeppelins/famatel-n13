import React from 'react';
import ButtonsSection from './buttonSection/ButtonsSection';
import TextSection from './textSection/TextSection';

/**------------------------------------------------------------------------------------**/
const BottomMenu: React.FunctionComponent<{ categoryIndex: number }> = ({
  categoryIndex,
}) => {
  return (
    <div
      data-component="BottomMenu__container"
      className="flex justify-between items-center w-[98%] sm:w-[92%]  md:w-[80%] lg:w-[74%] xl:w-[64%] xxxl:w-[58%] h-[60px] border-t border-grey m-auto backdrop-blur-lg  "
    >
      <TextSection categoryIndex={categoryIndex} />
      <ButtonsSection />
    </div>
  );
};

export default BottomMenu;
