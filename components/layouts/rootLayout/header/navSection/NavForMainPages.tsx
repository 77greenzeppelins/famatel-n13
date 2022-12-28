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

  const { pathname } = useRouter();
  const totalHeight = (currentPath: string) => {
    // console.log('currentPath:', currentPath);
    // console.log('pathname:', pathname);
    switch (currentPath) {
      case mainPages[0].url:
        return 1;
        break;
      case mainPages[1].url:
        return 11;
        break;
      default:
        return 1;
    }
  };

  const { width, height } = useWindowSize({
    screensNumber: totalHeight(pathname),
  });

  /**JSX*/
  return (
    <nav
      className="h-full pt-2"
      //___why "pt-2"? to break "center-y-alignment"...
    >
      <ul className="hidden h-full md:flex ">
        {mainPages.map(({ arrayIndex, label, url, hasDropDownMenu }) => {
          if (arrayIndex === 2) {
            return (
              <NavLink
                key={arrayIndex}
                url={url}
                label={`W: ${width}`}
                hasDropDownMenu={hasDropDownMenu}
              ></NavLink>
            );
          }
          if (arrayIndex === 3) {
            return (
              <NavLink
                key={arrayIndex}
                url={url}
                label={`H: ${height}`}
                hasDropDownMenu={hasDropDownMenu}
              ></NavLink>
            );
          }

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
    </nav>
  );
};

export default NavForMainPages;
