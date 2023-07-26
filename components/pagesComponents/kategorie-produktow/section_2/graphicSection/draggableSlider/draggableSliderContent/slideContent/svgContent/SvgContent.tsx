import { motion } from 'framer-motion';
import React from 'react';
/**Basic Data*/
import { categoriesForSlider } from '../../../../../../../../SVG/techDrawings/allSvgTech';

/**TS**/
interface Props {
  categoryIndex: number;
  slideSize: number;
  slideIndex: number;
}
/**--------------------------------------**/
const SvgContent: React.FC<Props> = ({
  categoryIndex,
  slideSize,
  slideIndex,
}) => {
  const arrayToMap = categoriesForSlider[categoryIndex];

  /**JSX**/
  return (
    <div className="relative fc w-full h-full">
      <motion.div
        className="w-full h-full  rounded-sm bg-light"
        key={categoryIndex}
        initial={{ opacity: 0.5, scale: 1.03 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.1, duration: 0.8 },
        }}
      >
        {arrayToMap.map(({ Component }, i) => {
          if (i === slideIndex) {
            return (
              <div className="fc w-full h-full" key={i}>
                <Component basicSize={slideSize * 0.99} />
              </div>
            );
          }
        })}
      </motion.div>
    </div>
  );
};

export default SvgContent;

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
