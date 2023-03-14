import React from 'react';
import useMeasure from 'react-use-measure';
/**TS**/
type Props = {
  componentIsInView?: boolean;
};

/**------------------------------------------------**/
const SquareWithModelNumber: React.FC<Props> = ({
  componentIsInView = false,
}) => {
  const [ref, bounds] = useMeasure();
  // const val = bounds.width * 1.5;
  const val = bounds.width + 20;

  return (
    <div
      className={`fc flex-col  ${
        componentIsInView ? 'bg-corpo translate-x-0' : 'bg-dark translate-x-4'
      } duration-[0.9s] delay-[0.6] p-2 disable-soft`}
      style={{ width: val, aspectRatio: '1/1' }}
    >
      <p
        ref={ref}
        className={` text-center text-[1.5rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3rem]  font-bold tracking-[2px] leading-tight  ${
          componentIsInView ? 'text-light' : 'text-dark'
        } duration-[0.9s] delay-[0.6] pb-1`}
        style={{ width: 'content-fit' }}
      >
        14307
      </p>
      <div
        className={`w-full h-[1px] ${
          componentIsInView ? 'bg-light ' : 'bg-dark '
        } duration-[0.9s] delay-[0.6]`}
      />
      <p
        className={`header-link-label  ${
          componentIsInView ? 'text-light' : 'text-dark'
        } duration-[0.9s] delay-[0.6]`}
        style={{ width: 'content-fit' }}
      >
        model
      </p>
    </div>
  );
};

export default SquareWithModelNumber;
