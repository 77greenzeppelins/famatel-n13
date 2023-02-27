import React, { Dispatch, SetStateAction } from 'react';
/**Components*/
import NavLink from './navLink/NavLink';
/**Basic Data*/
import { mainPages } from '../../../../../data/_data';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
import MobileMenuButton from '../../../../multipagesComponents/mobileMenu/mobileMenuButton/MobileMenuButton';

/********************************************************************************/
const NavForMainPages: React.FunctionComponent<{
  mobileMenuOpener: Dispatch<SetStateAction<boolean>>;
  mobileMenuState: boolean;
}> = ({ mobileMenuOpener, mobileMenuState }) => {
  /**Handler Section**/
  const createContent = (screenWidth: number) => {
    // console.log('width', width);
    switch (true) {
      case screenWidth > 1024:
        return (
          <ul className="hidden h-full md:flex ">
            {mainPages.map(({ arrayIndex, label, url, hasDropDownMenu }) => {
              return (
                <NavLink
                  key={arrayIndex}
                  url={url}
                  label={label}
                  hasDropDownMenu={hasDropDownMenu}
                ></NavLink>
              );
            })}
          </ul>
        );
      // case screenWidth > 540:
      //   return (
      //     <ul className=" h-full flex ">
      //       <NavLink
      //         url={mainPages[1].url}
      //         label={mainPages[1].label}
      //         hasDropDownMenu={mainPages[1].hasDropDownMenu}
      //       ></NavLink>
      //     </ul>
      //   );
      case screenWidth > 300:
        return (
          <div className="flex items-center h-full gap-4">
            <ul className="h-full flex">
              <NavLink
                url={mainPages[1].url}
                label={mainPages[1].label}
                hasDropDownMenu={mainPages[1].hasDropDownMenu}
              ></NavLink>
            </ul>
            <MobileMenuButton
              mobileMenuOpener={mobileMenuOpener}
              mobileMenuState={mobileMenuState}
            />
          </div>
        );
      case screenWidth <= 300:
        return (
          <div className="flex items-center h-full">
            <MobileMenuButton
              mobileMenuOpener={mobileMenuOpener}
              mobileMenuState={mobileMenuState}
            />
          </div>
        );
    }
  };

  const { width } = useWindowSize({
    screensNumber: 1,
  });
  /**JSX*/
  return (
    <nav
      className="h-full "
      //___pt-2 // why "pt-2"? to break "center-y-alignment"...
    >
      {createContent(width)}
    </nav>
  );
};

export default NavForMainPages;

// if (arrayIndex === 2) {
//   return (
//     <NavLink
//       key={arrayIndex}
//       url={url}
//       label={`W: ${width}`}
//       hasDropDownMenu={hasDropDownMenu}
//     ></NavLink>
//   );
// }
// if (arrayIndex === 3) {
//   return (
//     <NavLink
//       key={arrayIndex}
//       url={url}
//       label={`H: ${height}`}
//       hasDropDownMenu={hasDropDownMenu}
//     ></NavLink>
//   );
// }

{
  /* {width > 1024 ? (
        <ul className="hidden h-full md:flex ">
          {mainPages.map(({ arrayIndex, label, url, hasDropDownMenu }) => {
            return (
              <NavLink
                key={arrayIndex}
                url={url}
                label={label}
                hasDropDownMenu={hasDropDownMenu}
              ></NavLink>
            );
          })}
        </ul>
      ) : (
        <div
          className="flex justify-end w-[80px] 
        Shade2"
        >
          <p className="text-grey text-[0.75rem]">{`w:${width} / h: ${height}`}</p>
        </div>
      )} */
}
