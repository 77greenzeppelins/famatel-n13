import React from 'react';
import { mainPages } from '../../../../../data/_data';
import MobileNavLink from './mobileNavLink/MobileNavLink';

const LinksSection: React.FunctionComponent<{
  isSimple: boolean;
}> = ({ isSimple }) => {
  /**JSX*/
  return (
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
  );
};

export default LinksSection;
