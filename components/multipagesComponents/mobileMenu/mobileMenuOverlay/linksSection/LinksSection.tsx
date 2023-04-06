import React from 'react';
/**Components**/
import MobileNavLink from './mobileNavLink/MobileNavLink';
/**Basic data*/
import { mainPages } from '../../../../../data/_data';

/**---------------------------**/
const LinksSection: React.FC<{
  isSimple: boolean;
}> = ({ isSimple }) => {
  /**JSX*/
  return (
    <nav className="w-full">
      <ul className="flex w-full flex-col gap-[10px] ">
        {mainPages.map(({ arrayIndex, label, url }, i) => {
          return (
            <MobileNavLink
              key={arrayIndex}
              uniqueKey={arrayIndex}
              url={url}
              label={label}
              isLast={arrayIndex === mainPages.length}
              isSimple={isSimple}
            ></MobileNavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default LinksSection;
