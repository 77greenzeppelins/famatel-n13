import { useRouter } from 'next/router';
/**Components**/
import HeaderLogoLink from './logoLink/HeaderLogoLink';
import NavForMainPages from './navSection/NavForMainPages';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';

/******************************************************************************/
const Header1: React.FunctionComponent = () => {
  /**...**/
  const router = useRouter();
  const condition = router.pathname === '/';

  /**JSX*/
  return (
    <header
      data-component="Header__container"
      className={`fixed w-screen top-0 left-0 right-0 h-[50px] z-[500] bg-dark`}
    >
      <div className="w-full h-full inner-px-md-xl-xxl ">
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
            <div className="flex items-center h-full pb-1 origin-left">
              <HeaderLogoLink />
            </div>
            <div className="flex items-center justify-end w-full h-full ">
              <NavForMainPages />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
