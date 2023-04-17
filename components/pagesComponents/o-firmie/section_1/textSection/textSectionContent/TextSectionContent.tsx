import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import PageAnimatedLink from '../../../_pageAnimatedLink/PageAnimatedLink';
import MainText from './mainTextSection/MainText';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
import { textSectionChildrenVariants } from '../../../../../../utils/framerMotion/framerMotionUtils';
/**Basic Data**/
import { pagesUrl, story } from '../../../../../../data/_data';
interface Props {
  linkTextStyle: string;
}
/**----------------------------------------------------------------------------------**/

const TextSectionContent = ({ linkTextStyle }: Props) => {
  /**JSX**/
  return (
    <div
      className={`flex flex-col justify-end items-start md:justify-center gap-6 w-full h-full `}
    >
      <motion.div
        className="flex justify-start items-end"
        variants={textSectionChildrenVariants}
      >
        <SmallPseudoHeader
          text={story.oFirmiePage.pseudoHeader}
          hasBox={false}
          hasVerticalOrnament={true}
          // textStyle="p-medium text-grey align-middle leading-none"
        />
      </motion.div>
      <motion.div
        className="flex justify-start items-end "
        variants={textSectionChildrenVariants}
      >
        <MainText />
      </motion.div>
      <motion.div className="flex " variants={textSectionChildrenVariants}>
        <PageAnimatedLink
          linkHref={pagesUrl.produkty}
          textStyle={linkTextStyle}
        />
      </motion.div>
    </div>
  );
};

export default TextSectionContent;

{
  /* <LinkWithTextAndIcon
          linkHref={pagesUrl.produkty}
          pLabel={'Poznaj kategorie produktów'}
          //___for <SmallPseudoHeader>
          hasBox={false}
          hasVerticalOrnament={false}
        /> */
}
