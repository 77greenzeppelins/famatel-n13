import { motion } from 'framer-motion';
import React from 'react';
/**Components**/
import SvgMap from '../../../../SVG/maps/SvgMap';

/**------------------------------------------------------**/
const RoadPromptSection: React.FunctionComponent<{
  roadPrompt: boolean;
}> = ({ roadPrompt }) => {
  /**JSX**/
  return (
    <motion.div
      className="absolute left-0 right-0 top-0 bottom-0"
      animate={{ x: roadPrompt ? 0 : '110%' }}
      transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
    >
      <div className="relative fc flex-col  gap-y-4 w-full h-full bg-dark pt-[50px] pb-[70px] ">
        <div className="flex  flex-col w-[90%] ">
          <div className="flex items-center w-full gap-1">
            <p className="header-link-label text-grey">Adres</p>
            <div className=" w-full h-[1px] border-t-[0.5px] gorder-grey " />
          </div>
          <div className="flex flex-col w-[90%] ">
            <p className="p-small text-grey">ul.Willowa 5</p>
            <p className="p-small text-grey">Bielawa</p>
          </div>
        </div>

        <div className="flex  flex-col w-[90%] ">
          <div className="flex items-center w-full gap-1">
            <p className="header-link-label text-grey">Dojazd</p>
            <div className=" w-full h-[1px] border-t-[0.5px] gorder-grey " />
          </div>
          <div className="flex flex-col w-[90%]">
            <p className="p-small text-grey">ul.Strażacka</p>
            <p className="p-small text-grey">Bielawa</p>
            <p className="p-small text-grey">
              coordynaty: 50.681392, 16.604118
            </p>
          </div>
        </div>

        <div className="w-[90%]">
          <SvgMap containerStyle="width-full aspect-square" />
        </div>
      </div>
    </motion.div>
  );
};

export default RoadPromptSection;

//___50.681392, 16.604118
