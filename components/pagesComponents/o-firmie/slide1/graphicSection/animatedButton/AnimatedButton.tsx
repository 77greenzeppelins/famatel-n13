import React, { useState } from 'react';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';
/**FReact Aria Staff*/
import { FocusRing } from 'react-aria';

/**--------------------------------------------------------**/
const AnimatedButton = () => {
  const [state, setState] = useState(false);
  /**JSX**/
  return (
    <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black">
      <motion.button
        aria-label="Zobacz opis wtyczki"
        className="absolute top-[20%] left-[30%] h-[65%] w-[65%] select-none touch-none focus:outline-none no-sparkling"
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        }}
        onClick={() => console.log('...........AnimatedButton')}
      >
        <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-between w-full h-[30%] ">
            <div className="w-[30%] h-full border-t border-l border-grey" />
            <div
              className={`w-[30%] h-full border-t border-r ${
                state ? ' border-corpo' : 'border-grey'
              } border-grey`}
            />
          </div>
          <div className="flex justify-between  w-full h-[30%] ">
            <div className="w-[30%] h-full border-b border-l border-grey" />
            <div className="w-[30%] h-full border-b border-r border-grey" />
          </div>
        </div>
      </motion.button>
    </FocusRing>
  );
};

export default AnimatedButton;
