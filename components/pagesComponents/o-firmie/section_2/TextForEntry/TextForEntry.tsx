import React, { useRef } from 'react';
import { story } from '../../../../../data/_data';
/**Framer Motion Staff**/
import {
  motion,
  // useScroll,
  // useTransform,
  useInView,
  useSpring,
} from 'framer-motion';
import useMeasure from 'react-use-measure';
const val1 = 300;

const TextForEntry = () => {
  const scrollRef = useRef(null);
  const [ref, bounds] = useMeasure();
  const elementInView = useRef(null);
  const isInView = useInView(elementInView, {
    margin: `-${bounds.height * 0.9}px 0px -${bounds.height * 0.9}px 0px`,
    // once: true,
    // amount: 'all',
    // amount: 1,
  });
  //___

  /**Framer Motion Section**/
  // const { scrollYProgress } = useScroll({
  //   target: scrollRef,
  //   offset: ['end end', 'end start'],
  // });
  // let width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  // let height = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%']);

  //___
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });
  console.log('isInView', isInView);
  /**JSX**/
  return (
    <div
      // ref={scrollRef}
      ref={elementInView}
      className="relative flex flex-col inner-px-md-xl-xxl"
    >
      <motion.p
        ref={ref}
        className="text-light text-center text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] xxl:text-[5rem] font-bold tracking-[2px] leading-tight"
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
        transition={{
          duration: 0.6,
          delay: 0,
          // type: 'spring',
          // bounce: 0.4,
          // duration: 0.8,
        }}
      >
        {story.s1[0]}
      </motion.p>
      {/* <motion.div
      
        className="absolute inset-0 origin-left bg-dark z-1"
        animate={{ opacity: isInView ? 0 : 1 }}
        transition={{ duration: 0.4, delay: 0 }}
        // style={{ height }}
        // initial={{ opacity: 1 }}
        // whileInView={{ opacity: 0.5 }}
        // viewport={{ once: true, amount: 0.9 }}
      /> */}
      {/* <motion.div
        className="relative z-10 h-10 origin-left bg-vY"
        style={{ width }}
      /> */}
    </div>
  );
};

export default TextForEntry;
