import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import React, { useEffect, useRef } from 'react';
/**Basic Data*/
import { corpoColors } from '../../../../../data/_data';
import { svgIconsFromCatalogRandome_data } from '../../../../SVG/iconsFromCatalog/_iconsFromCatalog_data';
/**HardCoded staff**/
const springOptions = {
  stiffness: 100,
  damping: 30,
  // stiffness: 10,
  // damping: 20,
  restDelta: 0.001,
};
/**TS**/
interface Props {
  numberOfSvgCells: number;

  animationOffset: number;
  //___
  componentIsInView?: boolean;
  transitionDuration?: number;
  transitionDelay?: number;
  transformationFactor: number;
  //___tailwind staff
  marqueeContainerStyle?: string;
  animatedContainerStyle?: string;
  cellStyle: string;
  // yFactor?: string;
}

const IconsMarquee: React.FC<Props> = ({
  numberOfSvgCells,
  animationOffset,
  componentIsInView = false,
  transitionDuration = 0.4,
  transitionDelay = 0.1,
  transformationFactor,
  //___tailwind Staff
  marqueeContainerStyle,
  animatedContainerStyle,
  cellStyle,
  // yFactor = '5%',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  /**FramerMotion Staff**/
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start end', 'end start'],
  });
  //___creat "x" veriable basing on scrollY value
  const x2 = useSpring(scrollYProgress, springOptions);
  //___set actuall speed of x transformation
  const transformedX = useTransform(
    x2,
    value => (value * animationOffset) / transformationFactor
  );
  //___helper
  // useMotionValueEvent(scrollYProgress, 'change', latest => {
  //   console.log('scrollYProgress changed to', latest);
  // });

  /**JSX**/
  return (
    <motion.div
      data-component="IconsMarquee__container"
      className={
        marqueeContainerStyle ? marqueeContainerStyle : 'flex flex-col gap-y-10'
      }
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
      <motion.div
        ref={elementRef}
        className={
          animatedContainerStyle
            ? animatedContainerStyle
            : 'flex justify-start w-full gap-x-[46px] md:gap-x-[60px] '
        }
        style={{ x: transformedX }}
      >
        {svgIconsFromCatalogRandome_data
          .slice(0, numberOfSvgCells)
          .map(({ id, Icon }, i) => (
            <div
              key={`${i}-${id}`}
              className={`fc ${cellStyle} aspect-square disable`}
            >
              <Icon
                className={`fc ${cellStyle} aspect-square`}
                colorFG={corpoColors.greyShade1}
              />
            </div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default IconsMarquee;

/*
__1: approach that is base on stete and calculation where marquee is according to scroll value
*/
// interface Props {
//   numberOfSvgCells: number;
//   svgContainerSizes: string;
//   svgOffset: number;
//   //___
//   componentIsInView?: boolean;
//   transitionDuration?: number;
//   transitionDelay?: number;
//   containerStyle?: string;

// }
// const [scrollDistance, setScrollDistance] = useState<number>(0);
// useEffect(() => {
//   const measuredElement = elementRef.current;
//   if (measuredElement) {
//     const rect = measuredElement.getBoundingClientRect();
//     const viewportHeight = window.innerHeight;
//     const scrollTop =
//       window.pageYOffset || document.documentElement.scrollTop;
//     const hiddenAboveViewport = rect.top + scrollTop;
//     const pixelsToScroll = hiddenAboveViewport - viewportHeight;
//     //___or...
//     // const pixelsToScroll = rect.top - viewportHeight;

//     // setScrollDistance(pixelsToScroll);
//     // setContenerWidth(rect.right);
//     //___
//     // console.log('rect.top:', rect.top);
//     // console.log('pixelsToScroll:', pixelsToScroll);
//     // console.log('rect.top:', rect.right);

//     // console.log('viewportHeight:', window.innerHeight);
//     // console.log('window.pageYOffsete:', window.pageYOffset);
//     // console.log(
//     //   'document.documentElement.scrollTop:',
//     //   document.documentElement.scrollTop
//     // );
//     // console.log('hiddenAboveViewport:', hiddenAboveViewport);
//     // console.log('pixelsToScroll:', pixelsToScroll);
//   }
// }, []);
//___framer motion section
// const { scrollY } = useScroll();
//___creat "x" veriable basing on scrollY value
// const x = useSpring(scrollY, springOptions);

//___
{
  /* <motion.div
          className={
            animatedContainerStyle
              ? animatedContainerStyle
              : 'flex gap-x-[46px] md:gap-x-[60px] '
          }
          //___transition-all ease-in-out
          style={{ x: transformedX }}
          //___
          // style={{ x: componentIsInView ? transformedX : 0 }}
          // style={{ x: transformedX }}
          //___
          // style={{ x }}
          // initial={{ x: '-50%' }}
          // animate={{ x: scrollY }}
        ></motion.div> */
}
