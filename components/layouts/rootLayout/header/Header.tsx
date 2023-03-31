/**Components**/
import HeaderLogoLink from './logoLink/HeaderLogoLink';
import NavForMainPages from './navSection/NavForMainPages';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
import { headerVariants } from '../../../../utils/framerMotion/framerMotionUtils';
import { useRouter } from 'next/router';
/**GlobalState Staff*/
// import { useSnapshot } from 'valtio';
// import { appFirstApperance, state } from '../../../../globalState/globalState';

/******************************************************************************/
const Header: React.FunctionComponent = () => {
  const router = useRouter();
  const condition = router.pathname === '/';
  /**GlobalState*/
  // const snap = useSnapshot(appFirstApperance);
  // const snap2 = useSnapshot(state);
  /**...*/
  // console.log('appFirstApperance.isCompleted', appFirstApperance.isCompleted);
  /**JSX*/
  return (
    <header
      data-component="Header__container"
      className={`fixed w-screen top-0 left-0 right-0 h-[50px] z-[500] bg-dark`}
    >
      <div className="h-full w-full inner-px-md-xl-xxl ">
        <div className="relative w-full h-full">
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-full border-b-[0.5px] border-greyShade1"
            // initial={{ width: '0%', opacity: 0 }}
            initial={{
              // width: condition ? '0%' : '100%',
              // opacity: condition ? 0 : 1,
              width: '0%',
              opacity: 0,
            }}
            animate={{
              width: '100%',
              opacity: 1,
              transition: { duration: 0.8, delay: condition ? 1.6 : 0.3 },
            }}
            // onAnimationComplete={() => !snap.isCompleted}
          />

          <motion.div
            className="flex items-center justify-between w-full h-full"
            // variants={headerVariants}
            // initial="from"
            // animate="to"
            // onAnimationComplete={() => {
            //   console.log('...onAnimationComplete');
            //   !snap.isCompleted;
            //   ++state.count;
            //   console.log(
            //     'appFirstApperance.isCompleted',
            //     appFirstApperance.isCompleted
            //   );
            //   console.log('state.count', state.count);
            // }}
            /*
          
 
            */
            initial={{ y: '-100%' }}
            animate={{
              y: 0,
              transition: { duration: 0.8, delay: condition ? 2.2 : 0.4 },
            }}
          >
            <div className="origin-left h-full flex items-center  pb-1">
              <HeaderLogoLink />
            </div>
            <div className="flex items-center justify-end h-full w-full ">
              <NavForMainPages />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
