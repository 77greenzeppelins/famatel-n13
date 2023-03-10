import React, { ReactElement, useRef, cloneElement } from 'react';
/**Hook Staff**/
import useMeasure from 'react-use-measure';
/**FramerMotion Staff**/
import { useInView } from 'framer-motion';

/**TS**/
interface Props {
  //   children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  children: ReactElement;
  outherContainerStyle?: string;
  innerContainerStyle?: string;
  measuredElementStyle?: string;
}

// const ReusableComponent: React.FC<Props> = ({ children, value }) => {
//   return <>{React.cloneElement(children, { value })}</>;
// };

const InViewGenContainer: React.FC<Props> = ({
  children,
  outherContainerStyle,
  innerContainerStyle,
  measuredElementStyle,
}) => {
  const [ref, bounds] = useMeasure();
  const elementInView = useRef(null);
  const isInView = useInView(elementInView, {
    margin: `-${bounds.height * 0.9}px 0px -${bounds.height * 0.9}px 0px`,
    // once: true,
    // amount: 'all',
    // amount: 1,
  });
  /**.....WTF**/
  //   const clonedChild = React.Children.map(children, child => {
  //     return <>{cloneElement(child, { componentIsInView })}</>;
  //   });

  /**JSX**/
  return (
    <div
      data-layout="OutherContainer"
      // ref={scrollRef}
      ref={elementInView}
      className={
        outherContainerStyle
          ? outherContainerStyle
          : 'relative flex flex-col inner-px-md-xl-xxl'
      }
    >
      <div
        data-layout="InnerContainer"
        className={innerContainerStyle ? innerContainerStyle : 'xl:px-20'}
      >
        <div
          ref={ref}
          data-layout="MeasuredElementContainer"
          className={
            measuredElementStyle ? measuredElementStyle : 'w-full h-full bg-vB'
          }
        >
          {React.cloneElement(children, { value: isInView })}
        </div>
      </div>
    </div>
  );

  // <div>{clonedChild}</div>
  // <div
  //   data-layout="OutherContainer"
  //   // ref={scrollRef}
  //   ref={elementInView}
  //   className={
  //     outherContainerStyle
  //       ? outherContainerStyle
  //       : 'relative flex flex-col inner-px-md-xl-xxl'
  //   }
  // >
  //   <div
  //     data-layout="InnerContainer"
  //     className={innerContainerStyle ? innerContainerStyle : 'xl:px-20'}
  //   >
  //     <div
  //       ref={ref}
  //       data-layout="MeasuredElementContainer"
  //       className={
  //         measuredElementStyle ? measuredElementStyle : 'w-full h-full bg-vB'
  //       }
  //     >
  //       {clonedChild}
  //     </div>
  //   </div>
  // </div>
};

export default InViewGenContainer;
