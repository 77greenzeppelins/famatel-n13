import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
/**Components*/
import DropDownMenusHolder from '../../dropDownMenus/DropDownMenusHolder';
import CatalogOpener from '../catalogOpener/CatalogOpener';
/**TS**/
interface Props {
  label: string;
  url: string;
  hasDropDownMenu: boolean;
}

/**---------------------------------------------------------------------**/
const NavLink: React.FC<Props> = ({ label, url, hasDropDownMenu }) => {
  /**useRouter Section*/
  /**why: for style sake;  I want link to be in corpo color and has no border-bottom when user is on its corresponding page */
  const router = useRouter();
  const linkStyleisHovered = router.pathname === url;
  const isActive = router.asPath === url;

  /**Local State mr_1**/
  const [hovererState, setHoverState] = useState<{
    isHovered: boolean;
    label: string;
  }>({
    isHovered: false,
    label: '',
  });
  /**Local State nr_2**/
  const [isClicked, setIsClicked] = useState(false);

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
      <li data-component="NavLink_container" className="relative ml-6 fc ">
        <div
          data-layout="wrapper_for_DropDownMenuHolder"
          className="fixed flex justify-center left-0 right-0 top-[50px] bottom-[1px] pointer-events-none "
        >
          <DropDownMenusHolder
            isHovered={hovererState.isHovered}
            label={hovererState.label}
            hasDropDownMenu={hasDropDownMenu}
          />
        </div>
        <div className="hidden lg:block">
          <Link
            href={url}
            aria-label={`Link do strony ${label}`}
            aria-current={isActive ? 'page' : undefined}
            scroll={false}
            className={
              `relative fc gap-1 w-full h-full cursor-pointer bg-transparent select-none touch-none  group ${
                hasDropDownMenu ? 'pr-2' : ''
              }`
              //___focus:outline-none
            }
          >
            <span
              className={`header-link-label ${
                linkStyleisHovered ? 'text-corpo' : 'text-grey'
              }`}
            >
              <span>{label}</span>
            </span>
            <span
              className={`h-[1px] inline-block w-0 bg-grey absolute left-0 -bottom-[2px] group-hover:w-full transition-[width] ease-in duration-300 delay-400 ${
                linkStyleisHovered ? 'opacity-0' : 'opacity-1'
              }`}
            >
              &nbsp;
            </span>
          </Link>
        </div>
      </li>
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
