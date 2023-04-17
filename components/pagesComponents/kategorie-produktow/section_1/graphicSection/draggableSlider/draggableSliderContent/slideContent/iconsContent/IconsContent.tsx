import { motion } from 'framer-motion';
import React from 'react';
/**Basic Data*/
import { corpoColors } from '../../../../../../../../../data/_data';
import { allCat } from './IconsContentData';

/**TS**/
interface Props {
  categoryIndex: number;
  slidesLineIndex: number;
  slideIndex: number;
}
/**--------------------------------------**/
const IconsContent: React.FC<Props> = ({
  categoryIndex,
  slidesLineIndex,
  slideIndex,
}) => {
  /*
  wtf: in case we want two RowsOfSlides in one step this allows to differ them...
  */
  const arrayToMap = slidesLineIndex
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
        {arrayToMap.map(({ Icon }, i) => {
          if (i === slideIndex) {
            return (
              <div key={i}>
                {/* <p className="text-corpo fc"> {`${slideIndex} / ${i}  `}</p> */}
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
