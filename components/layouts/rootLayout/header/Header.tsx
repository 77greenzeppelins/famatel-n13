/**Components**/
import HeaderLogoLink from './logoLink/HeaderLogoLink';
import NavForMainPages from './navSection/NavForMainPages';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
// import { headerVariants } from '../../../../utils/framerMotion/framerMotionUtils';
import { useRouter } from 'next/router';
/**GlobalState Staff*/
// import { useSnapshot } from 'valtio';
// import { appGlobalStates } from '../../../../globalState/globalState';
// import { useEffect } from 'react';

/******************************************************************************/
const Header: React.FunctionComponent = () => {
  const router = useRouter();
  const condition = router.pathname === '/';
  // const condition = true;

  /**GlobalState*/
  // const snap = useSnapshot(appGlobalStates);
  // const snap2 = useSnapshot(state);
  /**...*/
  // useEffect(() => {
  //   console.log('snap.initialVal', snap.initialVal);
  // }, [snap.initialVal]);

  // const handler = () => {
  //   ++snap.someNumb;
  //   console.log('handler / snap.someNumb', snap.someNumb);
  // };

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
            initial={{
              // width: condition ? '0%' : '100%',
              // opacity: condition ? 0 : 1,
              width: '0%',
              opacity: 0,
            }}
            animate={{
              width: '100%',
              opacity: 1,
              transition: {
                duration: condition ? 0.8 : 0,
                delay: condition ? 1.6 : 0,
              },
            }}
          />

          <motion.div
            className="flex items-center justify-between w-full h-full"
            initial={{ y: '-100%' }}
            animate={{
              y: 0,
              transition: {
                duration: condition ? 0.8 : 0,
                delay: condition ? 2.2 : 0,
              },
            }}
          >
            <div className="origin-left h-full flex items-center pb-1">
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
