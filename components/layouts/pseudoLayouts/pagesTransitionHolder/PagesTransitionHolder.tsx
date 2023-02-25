import { ReactNode } from 'react';
import { useRouter } from 'next/router';
/*FramerMotion Staff*/
import { motion, AnimatePresence } from 'framer-motion';
import { routingAnimation as variants } from '../../../../utils/framerMotion/framerMotionUtils';

/******************************************************************************************/
const PageTransitionHolder: React.FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  /**Router Section*/
  const { pathname } = useRouter();

  /**JSX*/
  return (
    <AnimatePresence
      // initial={false}
      // exitBeforeEnter={true}//depricated
      mode="wait"
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        data-container="PageTransitionHolder__container"
        className="w-full h-full"
        key={pathname}
        variants={variants}
        initial="out"
        animate="in"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionHolder;
