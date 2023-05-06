import React from 'react';
/**Components**/
import NavLink from './navLink/NavLink';
/**Basic Data**/
import { mainPages } from '../../../../../data/_data';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';

/**---------------------------------------------------------**/
const NavForMainPages: React.FunctionComponent = () => {
  /**Handler Section**/
  const createContent = (screenWidth: number) => {
    // console.log('width', width);
    switch (true) {
      /*
      if screen is "tailwind-LG" create classic "headMenu" with all buttons
      */
      case screenWidth >= 1024:
        return (
          <ul className="hidden h-full md:flex">
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
      /*
      if screen is "tailwind-xxs" create "headMenu" with "productyButton" and "hamburgerButton"
      */
      case screenWidth > 300:
        return (
          <div className="flex items-center h-full ">
            <ul className="h-full flex">
              <NavLink
                url={mainPages[1].url}
                label={mainPages[1].label}
                hasDropDownMenu={mainPages[1].hasDropDownMenu}
              ></NavLink>
            </ul>
            <div data-layout="fakeContainer" className="w-[50px] h-full" />
          </div>
        );
      /*
      if screen is less then "tailwind-xxs" create "headMenu" with "hamburgerButton" only; case for "odd users"
      */
      case screenWidth <= 300:
        return (
          <div className="flex items-center h-full">
            <div data-layout="fakeContainer" className="w-[40px] h-full " />
          </div>
        );
    }
  };

  const { width } = useWindowSize({
    screensNumber: 1,
  });
  /**JSX*/
  return <nav className="h-full ">{createContent(width)}</nav>;
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
