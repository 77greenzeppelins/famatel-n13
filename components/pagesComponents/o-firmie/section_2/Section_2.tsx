import React from 'react';
/**Components**/
import NumberTextModule from './numberTextModule/NumberTextModule';
import ProductDescription from './productDescription/ProductDescription';
import WordMap from './wordMap/WordMap';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';

/**Basic Data*/
import { story } from '../../../../data/_data';

/**---------------------------------------------**/
const Section_2: React.FC<{
  isSection_2_Open: boolean;
  setIsSection_2_Open: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isSection_2_Open, setIsSection_2_Open }) => {
  /**JSX**/
  return (
    <>
      <div className="hidden lg:flex w-full lg:h-[8vh] h-[14vh] bg-dark" />
      <motion.div className="flex flex-col gap-y-20 ">
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[0].pseudoNumber}
          squareText={story.oFirmiePage.squareText[0].text}
          animatedText={story.oFirmiePage.animatedText[0]}
        />
        <ProductDescription
          isProductDescriptionOpen={isSection_2_Open}
          productDescriptionOpener={setIsSection_2_Open}
        />
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[1].pseudoNumber}
          squareText={story.oFirmiePage.squareText[1].text}
          animatedText={story.oFirmiePage.animatedText[1]}
        />
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[2].pseudoNumber}
          squareText={story.oFirmiePage.squareText[2].text}
          animatedText={story.oFirmiePage.animatedText[2]}
        />
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[3].pseudoNumber}
          squareText={story.oFirmiePage.squareText[3].text}
          animatedText={story.oFirmiePage.animatedText[3]}
        />
        <WordMap />
        <NumberTextModule
          squareNumber={story.oFirmiePage.squareText[4].pseudoNumber}
          squareText={story.oFirmiePage.squareText[4].text}
          animatedText={story.oFirmiePage.animatedText[4]}
        />
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
