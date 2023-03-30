/**Components**/
import HeaderLogoLink from './logoLink/HeaderLogoLink';
import NavForMainPages from './navSection/NavForMainPages';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
import { headerVariants } from '../../../../utils/framerMotion/framerMotionUtils';
import { useRouter } from 'next/router';

/******************************************************************************/
const Header: React.FunctionComponent = () => {
  const router = useRouter();
  const condition = router.pathname === '/';

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
              width: condition ? '0%' : '100%',
              opacity: condition ? 0 : 1,
            }}
            animate={{
              width: '100%',
              opacity: 1,
              transition: { duration: 0.8, delay: 1.6 },
            }}
          />

          <motion.div
            className="flex items-center justify-between w-full h-full"
            variants={headerVariants}
            initial="from"
            animate="to"
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
