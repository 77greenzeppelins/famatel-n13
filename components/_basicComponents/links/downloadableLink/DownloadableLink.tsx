import React, { useState } from 'react';
/**Components**/
import ArrowDownloadIcon from '../../../SVG/icons/ArrowDownloadIcon';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
import { svgTransition } from '../../../../utils/framerMotion/framerMotionUtils';

/**-------------------------------**/
const DownloadableLink: React.FC<{
  staffToDownload: string;
  linkLabel: string;
  textStyle?: string;
}> = ({ staffToDownload, linkLabel, textStyle }) => {
  const [isHovered, setIsHovered] = useState(false);
  /**JSX**/
  return (
    <motion.a
      className="flex items-center justify-between min-w-[92px] gap-3"
      href={staffToDownload}
      target="_blank"
      rel="noopener noreferrer"
      //___
      download
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.span
        animate={{ y: isHovered ? '5%' : 0 }}
        // transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        transition={svgTransition}
        // transition={{ duration: 0.4, delay: 0.2 }}
      >
        <ArrowDownloadIcon
          className={
            'w-4 h-4 sm:w-6 sm:h-6 stroke-grey group-hover:stroke-light ease-in duration-300 delay-100'
            //___animate-bounce animate-ping group-hover:translate-y-1 group-hover:translate-x-1 group-hover:scale-[1.1]
            //___group-hover:translate-y-1 ease-in duration-300 delay-300
          }
        />
      </motion.span>
      <p className={textStyle}> {linkLabel}</p>
    </motion.a>
  );
};

export default DownloadableLink;

{
  /* <a
  className={textStyle}
  href={staffToDownload}
  target="_blank"
  rel="noopener noreferrer"
  //___
  download
>
  {linkLabel}
</a>; */
}
