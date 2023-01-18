import { motion } from 'framer-motion';
import React, { useCallback } from 'react';
/**Components**/
// import SvgIconIK from '../../../../../../../../SVG/iconsFromCatalog/SvgIconIK';
// import SvgIconIP from '../../../../../../../../SVG/iconsFromCatalog/SvgIconIP';
/**Basic Data*/
import { corpoColors } from '../../../../../../../../../data/_data';
import { allCat } from './IconsContentData';
/**------------------------------------------------**/
const IconsContent: React.FunctionComponent<{
  categoryIndex: number;
  slidesLineIndex: number;
  slideIndex: number;
}> = ({ categoryIndex, slidesLineIndex, slideIndex }) => {
  const currentIconMap = slidesLineIndex
    ? allCat[categoryIndex]
    : allCat[categoryIndex].reverse();

  /**JSX**/
  return (
    <div className="relative fc w-full h-full">
      <motion.div
        className=" w-[50%] h-[50%] border border-greyShade1 rounded-sm p-4"
        key={categoryIndex}
        initial={{ opacity: 0.5, scale: 1.03 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.1, duration: 0.8 },
        }}
      >
        {currentIconMap.map(({ Icon }, i) => {
          if (i === slideIndex) {
            return (
              <div key={i}>
                {' '}
                <Icon colorFG={corpoColors.greyShade1} />{' '}
              </div>
            );
          }
        })}
      </motion.div>
    </div>
  );
};

export default IconsContent;

// <p className="fc flex-col w-full h-full text-corpo">
//   <span>{`slidesLineIndex: ${slidesLineIndex}`}</span>
//   <span>{`index: ${slideIndex}`}</span>
//   <span>{`categoryIndex: ${categoryIndex}`}</span>
// </p>

/**Switcher**/
//   const renderContent = useCallback(
//     ({ iconID, colorFG }: { iconID?: string; colorFG?: string }) => {
//       switch (iconID) {
//         case 'IP50':
//           return <SvgIconIP ID={'50'} colorFG={colorFG} size={50} />;
//         case 'two':
//           return 'TWO';
//         case 'three':
//           return 'THREE';
//         case 'four':
//           return 'FOUR';
//         default:
//           return 'ONE';
//       }
//     },
//     []
//   );
