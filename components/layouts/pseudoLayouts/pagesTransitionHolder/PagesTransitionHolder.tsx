import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
/*FramerMotion Staff*/
import { motion, AnimatePresence } from 'framer-motion';
import { routingAnimation as variants } from '../../../../utils/framerMotion/framerMotionUtils';

/*-------------------------------------------------------*/
const PageTransitionHolder: React.FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  /**Router Section*/
  const router = useRouter();

  // useEffect(() => {
  //   console.log('pathname:', pathname);
  // }, [pathname]);

  /**JSX*/
  return (
    <AnimatePresence
      // initial={false}
      // exitBeforeEnter={true}//depricated
      mode="wait"
      // onExitComplete={() => window.scrollTo(0, 0)}
      // onExitComplete={() => console.log('pathname:', pathname)}
    >
      <motion.main
        data-container="PageTransitionHolder__container"
        className="w-full h-full"
        key={router.route}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="axit"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default PageTransitionHolder;
