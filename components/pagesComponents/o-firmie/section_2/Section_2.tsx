import React from 'react';
/**Components**/
import NumberTextModule from './numberTextModule/NumberTextModule';
import ProductDescription from './productDescription/ProductDescription';
import WorldMapComponent from '../../../SVG/maps/WorldMapComponent';
import PageAnimatedLink from '../_pageAnimatedLink/PageAnimatedLink';
import IconsMarqueeSection from './iconsMarquee/IconsMarqueeSection';
/**Basic Data*/
import { pagesUrl, story } from '../../../../data/_data';

/**---------------------------------------------**/
const Section_2 = () => {
  /**JSX**/
  return (
    <>
      <div className="hidden lg:flex w-full lg:h-[8vh] h-[14vh] bg-dark" />
      <div className="flex flex-col gap-y-16 xl:gap-y-20 xxl:gap-y-28 ">
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[0].pseudoNumber}
          squareText={story.oFirmiePage.squareText[0].text}
          animatedText={story.oFirmiePage.animatedText[0]}
          // textStyle={mediumTextStyle}
        />
        <ProductDescription />
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[1].pseudoNumber}
          squareText={story.oFirmiePage.squareText[1].text}
          animatedText={story.oFirmiePage.animatedText[1]}
          // textStyle={mediumTextStyle}
        />
        <IconsMarqueeSection />
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[3].pseudoNumber}
          squareText={story.oFirmiePage.squareText[3].text}
          animatedText={story.oFirmiePage.animatedText[3]}
          // textStyle={mediumTextStyle}
        />
        <WorldMapComponent />
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[2].pseudoNumber}
          squareText={story.oFirmiePage.squareText[2].text}
          animatedText={story.oFirmiePage.animatedText[2]}
          // textStyle={mediumTextStyle}
        />
        {/* <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[4].pseudoNumber}
          squareText={story.oFirmiePage.squareText[4].text}
          animatedText={story.oFirmiePage.animatedText[4]}
          // textStyle={mediumTextStyle}
        /> */}
        <div className="fc inner-px-md-xl-xxl">
          <PageAnimatedLink linkHref={pagesUrl.produkty} />
        </div>
      </div>
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
