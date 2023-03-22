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
const headerTexts = ['Bezpieczne rozwiązania'];

/**----------------------------------------------------------------------------------**/

const TextSectionContent: React.FunctionComponent = () => {
  /**Hook For Special Case*/
  const { height } = useWindowSize({ screensNumber: 1 });
  const layoutCondition = height < 550;
  /**JSX**/
  return (
    <div
      className={`flex flex-col justify-end items-start md:justify-center gap-6 w-full h-full`}
    >
      <motion.div
        className="flex justify-start items-end "
        // className="w-[45%] h-[20%] bg-corpo"
        variants={textSectionChildrenVariants}
      >
        <SmallPseudoHeader
          text={headerTexts[0]}
          hasBox={true}
          hasVerticalOrnament={false}
        />
      </motion.div>
      <motion.div
        className="flex justify-start items-end"
        // className="w-[45%] h-[20%] bg-corpo"
        variants={textSectionChildrenVariants}
      >
        <MainText />
      </motion.div>
      <motion.div className="fc " variants={textSectionChildrenVariants}>
        <LinkWithTextAndIcon
          linkHref={pagesUrl.produkty}
          pLabel={'Poznaj kategorie produktów'}
          //___for <SmallPseudoHeader>
          hasBox={false}
          hasVerticalOrnament={false}
        />
      </motion.div>
    </div>
  );
};

export default TextSectionContent;
