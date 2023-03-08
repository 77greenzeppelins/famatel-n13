import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { corpoColors } from '../../../../../data/_data';

const PseudoButton: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      className="fc aspect-square h-full border-[0.5px] border-greyShade1"
      whileTap={{ scale: 0.95, borderColor: corpoColors.orange }}
    >
      {children}
    </motion.div>
  );
};

export default PseudoButton;
