import React from 'react';
/**Components**/
import SectionContentLayout from '../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
/**Hardcoded Staff*/
const witajStyle =
  'text-light  text-6xl xxs:text-8xl lg:text-9xl font-bold tracking-[1.5px] lg:tracking-[1.5px] word-spacing-0125 lg:word-spacing-025 disable-soft';
const sentenceStyle =
  'text-1rem lg:text-2xl text-grey text-center md:text-left tracking-[1.5px] lg:tracking-[2px] word-spacing-0125 lg:word-spacing-025 disable-soft';
/**Basic Data**/
import { story } from '../../../../data/_data';

/**Framer Motion Staff*/
import { motion } from 'framer-motion';
import { opacityScaleYDynamicVariants } from '../../../../utils/framerMotion/framerMotionUtils';

/**------------------------------**/
const ContactIntro = () => {
  return (
    <SectionContentLayout divStyle="flex flex-col gap-y-4 md:flex-row md:gap-x-14 lg:py-[20px] xl:py-[80px] xl:pl-[50px]">
      <div className="flex justify-center md:justify-start gap-x-6 ">
        <motion.div
          custom={1}
          variants={opacityScaleYDynamicVariants}
          initial="from"
          animate="to"
        >
          <p className={`${witajStyle} text-right`}>Witamy</p>
        </motion.div>
        <motion.div
          custom={1.4}
          variants={opacityScaleYDynamicVariants}
          initial="from"
          animate="to"
        >
          <p className={`${witajStyle} text-right`}>!</p>
        </motion.div>
      </div>
      <div className="flex items-center lg:w-[70%] xl:w-[50%]">
        <motion.div
          className="w-full"
          custom={1.8}
          variants={opacityScaleYDynamicVariants}
          initial="from"
          animate="to"
        >
          <p className={sentenceStyle}>{story.pageKontakt.s1}</p>
        </motion.div>
      </div>
    </SectionContentLayout>
    // <motion.div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_50px_1fr] lg:py-[40px] ">
    //   <div className="flex  justify-end pr-2 overflow-hidden">
    //     <motion.div
    //       className="w-full"
    //       custom={1.5}
    //       variants={variants}
    //       initial="from"
    //       animate="to"
    //     >
    //       <p className={`${witajStyle} text-right`}>Witamy</p>
    //     </motion.div>
    //   </div>
    //   <motion.div
    //     custom={1}
    //     variants={variants}
    //     initial="from"
    //     animate="to"
    //     className=""
    //   >
    //     <p className={witajStyle}>!</p>
    //   </motion.div>
    //   {/* <div className="bg-greyShade2"></div> */}
    //   <motion.div className="col-start-1 col-span-full fc lg:col-start-3 overflow-hidden">
    //     <motion.div
    //       className="w-full"
    //       custom={1.5}
    //       variants={variants}
    //       initial="from"
    //       animate="to"
    //     >
    //       <p className={sentenceStyle}>{story.pageKontakt.s1}</p>
    //     </motion.div>
    //   </motion.div>
    // </motion.div>
  );
};

export default ContactIntro;
