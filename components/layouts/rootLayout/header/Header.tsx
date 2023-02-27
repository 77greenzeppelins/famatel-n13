import { useRouter } from 'next/router';
/*Components*/
import HeaderLogoLink from './logoLink/HeaderLogoLink';
import NavForMainPages from './navSection/NavForMainPages';
// import MobileMenu from './mobileMenu/MobileMenu';
/*FramerMotion Staff*/
import { motion } from 'framer-motion';
/*Basic Data*/
import { mainPages } from '../../../../data/_data';

/******************************************************************************/
const Header = () => {
  /**Hook Section*/
  const router = useRouter();
  const condition = router.pathname === mainPages[0].url;

  /**JSX*/
  return (
    <header
      data-component="Header__container"
      className={`fixed w-screen top-0 left-0 right-0 md:h-[50px] z-[500] `}
    >
      <div className="h-full w-full inner-px-md-lg">
        <div className="relative w-full h-full">
          {/* {condition ? null : ( */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-full border-b border-greyShade1"
            initial={{ width: '0%', opacity: 0 }}
            animate={{
              width: '100%',
              opacity: 1,
              transition: { duration: 0.8 },
            }}
          />
          {/* )} */}

          <motion.div
            className="flex items-center justify-between w-full h-full"
            initial={{ y: '-100%' }}
            animate={{ y: 0, transition: { duration: 0.8 } }}
          >
            <div className="origin-left h-full flex items-end scale-75 md:scale-100 pb-1 ">
              <HeaderLogoLink />
            </div>
            <div className="h-full ">
              <NavForMainPages />
            </div>
            {/* <div className=" h-[80%] aspect-1 md:hidden ">
              <MobileMenu />
            </div> */}
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
