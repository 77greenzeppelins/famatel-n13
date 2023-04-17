import React, { useRef } from 'react';
/**Hook staff**/
import useMeasure from 'react-use-measure';
/**FramerMotion Staff**/
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import InViewContainer from '../../../../containers/inViewContainer/InViewContainer';
import InViewAnimatedContent from '../../../../containers/inViewContainer/InViewAnimatedContent';

import { svgIconsFromCatalogRandome_data } from '../../../../SVG/iconsFromCatalog/_iconsFromCatalog_data';
import { corpoColors } from '../../../../../data/_data';
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
/**HardCoded staff**/
const mountingCondition = 640; //1024  1280
const heightValue = 300;
const svgBasicSize = 60;
const svgContainerSizes = 'w-[60px] h-[60px]';
const springOptions = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

/**----------------------------**/
const HeroBackground = () => {
  /**...**/
  const { width: screenWidth } = useWindowSize({ screensNumber: 1 });
  const [ref, { height, width }] = useMeasure();
  /**FramerMotion Staff**/
  const { scrollY } = useScroll();

  //___
  const x = useSpring(scrollY, springOptions);
  //___
  const xDivided = useTransform(x, value => value / 8);
  //___
  const xDividedNegative = useTransform(x, value => value / -4);
  // const xLeft = useTransform(scrollYProgress, [0, 1], [0, -500]);
  //___, {ease: easeIn,}
  //___
  const NumberOfSvgCells = Math.ceil(width / svgBasicSize);
  // console.log('height, width:', height, width);
  // console.log('NumberOfSvgCells:', NumberOfSvgCells);
  //___Helper;
  // useMotionValueEvent(scrollY, 'change', latest => {
  //   console.log('Page scroll: ', latest);
  //   scrollRef.current = latest / 2;
  //   console.log('scrollRef.current: ', latest / 2);
  // });
  /**JSX**/
  return screenWidth > mountingCondition ? (
    <div
      role="presentation"
      aria-hidden="true"
      data-component="HeroBackground__container_for_useMeasure"
      ref={ref}
      className="absolute  inset-0 overflow-hidden z-5"
      //___hidden md:block
    >
      <InViewContainer
        animationDelay={0.1}
        outherContainerStyle="w-full h-full "
        measuredElementStyle="w-full h-full "
        topFactor={0}
        bottomFactor={0.2}
      >
        <InViewAnimatedContent
          containerStyle="relative flex flex-col  justify-evenly w-full h-full"
          yFactor={'0'}
        >
          {
            //__optional
            height > heightValue ? (
              <div className="flex w-full justify-start">
                <motion.div
                  className="flex gap-10 transition-all ease-in-out"
                  style={{ x: xDividedNegative }}
                >
                  {svgIconsFromCatalogRandome_data
                    .slice(0, NumberOfSvgCells)
                    .map(({ id, Icon }, i) => (
                      <div
                        key={`${id}-${i}`}
                        className={`fc ${svgContainerSizes} aspect-square`}
                      >
                        <Icon
                          className={`fc ${svgContainerSizes} aspect-square`}
                          colorFG={corpoColors.greyShade1}
                        />
                      </div>
                    ))}
                </motion.div>
              </div>
            ) : null
          }
          <div className="flex w-full justify-end">
            <motion.div
              className="flex gap-10 transition-all ease-in-out"
              style={{ x: xDivided }}
            >
              {svgIconsFromCatalogRandome_data
                .slice(0, NumberOfSvgCells)
                .map(({ id, Icon }, i) => (
                  <div
                    key={`${id}-${i}`}
                    className={`fc ${svgContainerSizes} aspect-square disable`}
                  >
                    <Icon
                      className={`fc ${svgContainerSizes} aspect-square`}
                      colorFG={corpoColors.greyShade1}
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
              className="flex gap-10 transition-all ease-in-out"
              //___transition-all ease-in-out
              style={{ x: xDividedNegative }}
              transition={{ stiffness: 100, damping: 30, restDelta: 0.001 }}
            >
              {svgIconsFromCatalogRandome_data
                .slice(0, NumberOfSvgCells + 1)
                .reverse()
                .map(({ id, Icon }, i) => (
                  <div
                    key={`${id}-${i}`}
                    className={`fc ${svgContainerSizes} aspect-square disable`}
                  >
                    <Icon
                      className={`fc ${svgContainerSizes} aspect-square`}
                      colorFG={corpoColors.greyShade1}
                    />
                  </div>
                ))}
            </motion.div>
          </div>
        </InViewAnimatedContent>
      </InViewContainer>
    </div>
  ) : null;
};

export default HeroBackground;

//__this staff don't work:
// style={{ transform: `translateX(${x / 2}px)` }}
// style={{ x: xLeft }}
// style={{ transform: `translateX(${xx}px)` }}
// initial={{ x: 0 }}
// animate={{ x: scrollRef.current }}
