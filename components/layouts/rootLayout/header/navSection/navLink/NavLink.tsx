import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
/**Components*/
import AriaJSLink from '../../../../../_basicComponents/links/ariaJSLink/AriaJSLink';
import DropDownMenusHolder from '../../dropDownMenus/DropDownMenusHolder';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';

/**********************************************************************************/
const NavLink: React.FunctionComponent<{
  label: string | number;
  url: string;
}> = ({ label, url }) => {
  /**useRouter Section*/
  /**why: I want link to be in corpo color and has no border-bottom when user is on its corresponding page */
  const router = useRouter();
  const linkStyleCondition = router.pathname === url;

  /**Local State*/
  const [isHovered, setIsHovered] = useState<{
    condition: boolean;
    label: string;
  }>({
    condition: false,
    label: '',
  });
  /**Hover Handlers*/
  const onHoverStartHandler = (event: MouseEvent) => {
    //___second param: info: EventInfo
    const target = event.target as HTMLElement; //TS requirements
    setIsHovered({ condition: true, label: target.innerText });
  };

  const onHoverEndHandler = (event: MouseEvent) => {
    setIsHovered({ condition: false, label: '' });
  };

  /**It allowes to close dropdownMenu when url changes*/
  useEffect(() => {
    return () => {
      setIsHovered({ condition: false, label: '' });
    };
  }, [router.asPath]);

  // console.log('linkStyleCondition', linkStyleCondition);
  /**JSX*/
  return (
    <motion.li
      data-component="HeaderLink_container"
      className="relative ml-6 fc "
      //___my-auto
      onHoverStart={onHoverStartHandler}
      onHoverEnd={onHoverEndHandler}
    >
      <div
        data-layout="wrapper_for_MenuOfLinkProdukty"
        className="fixed left-0 top-[60px] bottom-[1px]"
      >
        <DropDownMenusHolder
          condition={isHovered.condition}
          label={isHovered.label}
        />
      </div>

      <AriaJSLink
        linkHref={url}
        controlsSet={{ background: 'transparent' }}
        controlsStart={{
          background: 'transparent',
        }}
        aStyle="relative fc w-full h-full cursor-pointer bg-transparent select-none touch-none focus:outline-none group "
      >
        <p
          className={`relative fc w-full text-[0.625rem] lg:text-[0.75rem] xl:text-[0.875rem] tracking-widest ${
            linkStyleCondition ? 'text-corpo' : 'text-grey'
          }`}
        >
          <span>{label}</span>
        </p>
        <div
          className={`absolute border-b border-grey h-[44px] ${
            linkStyleCondition ? 'w-[0%]' : 'w-full'
          } inset-0 opacity-0 hover:opacity-100  ease-in duration-300 `}
          //__w-full h-full
        />
      </AriaJSLink>
      {/*
        This <div> is a sort of "dropDownMenu" container; value of top coresponds with <li> height to "allow / keep" hovering 
     */}
      {/* <div
        data-layout="wrapper_for_MenuOfLinkProdukty"
        className="fixed left-0 top-[40px] bottom-[1px]  "
      >
        <DropDownMenusHolder
          condition={isHovered.condition}
          label={isHovered.label}
        />
      </div> */}
    </motion.li>
  );
};

export default NavLink;
