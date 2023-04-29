import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import React, { useRef } from 'react';
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
  svgContainerSizes: string;
  animationOffset: number;
  //___
  componentIsInView?: boolean;
  transitionDuration?: number;
  transitionDelay?: number;
  containerStyle?: string;
  // yFactor?: string;
}

const IconsMarquee: React.FC<Props> = ({
  numberOfSvgCells,
  svgContainerSizes,
  animationOffset,
  componentIsInView = false,
  transitionDuration = 0.4,
  transitionDelay = 0.1,
  containerStyle,
  // yFactor = '5%',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  /**...*/

  // useEffect(() => {
  //   // console.log('scrollDistance:', scrollDistance);
  //   // console.log('contenerWidth:', contenerWidth);
  //   console.log('numberOfSvgCells', numberOfSvgCells);
  // }, [numberOfSvgCells]);
  console.log('animationOffset', animationOffset);

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
    value => (value * animationOffset) / -3
  );
  //___helper
  useMotionValueEvent(scrollYProgress, 'change', latest => {
    console.log('scrollYProgress changed to', latest);
  });

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
        data-component="IconsMarquee__container "
        ref={elementRef}
        className="flex w-full justify-start"
        // style={{ transform: `translateX(${contenerWidth / 2}px)` }}
      >
        <motion.div
          className="flex gap-10 "
          //___transition-all ease-in-out
          style={{ x: transformedX }}
          //___
          // style={{ x: componentIsInView ? transformedX : 0 }}
          // style={{ x: transformedX }}
          //___
          // style={{ x }}
          // initial={{ x: '-50%' }}
          // animate={{ x: scrollY }}
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
