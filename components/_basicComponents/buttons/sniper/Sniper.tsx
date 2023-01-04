import React, { ReactNode } from 'react';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';

/**------------------------------------------------------------**/
const Sniper: React.FunctionComponent<{
  children?: ReactNode;
  width?: string;
  height?: string;
  color?: string;
  containerStyle?: string;
  whileHover?: {};
  transition?: {};
}> = ({
  children,
  width,
  height,
  color,
  containerStyle,
  whileHover,
  transition,
}) => {
  return (
    <div className="relative fc  w-full h-full group transition">
      <div className="absolute top-0 left-0 h-[30%] w-[30%] border-t border-l border-light opacity-60 group-hover:opacity-100 group-hover:h-[70%] transition duration-[0.4s] ease-in delay-[0.2s]" />
      <div className="absolute bottom-0 left-0 h-[30%] w-[30%] border-b border-l border-light opacity-60 group-hover:opacity-100 group-hover:w-[70%] transition duration-[0.4s] ease-in delay-[0.2s]" />
      <div className="absolute bottom-0 right-0 h-[30%] w-[30%] border-b border-r border-light opacity-60 group-hover:opacity-100 group-hover:h-[70%] transition duration-[0.4s] ease-in delay-[0.2s]" />
      <div className="absolute top-0 right-0 h-[30%] w-[30%] border-t border-r border-light opacity-60 group-hover:opacity-100 group-hover:w-[70%] transition duration-[0.4s] ease-in delay-[0.2s]" />
    </div>
    // <motion.div
    //   className={`flex justify-between flex-col w-full h-full ${
    //     containerStyle ? containerStyle : ''
    //   }`}
    //   // whileHover={whileHover}
    //   // transition={transition}
    // >
    //   <div
    //     className={`flex justify-between w-full ${height ? height : 'h-[30%]'}`}
    //   >
    //     <div
    //       className={`${width ? width : 'w-[30%]'} h-full border-t border-l ${
    //         color ? color : 'border-grey'
    //       } `}
    //     />
    //     <div
    //       className={`${width ? width : 'w-[30%]'} h-full border-t border-r ${
    //         color ? color : 'border-grey'
    //       }`}
    //     />
    //   </div>
    //   {children}
    //   <div
    //     className={`flex justify-between w-full ${height ? height : 'h-[30%]'}`}
    //   >
    //     <div
    //       className={`${width ? width : 'w-[30%]'} h-full border-b border-l ${
    //         color ? color : 'border-grey'
    //       }`}
    //     />
    //     <div
    //       className={`${width ? width : 'w-[30%]'} h-full border-b border-r ${
    //         color ? color : 'border-grey'
    //       }`}
    //     />
    //   </div>
    // </motion.div>
  );
};

export default Sniper;
