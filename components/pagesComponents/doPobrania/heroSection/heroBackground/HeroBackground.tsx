import React, { useRef } from 'react';
/**FramerMotion Staff**/
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  cubicBezier,
  easeIn,
  useMotionValueEvent,
} from 'framer-motion';
import InViewContainer from '../../../../containers/inViewContainer/InViewContainer';
import InViewAnimatedContent from '../../../kontakt/_inViewAnimatedContent/InViewAnimatedContent';
import {
  svgTech_darkBackground,
  svgTech_darkBackground2,
  svgTech_darkBackground3,
} from '../../../../SVG/techDrawings/0_dark/darkBackground';
import useMeasure from 'react-use-measure';
/**HardCoded staff**/
const heightValue = 668;
const svgBasicSize = 220;
const svgContainerSizes = 'w-[220px] h-[220px]';
const springOptions = {
  damping: 100,
  mass: 10,
  stiffness: 100,
};

/**----------------------------**/
const HeroBackground = () => {
  const scrollRef = useRef<number>(0);

  /**...**/
  const [ref, { height }] = useMeasure();
  /**FramerMotion Staff**/
  const { scrollYProgress, scrollY } = useScroll();
  //   {
  //   target: scrollRef,
  //   offset: ['end end', 'start start'],
  // }

  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -500]);
  //___, {ease: easeIn,}
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 500]);

  const x = useSpring(scrollY, {
    damping: 100,
    mass: 10,
    stiffness: 100,
  });
  //   {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // }
  // { easeIn }

  const xDivided = useTransform(x, value => value / 2);

  useMotionValueEvent(scrollY, 'change', latest => {
    console.log('Page scroll: ', latest);
    scrollRef.current = latest / 2;
    console.log('scrollRef.current: ', latest / 2);
  });

  //____

  // let d = 50;
  //___
  /**JSX**/
  return (
    <div
      data-component="HeroBackground__container"
      ref={ref}
      className="absolute hidden md:block inset-0 overflow-hidden z-5"
    >
      <div
        className="relative flex flex-col  justify-around w-full h-full"
        // ref={scrollRef}
      >
        {/* <InViewContainer
          animationDelay={0.1}
          outherContainerStyle="w-full h-full "
          measuredElementStyle="w-full h-full "
          topFactor={0}
          bottomFactor={0.2}
        >
          <InViewAnimatedContent containerStyle="relative flex flex-col  justify-around   w-full h-full"> */}
        <div className="flex w-full justify-end">
          <motion.div
            className="flex gap-4 transition-all ease-in-out"
            // style={{ x: xRight }}
            style={{ x }}
          >
            {svgTech_darkBackground.map(({ model, Component }, index) => (
              <div
                key={index}
                className={`fc ${svgContainerSizes} aspect-square`}
              >
                <Component basicSize={svgBasicSize} />
              </div>
            ))}
          </motion.div>
        </div>
        <div
          //  className="flex w-full justify-start"
          className="flex w-full justify-end"
        >
          <motion.div
            className="flex gap-4 "
            //___transition-all ease-in-out
            // style={{ x }}
            style={{ x: xDivided }}
            // style={{ transform: `translateX(${x / 2}px)` }}
            // style={{ x: xLeft }}
            // style={{ transform: `translateX(${xx}px)` }}
            // initial={{ x: 0 }}
            // animate={{ x: scrollRef.current }}
            transition={{ stiffness: 100, damping: 30, restDelta: 0.001 }}
          >
            {svgTech_darkBackground2.map(({ model, Component }, i) => (
              <div
                key={i}
                className={`fc ${svgContainerSizes} aspect-square`}
                //___border-[1px] border-greyShade2
              >
                <Component basicSize={svgBasicSize} />
              </div>
            ))}
          </motion.div>
        </div>
        {
          //__optional
          height > heightValue ? (
            <div className="flex w-full justify-end">
              <motion.div
                className="flex gap-4 transition-all ease-in-out"
                // style={{ x: xRight }}
                style={{ x }}
              >
                {svgTech_darkBackground3.map(({ model, Component }, index) => (
                  <div
                    key={index}
                    className={`fc ${svgContainerSizes} aspect-square`}
                  >
                    <Component basicSize={svgBasicSize} />
                  </div>
                ))}
              </motion.div>
            </div>
          ) : null
        }
        {/* </InViewAnimatedContent>
        </InViewContainer> */}
      </div>
    </div>
  );
};

export default HeroBackground;
