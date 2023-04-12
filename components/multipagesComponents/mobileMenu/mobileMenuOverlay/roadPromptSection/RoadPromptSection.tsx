import React from 'react';
/**Components**/
import SvgMap from '../../../../SVG/maps/SvgMap';
import FadingHeader from '../../../pseudoHeaders/fadingHeader/FadingHeader';
import { MapPinIcon } from '@heroicons/react/24/solid';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
/**Basic Data*/
import { story } from '../../../../../data/_data';

/**----------------------------------**/
const RoadPromptSection: React.FC<{
  roadPrompt: boolean;
}> = ({ roadPrompt }) => {
  /**JSX**/
  return (
    <motion.div
      className="absolute left-0 right-0 top-0 bottom-0"
      animate={{ x: roadPrompt ? 0 : '110%' }}
      transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
    >
      <div className="relative fc flex-col  gap-y-8 w-full h-full bg-dark pt-[50px] pb-[70px] ">
        <div className="flex  flex-col w-[90%]">
          <FadingHeader
            label={'Adres'}
            mainContainerStyle="w-full flex flex-col gap-[4px]"
          />
          <div className="flex flex-col gap-1 w-[90%] pt-4">
            {story.pageKontakt.daneFirmy.slice(0, 3).map(label => (
              <p key={label} className="p-small text-grey">
                {label}
              </p>
            ))}
          </div>
        </div>

        <div className="flex  flex-col w-[90%] ">
          <FadingHeader
            label={'Dojazd'}
            mainContainerStyle="w-full flex flex-col gap-[4px]"
          />
          <div className=" w-[90%] pt-4">
            <ul className="flex flex-col gap-1">
              {story.pageKontakt.dojazd.map(label => (
                <li key={label}>
                  <p className="p-small text-grey">{label}</p>
                </li>
              ))}
              <div className="flex gap-x-2">
                <MapPinIcon className="h-[12px] w-[12px] text-corpo " />
                <p className="p-small text-grey">
                  {story.pageKontakt.dojazdNav}
                </p>
              </div>
            </ul>
          </div>
        </div>

        <div className="w-[80%]">
          <SvgMap containerStyle="width-full aspect-square" />
        </div>
      </div>
    </motion.div>
  );
};

export default RoadPromptSection;

//___50.681392, 16.604118
