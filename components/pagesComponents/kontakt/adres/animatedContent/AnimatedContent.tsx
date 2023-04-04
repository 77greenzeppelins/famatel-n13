import { motion } from 'framer-motion';
import React from 'react';
import FadingHeader from '../../../../multipagesComponents/pseudoHeaders/fadingHeader/FadingHeader';
import IsInViewContainer from '../../_isInViewContainer/IsInViewContainer';

const address = ['Biuro/Magazyn', 'Ul. Willowa 5', '58-260 Bielawa'];
const labelStyle =
  'text-grey text-[1rem] lg:text-2xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 group-hover:text-light  ease-in duration-300  origin-center break-all';
/**TS**/
type Props = {
  componentIsInView?: boolean;
  transitionDuration?: number;
  transitionDelay?: number;
  text?: string;
};

/**----------------------------------**/
const AnimatedContent: React.FC<Props> = ({
  componentIsInView = false,
  transitionDuration = 0.6,
  transitionDelay = 0.2,
  text,
}) => {
  return (
    <motion.div
      className=" flex flex-col gap-y-10"
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1, transition: { duration: 0.01, delay: 0.2 } }}
      animate={{
        opacity: componentIsInView ? 1 : 0,
        y: componentIsInView ? 0 : '5%',
      }}
      transition={{
        duration: transitionDuration,
        delay: transitionDelay,
      }}
    >
      <FadingHeader label={'Adres'} />
      <div className="pt-2">
        <ul className="flex flex-col gap-5  group">
          {address.map((label, index) => (
            <li key={index}>
              <p className={labelStyle}>{label}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default AnimatedContent;
