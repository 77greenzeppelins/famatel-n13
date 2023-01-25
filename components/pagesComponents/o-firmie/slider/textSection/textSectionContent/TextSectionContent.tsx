import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import LinkWithTextAndIcon from '../../../../../_basicComponents/links/linkWithTexAndIcon/LinkWithTextAndIcon';
import MainText from './mainTextSection/MainText';
/**Hoof Staff**/
import useWindowSize from '../../../../../../utils/hooks/useWindowSize';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
import { textSectionChildrenVariants } from '../../../../../../utils/framerMotion/framerMotionUtils';
/**Basic Data**/
import { pagesUrl } from '../../../../../../data/_data';
/**Hardcoded Data**/
const headerTexts = [
  'Technologia rozwijan od przeszło 30. lat',
  'Rozwiązania udoskonalane od przeszło 30. lat',
];

/**----------------------------------------------------------------------------------**/

const TextSectionContent: React.FunctionComponent<{ slideNumber: number }> = ({
  slideNumber,
}) => {
  /**Hook For Special Case*/
  const { height } = useWindowSize({ screensNumber: 1 });
  const layoutCondition = height < 550;
  /**JSX**/
  return (
    <div
      className={`flex flex-col justify-end items-start md:justify-center ${
        layoutCondition ? 'md:pb-0 lg:pb-0' : 'md:pb-[50%] lg:pb-[20%] xl:pb-0'
      } gap-6 w-full h-full`}
    >
      <motion.div
        className="flex justify-start items-end "
        // className="w-[45%] h-[20%] bg-corpo"
        variants={textSectionChildrenVariants}
      >
        <SmallPseudoHeader text={headerTexts[0]} />
      </motion.div>
      <motion.div
        className="flex justify-start items-end 0"
        // className="w-[45%] h-[20%] bg-corpo"
        variants={textSectionChildrenVariants}
      >
        <MainText slideNumber={slideNumber} />
      </motion.div>
      <motion.div className="fc " variants={textSectionChildrenVariants}>
        <LinkWithTextAndIcon
          linkHref={pagesUrl.produkty}
          pLabel={'Poznaj kategorie produktów'}
        />
      </motion.div>
    </div>
  );
};

export default TextSectionContent;
