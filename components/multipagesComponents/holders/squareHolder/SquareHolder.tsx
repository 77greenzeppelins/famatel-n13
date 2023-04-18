import React, { ReactNode } from 'react';
/*Hook Staff*/
import useMeasure from 'react-use-measure';
/**Basic Data*/
const defaultRefDivStyle = 'fc relative h-full w-full';
const defaultSquareDivStyle = 'relative bg-light p-[6px] overflow-hidden';

/**TS**/
interface Props {
  children?: ReactNode;
  squareDivStyle?: string;
  refDivStyle?: string;
}

const SquareHolder: React.FC<Props> = ({
  refDivStyle,
  squareDivStyle,
  children,
}) => {
  /**Hook Section**/
  const [ref, { width, height }] = useMeasure();
  /**...WTF**/
  // console.log('width / height', width, height);
  /**
   * JSX
   * how it works?
   * <div data-component="SquareImageHolder__container"> fills parent's container (inherits its size) & it works as a "template" for useMeasure()
   * second <div>'s aim is to get "square shape"; it tooks into accoumt "SquareImageHolder__container" width & height, chooses lower value and readjust itself to square shape...
   **/
  return (
    <div
      data-component="SquareHolder__container"
      ref={ref}
      className={refDivStyle ? refDivStyle : defaultRefDivStyle}
    >
      <div
        className={`${
          squareDivStyle ? squareDivStyle : defaultSquareDivStyle
        } relative`}
        style={{
          width: Math.min(width, height),
          height: Math.min(width, height),
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SquareHolder;

// width: width >= height ? height : width,
// height: height >= width ? width : height,
