import React from 'react';
/**Components*/
import InViewContainer from '../../../../containers/inViewContainer/InViewContainer';
import AnimatedText from './animatedText/AnimatedText';

/**---------------------------------**/
const TextForEntry = () => {
  /**JSX**/
  return (
    <InViewContainer
      animationDelay={2}
      outherContainerStyle="relative flex flex-col inner-px-md-xl-xxl "
      innerContainerStyle="xl:px-20 "
      // measuredElementStyle="w-full h-full bg-vR"
      topFactor={0.6}
    >
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
