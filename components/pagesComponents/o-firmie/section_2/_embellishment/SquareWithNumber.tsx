import React from 'react';
/**Hook Staff**/
// import useMeasure from 'react-use-measure';
/**TS**/
type Props = {
  componentIsInView?: boolean;
  pseudoNumber?: string;
  text?: string;
};

/**------------------------------------------------**/
const SquareWithNumber: React.FC<Props> = ({
  componentIsInView = false,
  pseudoNumber = '000',
  text = 'lorem',
}) => {
  // const [ref, bounds] = useMeasure();
  // const val = bounds.width * 1.5;
  // const val = bounds.width + 20;

  return (
    <div
      className={`fc flex-col  ${
        componentIsInView ? 'bg-corpo translate-x-0' : 'bg-dark translate-x-4'
      } duration-[0.9s] delay-[0.6] p-2 disable-soft w-[80px] h-[80px] md:w-[120px] md:h-[120px]`}
      style={{
        //  width: val,
        aspectRatio: '1/1',
      }}
    >
      <p
        // ref={ref}
        className={` text-center text-[1.25rem] xs:text-[1.5rem]  md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem]   font-bold tracking-[2px] leading-tight  ${
          componentIsInView ? 'text-light' : 'text-dark'
        } duration-[0.9s] delay-[0.6] pb-1`}
        style={{ width: 'content-fit' }}
      >
        {pseudoNumber}
      </p>
      <div
        className={`w-full h-[1px] ${
          componentIsInView ? 'bg-light ' : 'bg-dark '
        } duration-[0.9s] delay-[0.6]`}
      />
      <p
        className={`header-link-label text-center ${
          componentIsInView ? 'text-light' : 'text-dark'
        } duration-[0.9s] delay-[0.6]`}
        style={{ width: 'content-fit' }}
      >
        {text}
      </p>
    </div>
  );
};

export default SquareWithNumber;
