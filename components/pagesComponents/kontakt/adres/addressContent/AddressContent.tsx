import { motion } from 'framer-motion';
import React from 'react';
/**Components**/
import ScaledYWrapper from '../../_scaledYWrapper/ScaledYWrapper';
/**Hardcoded Data*/
const address = ['Biuro/Magazyn', 'Ul. Willowa 5', '58-260 Bielawa'];
const staggerFactors = [1.3, 1.6, 1.9];
const labelStyle =
  'text-grey text-[1rem] lg:text-2xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 group-hover:text-light  ease-in duration-300  origin-center break-all';

/**TS**/
type Props = {
  componentIsInView?: boolean;
  animationDelay?: number;
};

/**------------------------------------**/
const AddressContent: React.FC<Props> = ({
  componentIsInView,
  animationDelay,
}) => {
  console.log('.....AddressContent / componentIsInView', componentIsInView);

  /**JSX**/
  return (
    <div className="flex flex-col gap-y-4">
      <div className="w-full overflow-hidden">
        <ScaledYWrapper
          //    animationDelay={animationDelay}
          animationDelay={animationDelay && animationDelay * 1}
          isInView={componentIsInView}
        >
          <p className="text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025">
            {`Adres ${componentIsInView && componentIsInView.toString()}`}
          </p>
        </ScaledYWrapper>

        <motion.div
          className={`w-full h-[1px] border-b-[0.5px] 'border-grey'  `}
          /*
          ${
            componentIsInView ? 'border-corpo' : 'border-grey'
          } delay-1000 duration-1000
          */

          //   initial={{ x: '-110%', opacity: 0 }}
          //   animate={{ x: 0, opacity: 1 }}
          //___animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          animate={{
            opacity: componentIsInView ? 1 : 0,
            x: componentIsInView ? 0 : '-110%',
          }}
          transition={{
            duration: 0.8,
            // delay: animationDelay && animationDelay * 3,
            delay: 5,
          }}
        />
      </div>
      <div className="flex flex-col gap-y-4  items-start  md:flex-row md:items-center md:gap-x-20 pt-2">
        <ul className="flex flex-col gap-4  group">
          {address.map((label, index) => (
            <ScaledYWrapper
              key={index}
              animationDelay={
                animationDelay && animationDelay * staggerFactors[index]
              }
              isInView={componentIsInView}
            >
              <li>
                <p className={labelStyle}>{label}</p>
              </li>
            </ScaledYWrapper>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddressContent;
