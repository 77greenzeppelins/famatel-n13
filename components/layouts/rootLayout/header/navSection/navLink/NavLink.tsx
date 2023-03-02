import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
/**Components*/
import AriaJSLink from '../../../../../_basicComponents/links/ariaJSLink/AriaJSLink';
import DropDownMenusHolder from '../../dropDownMenus/DropDownMenusHolder';
import CatalogOpener from '../catalogOpener/CatalogOpener';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';

/**********************************************************************************/
const NavLink: React.FunctionComponent<{
  label: string;
  url: string;
  hasDropDownMenu: boolean;
}> = ({ label, url, hasDropDownMenu }) => {
  /**useRouter Section*/
  /**why: for style sake;  I want link to be in corpo color and has no border-bottom when user is on its corresponding page */
  const router = useRouter();
  const linkStyleisHovered = router.pathname === url;

  /**Local State mr_1**/
  const [hovererState, setHoverState] = useState<{
    isHovered: boolean;
    label: string;
  }>({
    isHovered: false,
    label: '',
  });
  /**Local State mr_2**/
  const [isClicked, setIsClicked] = useState(false);

  /**Hover Handlers*/
  // const onHoverStartHandler = (event: MouseEvent) => {
  //   //___second param: info: EventInfo
  //   if (!isClicked) {
  //     const target = event.target as HTMLElement; //TS requirements
  //     setHoverState({ isHovered: true, label: target.innerText });
  //   }
  // };

  // const onHoverEndHandler = (event: MouseEvent) => {
  //   // console.log('.......onHoverEndHandler');
  //   if (!isClicked) {
  //     setHoverState({ isHovered: false, label: '' });
  //   }
  // };

  /**It allowes to close dropdownMenu when url changes*/
  useEffect(() => {
    return () => {
      setHoverState({ isHovered: false, label: '' });
      setIsClicked(false);
    };
  }, [router.asPath]);

  /**JSX*/
  return (
    <>
      <motion.li
        data-component="NavLink_container"
        className="relative ml-6 fc"
        //___my-auto
        // onHoverStart={onHoverStartHandler}
        // onHoverEnd={onHoverEndHandler}
      >
        <div
          data-layout="wrapper_for_DropDownMenuHolder"
          className="fixed flex justify-center left-0 right-0 top-[50px] bottom-[1px] bg-corpo"
        >
          <DropDownMenusHolder
            isHovered={hovererState.isHovered}
            label={hovererState.label}
            hasDropDownMenu={hasDropDownMenu}
          />
        </div>

        <AriaJSLink
          linkHref={url}
          controlsSet={{ background: 'transparent' }}
          controlsStart={{
            background: 'transparent',
          }}
          aStyle={`relative fc gap-1 w-full h-full cursor-pointer bg-transparent select-none touch-none focus:outline-none group ${
            hasDropDownMenu ? 'pr-2' : ''
          }`}
        >
          <p
            className={`header-link-label ${
              linkStyleisHovered ? 'text-corpo' : 'text-grey'
            }`}
          >
            <span>{label}</span>
          </p>

          <div
            className={`absolute border-b border-grey h-[32px] ${
              linkStyleisHovered ? 'w-[0%]' : 'w-full'
            } inset-0 opacity-0 hover:opacity-100  ease-in duration-300 `}
            //__w-full h-full
          />
        </AriaJSLink>
      </motion.li>
      {hasDropDownMenu ? (
        <CatalogOpener
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          setHoverState={setHoverState}
          label={label}
        />
      ) : null}
    </>
  );
};

export default NavLink;
