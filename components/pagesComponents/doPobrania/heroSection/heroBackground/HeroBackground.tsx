import React from 'react';
/**FramerMotion Staff**/
import { motion, useScroll, useTransform } from 'framer-motion';
import InViewContainer from '../../../../containers/inViewContainer/InViewContainer';
import InViewAnimatedContent from '../../../kontakt/_inViewAnimatedContent/InViewAnimatedContent';
import { svgTech_darkBackground } from '../../../../SVG/techDrawings/darkBackground';

/**----------------------------**/
const HeroBackground = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 500]);

  /**JSX**/
  return (
    <div className="absolute inset-0 overflow-hidden z-5 ">
      <InViewContainer
        animationDelay={0.1}
        outherContainerStyle="w-full h-full "
        measuredElementStyle="w-full h-full "
        topFactor={0}
        bottomFactor={0.2}
      >
        <InViewAnimatedContent containerStyle="relative flex flex-col gap-6 justify-around  w-full h-full">
          <motion.div
            className="transition-all ease-in-out"
            style={{ x: xRight }}
          >
            <p className="text-6xl text-greyShade2 whitespace-nowrap ">
              Jeśli działasz w zakresie elektryki przemysłowej na pewno mamy
              rozwiązanie dla Ciebie!
            </p>
          </motion.div>
          <motion.div
            className="flex gap-4 transition-all ease-in-out"
            style={{ x: xLeft }}
          >
            {/* <p className="text-6xl text-greyShade2 whitespace-nowrap ">
              Jeśli działasz w zakresie elektryki przemysłowej na pewno mamy
              rozwiązanie dla Ciebie!
            </p> */}
            {/* {Array.from({ length: 10 }, (_, index) => (
              <div
                key={index}
                className="fc w-[200px] h-[200px] aspect-square border-[1px] border-greyShade2"
              >
                {index}
              </div>
            ))} */}
            {svgTech_darkBackground.map(({ model, Component }, index) => (
              <div
                key={index}
                className="fc w-[200px] h-[200px] aspect-square"
                //___border-[1px] border-greyShade2
              >
                {/* {index} */}
                <Component basicSize={200} />
              </div>
            ))}
          </motion.div>
        </InViewAnimatedContent>
      </InViewContainer>
    </div>
  );
};

export default HeroBackground;
