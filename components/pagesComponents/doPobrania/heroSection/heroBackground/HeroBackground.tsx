import React, { useRef } from 'react';
/**FramerMotion Staff**/
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  cubicBezier,
  easeIn,
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

/**----------------------------**/
const HeroBackground = () => {
  const scrollRef = useRef(null);
  /**...**/
  const [ref, { height }] = useMeasure();
  /**FramerMotion Staff**/
  const { scrollYProgress, scrollY } = useScroll({
    target: scrollRef,
    // offset: ['start end', 'end end'],
  });
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

  /**JSX**/
  return (
    <div
      data-component="HeroBackground__container"
      ref={ref}
      className="absolute hidden md:block inset-0 overflow-hidden z-5"
    >
      <div className="relative w-full h-full" ref={scrollRef}>
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
            className="flex gap-4 transition-all ease-in-out"
            // style={{ x: xLeft }}
            style={{ x }}
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
