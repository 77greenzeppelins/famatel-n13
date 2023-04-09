import React from 'react';
/**Components**/
/**Hardcoded Staff*/
const witajStyle =
  'text-light text-5xl xxs:text-[4.5rem] xs:text-9xl font-bold tracking-[1.5px] lg:tracking-[1.5px] word-spacing-0125 lg:word-spacing-025 disable-soft';
const sentenceStyle =
  'text-base lg:text-xl lg:text-2xl text-grey text-center  tracking-[1.5px] lg:tracking-[2px] word-spacing-0125 lg:word-spacing-025 disable-soft';
/**Basic Data**/
import { story } from '../../../../data/_data';

/**Framer Motion Staff*/
import { motion, useScroll, useTransform } from 'framer-motion';
import { opacityScaleYDynamicVariants } from '../../../../utils/framerMotion/framerMotionUtils';

/**------------------------------**/
const ContactIntro = () => {
  /**...*/
  let { scrollY, scrollYProgress } = useScroll();
  let animatedVal_1 = useTransform(scrollY, [0, 240], [0, 1]);
  let animatedVal_2 = useTransform(scrollY, [0, 250], [1, 0.7]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  /**JSX**/
  return (
    <section
      // className="sticky top-[50px] inset-x-0 flex flex-col justify-center gap-y-4 h-[60vh] xl:flex-row xl:gap-x-14 xl:w-[90%] xl:mx-auto xxl:w-[80%] z-0 px-2 overflow-hidden"
      className=" flex flex-col justify-center gap-y-4 h-[60vh] xl:flex-row xl:gap-x-14 xl:w-[90%] xl:mx-auto xxl:w-[80%] z-0 px-2 overflow-hidden"
    >
      <motion.div
        className="flex justify-center xl:justify-start xl:items-center gap-x-6 transition-all"
        //___transition-all duration-2000 ease-in-out
        // style={{ y: x }}
        //___transition: all 2s ease-in-out;
      >
        <motion.div
          custom={1}
          variants={opacityScaleYDynamicVariants}
          initial="from"
          animate="to"
        >
          <motion.p
            className={`${witajStyle} text-right`}
            style={{ scale: animatedVal_2 }}
          >
            Witamy
          </motion.p>
        </motion.div>
        <motion.div
          custom={1.4}
          variants={opacityScaleYDynamicVariants}
          initial="from"
          animate="to"
        >
          <motion.p
            className={`${witajStyle} text-right origin-left`}
            style={{ scale: animatedVal_2 }}
          >
            !
          </motion.p>
        </motion.div>
      </motion.div>
      <div className="fc ">
        <motion.div
          className="lg:w-[70%] xl:w-full"
          custom={1.8}
          variants={opacityScaleYDynamicVariants}
          initial="from"
          animate="to"
        >
          <motion.p className={sentenceStyle} style={{ scale: animatedVal_2 }}>
            {story.pageKontakt.s1}
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        style={{ opacity: animatedVal_1 }}
        className="absolute inset-y-0 left-0 right-0 bg-dark "
      />
    </section>
  );
};

export default ContactIntro;

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
