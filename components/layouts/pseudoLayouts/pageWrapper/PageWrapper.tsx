import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { routingAnimation } from '../../../../utils/framerMotion/framerMotionUtils';

routingAnimation;
/**TS**/
interface Props {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  const router = useRouter();

  return (
    <motion.main
      key={router.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={routingAnimation}
      // transition={{ type: 'linear' }}
      className="flex flex-col items-start w-full h-full "
    >
      {children}
    </motion.main>
  );
};

export default PageWrapper;
