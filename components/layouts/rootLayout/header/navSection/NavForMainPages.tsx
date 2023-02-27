import React from 'react';
/**Components*/
import NavLink from './navLink/NavLink';
/**Basic Data*/
import { mainPages } from '../../../../../data/_data';
/**________temp*/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
import { useRouter } from 'next/router';

/********************************************************************************/
const NavForMainPages: React.FunctionComponent = () => {
  /**_________Temp: Hook Section*/

  // const { pathname } = useRouter();
  // const totalHeight = (currentPath: string) => {
  //   // console.log('currentPath:', currentPath);
  //   // console.log('pathname:', pathname);
  //   switch (currentPath) {
  //     case mainPages[0].url:
  //       return 1;
  //       break;
  //     case mainPages[1].url:
  //       return 11;
  //       break;
  //     default:
  //       return 1;
  //   }
  // };

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
      case screenWidth > 768 && screenWidth < 1024:
        return (
          <ul className="hidden h-full md:flex ">
            <NavLink
              url={mainPages[1].url}
              label={mainPages[1].label}
              hasDropDownMenu={mainPages[1].hasDropDownMenu}
            ></NavLink>
          </ul>
        );
      case screenWidth < 768:
        return (
          <div className="flex gap-4">
            <ul className="h-full flex">
              <NavLink
                url={mainPages[1].url}
                label={mainPages[1].label}
                hasDropDownMenu={mainPages[1].hasDropDownMenu}
              ></NavLink>
            </ul>
            <div className="w-4 h-4 bg-vY" />
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
      className="h-full pt-2"
      //___why "pt-2"? to break "center-y-alignment"...
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
