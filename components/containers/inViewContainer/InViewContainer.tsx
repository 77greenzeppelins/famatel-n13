import React, { ReactElement, useRef, cloneElement } from 'react';
/**Hook Staff**/
import useMeasure from 'react-use-measure';
/**FramerMotion Staff**/
import { motion, useInView } from 'framer-motion';

/**TS**/
interface Props {
  //   children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  children: ReactElement | ReactElement[];
  outherContainerStyle?: string;
  innerContainerStyle?: string;
  measuredElementStyle?: string;
  topFactor?: number;
  bottomFactor?: number;
  animationDelay?: number;
}

/**-------------------------------------------------**/
const InViewContainer: React.FC<Props> = ({
  children,
  outherContainerStyle,
  innerContainerStyle,
  measuredElementStyle,
  topFactor = 0.9,
  bottomFactor = 0.9,
  animationDelay = 0,
}) => {
  const [ref, bounds] = useMeasure();
  const elementInView = useRef(null);
  const isInView = useInView(elementInView, {
    margin: `-${bounds.height * topFactor}px 0px -${
      bounds.height * bottomFactor
    }px 0px`,
    // once: true, // amount: 'all', // amount: 1,
  });
  // console.log('InViewContainer / additionalCompNumb', );
  // console.log('InViewContainer / bounds.width', bounds.width);

  /**JSX**/
  return (
    <div
      data-layout="OutherContainer"
      ref={elementInView}
      className={outherContainerStyle ? outherContainerStyle : 'w-full h-full'}
    >
      <div
        data-layout="InnerContainer"
        className={innerContainerStyle ? innerContainerStyle : 'w-full h-full'}
      >
        <div
          ref={ref}
          data-layout="MeasuredElementContainer"
          className={
            measuredElementStyle ? measuredElementStyle : 'w-full h-full'
          }
        >
          {/* {React.cloneElement(children, {
            componentIsInView: isInView,
            animationDelay: animationDelay,
          })} */}
          {Array.isArray(children)
            ? children.map((child, i) =>
                React.cloneElement(child, {
                  key: i,
                  componentIsInView: isInView,
                  animationDelay: animationDelay,
                })
              )
            : React.cloneElement(children, {
                componentIsInView: isInView,
                animationDelay: animationDelay,
              })}
        </div>
      </div>
    </div>
  );

  /**.....WTF**/
  //   const clonedChild = React.Children.map(children, child => {
  //     return <>{cloneElement(child, { componentIsInView })}</>;
  //   });

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

export default InViewContainer;
