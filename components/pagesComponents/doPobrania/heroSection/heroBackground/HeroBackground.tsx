import React, { useRef } from 'react';
/**FramerMotion Staff**/
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import InViewContainer from '../../../../containers/inViewContainer/InViewContainer';
import InViewAnimatedContent from '../../../../containers/inViewContainer/InViewAnimatedContent';
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
  // damping: 100,
  // mass: 10,
  // stiffness: 100,
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

/**----------------------------**/
const HeroBackground = () => {
  /**...**/
  const [ref, { height, width }] = useMeasure();
  /**FramerMotion Staff**/
  const { scrollY } = useScroll();
  //   {
  //   target: scrollRef,
  //   offset: ['end end', 'start start'],
  // }
  //___
  const x = useSpring(scrollY, springOptions);
  //___
  const xDivided = useTransform(x, value => value / 4);
  //___
  const xDividedNegative = useTransform(x, value => value / -4);
  // const xLeft = useTransform(scrollYProgress, [0, 1], [0, -500]);
  //___, {ease: easeIn,}
  //___
  const NumberOfSvgCells = Math.ceil(width / svgBasicSize);
  // console.log('height, width:', height, width);
  // console.log('NumberOfSvgCells:', NumberOfSvgCells);
  //___
  // useMotionValueEvent(scrollY, 'change', latest => {
  //   console.log('Page scroll: ', latest);
  //   scrollRef.current = latest / 2;
  //   console.log('scrollRef.current: ', latest / 2);
  // });
  /**JSX**/
  return (
    <div
      data-component="HeroBackground__container_for_useMeasure"
      ref={ref}
      className="absolute hidden md:block inset-0 overflow-hidden z-5"
    >
      <InViewContainer
        animationDelay={0.1}
        outherContainerStyle="w-full h-full "
        measuredElementStyle="w-full h-full "
        topFactor={0}
        bottomFactor={0.2}
      >
        <InViewAnimatedContent
          containerStyle="relative flex flex-col  justify-around   w-full h-full"
          yFactor={'0'}
        >
          {
            //__optional
            height > heightValue ? (
              <div className="flex w-full justify-start">
                <motion.div
                  className="flex gap-4 transition-all ease-in-out"
                  style={{ x: xDividedNegative }}
                >
                  {svgTech_darkBackground3
                    .slice(0, NumberOfSvgCells)
                    .map(({ model, Component }, index) => (
                      <div
                        key={index}
                        className={`fc ${svgContainerSizes} aspect-square`}
                      >
                        <Component
                          className={`fc ${svgContainerSizes} aspect-square`}
                        />
                      </div>
                    ))}
                </motion.div>
              </div>
            ) : null
          }
          <div className="flex w-full justify-end">
            <motion.div
              className="flex gap-4 transition-all ease-in-out"
              style={{ x: xDivided }}
            >
              {svgTech_darkBackground
                .slice(0, NumberOfSvgCells)
                .map(({ model, Component }, index) => (
                  <div
                    key={index}
                    className={`fc ${svgContainerSizes} aspect-square`}
                  >
                    <Component
                      className={`fc ${svgContainerSizes} aspect-square`}
                    />
                  </div>
                ))}
            </motion.div>
          </div>
          <div
            //  className="flex w-full justify-start"
            className="flex w-full justify-start"
          >
            <motion.div
              className="flex gap-4 "
              //___transition-all ease-in-out
              style={{ x: xDividedNegative }}
              transition={{ stiffness: 100, damping: 30, restDelta: 0.001 }}
            >
              {svgTech_darkBackground2
                .slice(0, NumberOfSvgCells + 1)
                .map(({ Component }, i) => (
                  <div
                    key={i}
                    className={`fc ${svgContainerSizes} aspect-square`}
                  >
                    <Component
                      className={`fc ${svgContainerSizes} aspect-square`}
                    />
                  </div>
                ))}
            </motion.div>
          </div>
        </InViewAnimatedContent>
      </InViewContainer>
    </div>
  );
};

export default HeroBackground;

//__this staff don't work:
// style={{ transform: `translateX(${x / 2}px)` }}
// style={{ x: xLeft }}
// style={{ transform: `translateX(${xx}px)` }}
// initial={{ x: 0 }}
// animate={{ x: scrollRef.current }}
