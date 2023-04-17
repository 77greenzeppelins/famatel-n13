import React from 'react';
/**Components**/
import NumberTextModule from './numberTextModule/NumberTextModule';
import ProductDescription from './productDescription/ProductDescription';
import WordMap from './wordMap/WordMap';
// import IconsMarqueeSection from './iconsMarquee/IconsMarqueeSection';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';

/**Basic Data*/
import { pagesUrl, story } from '../../../../data/_data';
import LinkWithTextAndIcon from '../../../_basicComponents/links/linkWithTexAndIcon/LinkWithTextAndIcon';
/**TS**/
interface Props {
  mediumTextStyle?: string;
}
/**---------------------------------------------**/
const Section_2 = ({ mediumTextStyle }: Props) => {
  /**JSX**/
  return (
    <>
      <div className="hidden lg:flex w-full lg:h-[8vh] h-[14vh] bg-dark" />
      <motion.div className="flex flex-col gap-y-16 xl:gap-y-20 xxl:gap-y-28 ">
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[0].pseudoNumber}
          squareText={story.oFirmiePage.squareText[0].text}
          animatedText={story.oFirmiePage.animatedText[0]}
          textStyle={mediumTextStyle}
        />
        <ProductDescription />
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[1].pseudoNumber}
          squareText={story.oFirmiePage.squareText[1].text}
          animatedText={story.oFirmiePage.animatedText[1]}
          textStyle={mediumTextStyle}
        />
        {/* <IconsMarqueeSection /> */}
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[3].pseudoNumber}
          squareText={story.oFirmiePage.squareText[3].text}
          animatedText={story.oFirmiePage.animatedText[3]}
          textStyle={mediumTextStyle}
        />
        {/* <WordMap /> */}
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[2].pseudoNumber}
          squareText={story.oFirmiePage.squareText[2].text}
          animatedText={story.oFirmiePage.animatedText[2]}
          textStyle={mediumTextStyle}
        />
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[4].pseudoNumber}
          squareText={story.oFirmiePage.squareText[4].text}
          animatedText={story.oFirmiePage.animatedText[4]}
          textStyle={mediumTextStyle}
        />
        <div className="fc inner-px-md-xl-xxl">
          <LinkWithTextAndIcon
            linkHref={pagesUrl.produkty}
            pLabel={'Poznaj kategorie produktów'}
            //___for <SmallPseudoHeader>
            hasBox={false}
            hasVerticalOrnament={false}
          />
        </div>
      </motion.div>
    </>
  );
  // return (
  //   <AnimatePresence>
  //     {isSection_2_Open && (
  //       <>
  //         <div className="hidden lg:flex w-full lg:h-[8vh] h-[14vh] bg-dark" />
  //         <motion.div className="flex flex-col gap-y-20 ">
  //           <NumberTextModule
  //             squareNumber={story.oFirmiePage.squareText[0].pseudoNumber}
  //             squareText={story.oFirmiePage.squareText[0].text}
  //             animatedText={story.oFirmiePage.animatedText[0]}
  //           />
  //           <ProductDescription
  //             isProductDescriptionOpen={isSection_2_Open}
  //             productDescriptionOpener={setIsSection_2_Open}
  //           />
  //           <NumberTextModule
  //             squareNumber={story.oFirmiePage.squareText[1].pseudoNumber}
  //             squareText={story.oFirmiePage.squareText[1].text}
  //             animatedText={story.oFirmiePage.animatedText[1]}
  //           />
  //           <NumberTextModule
  //             squareNumber={story.oFirmiePage.squareText[2].pseudoNumber}
  //             squareText={story.oFirmiePage.squareText[2].text}
  //             animatedText={story.oFirmiePage.animatedText[2]}
  //           />
  //           <NumberTextModule
  //             squareNumber={story.oFirmiePage.squareText[3].pseudoNumber}
  //             squareText={story.oFirmiePage.squareText[3].text}
  //             animatedText={story.oFirmiePage.animatedText[3]}
  //           />
  //           <WordMap />
  //           <NumberTextModule
  //             squareNumber={story.oFirmiePage.squareText[4].pseudoNumber}
  //             squareText={story.oFirmiePage.squareText[4].text}
  //             animatedText={story.oFirmiePage.animatedText[4]}
  //           />
  //           <div className="h-[10vh] bg-dark" />
  //         </motion.div>
  //       </>
  //     )}
  //   </AnimatePresence>
  // );
};

export default Section_2;
