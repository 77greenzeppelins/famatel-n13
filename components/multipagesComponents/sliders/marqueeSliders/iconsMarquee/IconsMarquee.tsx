import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
/**Basic Data*/
import { corpoColors } from '../../../../../data/_data';
import { svgIconsFromCatalogRandome_data } from '../../../../SVG/iconsFromCatalog/_iconsFromCatalog_data';
/**HardCoded staff**/
const springOptions = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};
/**TS**/
interface Props {
  //   children: ReactNode;
  numberOfSvgCells: number;
  svgContainerSizes: string;
  svgOffset: number;
  //___
  componentIsInView?: boolean;
  transitionDuration?: number;
  transitionDelay?: number;
  containerStyle?: string;
  yFactor?: string;
}

const IconsMarquee: React.FC<Props> = ({
  numberOfSvgCells,
  svgContainerSizes,
  svgOffset,
  componentIsInView = false,
  transitionDuration = 0.6,
  transitionDelay = 0.2,
  containerStyle,
  yFactor = '5%',
}) => {
  const [scrollDistance, setScrollDistance] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement>(null);
  /**...*/
  useEffect(() => {
    const measuredElement = elementRef.current;
    if (measuredElement) {
      const rect = measuredElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const hiddenAboveViewport = rect.top + scrollTop;
      const pixelsToScroll = hiddenAboveViewport - viewportHeight;
      //___or...
      // const pixelsToScroll = rect.top - viewportHeight;

      setScrollDistance(pixelsToScroll);
      //___
      // console.log('rect.top:', rect.top);
      // console.log('viewportHeight:', window.innerHeight);
      // console.log('window.pageYOffsete:', window.pageYOffset);
      // console.log(
      //   'document.documentElement.scrollTop:',
      //   document.documentElement.scrollTop
      // );
      // console.log('hiddenAboveViewport:', hiddenAboveViewport);
      // console.log('pixelsToScroll:', pixelsToScroll);
    }
  }, []);
  /**FramerMotion Staff**/
  const { scrollY } = useScroll();

  //___creat "x" veriable basing on scrollY value
  const x = useSpring(scrollY, springOptions);
  //___set actuall speed of x transformation
  const transformedX = useTransform(
    x,
    value => (value - scrollDistance + svgOffset) / -3
  );
  //___helper
  // useMotionValueEvent(x, 'change', latest => {
  //   console.log('x changed to', latest);
  // });

  /**JSX**/
  return (
    <motion.div
      data-component="InViewAnimatedContent__container"
      className={containerStyle ? containerStyle : 'flex flex-col gap-y-10'}
      initial={{ opacity: 0 }}
      animate={{
        opacity: componentIsInView ? 1 : 0,
        // y: componentIsInView ? 0 : yFactor,
      }}
      transition={{
        duration: transitionDuration,
        delay: transitionDelay,
      }}
    >
      <div
        data-component="IconsMarquee__container"
        ref={elementRef}
        className="flex w-full justify-start"
      >
        <motion.div
          className="flex gap-10 transition-all ease-in-out"
          // style={{ x: componentIsInView ? transformedX : 0 }}
          style={{ x: transformedX }}
        >
          {svgIconsFromCatalogRandome_data
            .slice(0, numberOfSvgCells)
            .map(({ id, Icon }, i) => (
              <div
                key={`${i}-${id}`}
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
    </motion.div>
  );
};

export default IconsMarquee;
