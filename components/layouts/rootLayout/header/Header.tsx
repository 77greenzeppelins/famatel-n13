import { useRouter } from 'next/router';
/*Components*/
import HeaderLogoLink from './logoLink/HeaderLogoLink';
import NavForMainPages from './navSection/NavForMainPages';
// import MobileMenu from './mobileMenu/MobileMenu';
/*FramerMotion Staff*/
import { motion } from 'framer-motion';
/*Basic Data*/
import { mainPages, zIndex } from '../../../../data/_data';
import { tailwindStyles } from '../../../../data/_styleData';

// import localFont from '@next/font/local';
// const haasFont = localFont({
//   src: '../../../../public/fonts/HaasGrotDisp-55Roman.woff2',
// });

/******************************************************************************/
const Header = () => {
  /**Hook Section*/
  const router = useRouter();
  const condition = router.pathname === mainPages[5].url;

  /**JSX*/
  return (
    <header
      data-component="Header__container"
      className={`fixed w-screen top-0 left-0 right-0 h-[50px] md:h-[60px] z-[500] `}
    >
      <div
        // className="h-full mx-auto px-[2%] md:px-[60px]"
        className={`${tailwindStyles.innerContainer} `}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-full border-b border-grey"
            initial={{ width: '0%', opacity: 0 }}
            animate={{
              width: '100%',
              opacity: 1,
              transition: { duration: 0.8 },
            }}
          />
          <motion.div
            className="flex items-center justify-between w-full h-full"
            initial={{ y: '-100%' }}
            animate={{ y: 0, transition: { duration: 0.8 } }}
          >
            <div className="origin-left fc scale-75   md:scale-100">
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
