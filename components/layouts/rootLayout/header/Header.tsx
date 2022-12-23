import { useRouter } from 'next/router';
/*Components*/
import HeaderLogoLink from './logoLink/HeaderLogoLink';
import NavForMainPages from './navSection/NavForMainPages';
// import HeaderLogoLink from './headerLogoLink/HeaderLogoLink';
// import NavForMainPages from './headerLink/navForMainPages/NavForMainPages';
// import MobileMenu from './mobileMenu/MobileMenu';
/*Basic Data*/
import { mainPages, zIndex } from '../../../../data/_data';
import { tailwindStyles } from '../../../../data/_styleData';

/******************************************************************************/
const Header = () => {
  /**Hook Section*/
  const router = useRouter();
  const condition = router.pathname === mainPages[5].url;

  /**JSX*/
  return (
    <header
      data-component="Header__container"
      className={
        `fixed w-screen top-0 left-0 right-0 h-[50px] md:h-[60px]  bg-dark border-b border-grey z-[500]`
        //___${zIndex.header}
      }
    >
      <div
        className="h-full mx-auto px-[2%] md:px-[60px]"
        //  className={`${tailwindStyles.innerContainer}`}
      >
        <div className="flex items-center justify-between w-full h-full ">
          <div className="origin-left fc">
            <HeaderLogoLink />
          </div>
          <div className="h-full ">
            <NavForMainPages />
          </div>
          {/* <div className=" h-[80%] aspect-1 md:hidden ">
              <MobileMenu />
            </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
