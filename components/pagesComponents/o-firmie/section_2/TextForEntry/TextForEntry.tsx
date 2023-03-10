import React, { useRef } from 'react';
/**Components*/
import InViewContainer from '../../../../containers/inViewContainer/InViewContainer';
import AnimatedText from './animatedText/AnimatedText';
/**Hook Staff**/
import useMeasure from 'react-use-measure';
/**Framer Motion Staff**/
import {
  motion,
  useInView,
  // useScroll,
  // useTransform,
  // useSpring,
} from 'framer-motion';

/**Basic Data*/
// import { story } from '../../../../../data/_data';

/**---------------------------------**/
const TextForEntry = () => {
  // const scrollRef = useRef(null);
  const [ref, bounds] = useMeasure();
  const elementInView = useRef(null);
  const isInView = useInView(elementInView, {
    margin: `-${bounds.height * 0.9}px 0px -${bounds.height * 0.9}px 0px`,
    // once: true,
    // amount: 'all',
    // amount: 1,
  });
  /**.....WTF**/
  console.log('isInView', isInView);

  /**JSX**/
  return (
    <InViewContainer>
      <AnimatedText />
    </InViewContainer>
  );
};

export default TextForEntry;

// type Props = {
//   value?: boolean;
// };

// const ChildComponent: React.FC<Props> = ({ value = false }) => {
//   // Use the `value` prop in the child component
//   return (
//     <div className="text-corpo text-2xl">
//       The value is: {value ? 'true' : 'false'}
//     </div>
//   );
// };

// <div>
//   <ReusableComponent>
//     <ChildComponent />
//   </ReusableComponent>
// </div>

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
