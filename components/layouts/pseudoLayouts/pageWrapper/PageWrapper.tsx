import React, { useEffect } from 'react';
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

  /*
  __1__ With these steps, Next.js app will always scroll to the top of the page when a new page is loaded
  */
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollToTop();
  }, [router.pathname]);

  return (
    <motion.main
      key={router.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={routingAnimation}
      // transition={{ type: 'linear' }}
      // className="flex flex-col items-start w-full h-full "
      className="w-full h-full "
    >
      {children}
    </motion.main>
  );
};

export default PageWrapper;
