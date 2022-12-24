import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
/**Components*/
import AriaJSLink from '../../../../../_basicComponents/links/ariaJSLink/AriaJSLink';
import DropDownMenusHolder from '../../dropDownMenus/DropDownMenusHolder';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
// import Link from 'next/link';
/**Basic Data**/
// import { tailwindStyles } from '../../../../../../data/_styleData';

/**********************************************************************************/
const NavLink: React.FunctionComponent<{
  label: string | number;
  url: string;
  hasDropDownMenu: boolean;
}> = ({ label, url, hasDropDownMenu }) => {
  /**useRouter Section*/
  /**why: for style sake;  I want link to be in corpo color and has no border-bottom when user is on its corresponding page */
  const router = useRouter();
  const linkStyleisHovered = router.pathname === url;

  /**Local State*/
  const [hovererState, setHoverState] = useState<{
    isHovered: boolean;
    label: string;
  }>({
    isHovered: false,
    label: '',
  });
  /**Hover Handlers*/
  const onHoverStartHandler = (event: MouseEvent) => {
    //___second param: info: EventInfo
    const target = event.target as HTMLElement; //TS requirements
    setHoverState({ isHovered: true, label: target.innerText });
  };

  const onHoverEndHandler = (event: MouseEvent) => {
    setHoverState({ isHovered: false, label: '' });
  };

  /**It allowes to close dropdownMenu when url changes*/
  useEffect(() => {
    return () => {
      setHoverState({ isHovered: false, label: '' });
    };
  }, [router.asPath]);

  // console.log('linkStyleisHovered', linkStyleisHovered);
  // console.log('label / url', { label, url });

  /**JSX*/
  return (
    <motion.li
      data-component="HeaderLink_container"
      className="relative ml-6 fc"
      //___my-auto
      onHoverStart={onHoverStartHandler}
      onHoverEnd={onHoverEndHandler}
    >
      <div
        data-layout="wrapper_for_MenuOfLinkProdukty"
        className="fixed left-0 top-[60px] bottom-[1px]"
      >
        <DropDownMenusHolder
          isHovered={hovererState.isHovered}
          label={hovererState.label}
          hasDropDownMenu={hasDropDownMenu}
        />
      </div>

      {/* <Link
        href={url}
        controlsSet={{ background: 'transparent' }}
        controlsStart={{
          background: 'transparent',
        }}
        aStyle="relative fc w-full h-full cursor-pointer bg-transparent select-none touch-none focus:outline-none group "
      >
        <p
          className={`relative fc w-full text-[0.625rem] lg:text-[0.75rem] xl:text-[0.875rem] tracking-widest ${
            linkStyleisHovered ? 'text-corpo' : 'text-grey'
          }`}
        >
          <span>{label}</span>
        </p>
        <div
          className={`absolute border-b border-grey h-[44px] ${
            linkStyleisHovered ? 'w-[0%]' : 'w-full'
          } inset-0 opacity-0 hover:opacity-100  ease-in duration-300 `}
          //__w-full h-full
        />
      </Link> */}

      <AriaJSLink
        linkHref={url}
        controlsSet={{ background: 'transparent' }}
        controlsStart={{
          background: 'transparent',
        }}
        aStyle="relative fc w-full h-full cursor-pointer bg-transparent select-none touch-none focus:outline-none group "
      >
        <p
          className={`text-[0.625rem] lg:text-[0.75rem] xxxl:text-[0.875rem] tracking-widest ${
            linkStyleisHovered ? 'text-corpo' : 'text-grey'
          }`}
        >
          <span>{label}</span>
        </p>
        <div
          className={`absolute border-b border-grey h-[44px] ${
            linkStyleisHovered ? 'w-[0%]' : 'w-full'
          } inset-0 opacity-0 hover:opacity-100  ease-in duration-300 `}
          //__w-full h-full
        />
      </AriaJSLink>
    </motion.li>
  );
};

export default NavLink;
