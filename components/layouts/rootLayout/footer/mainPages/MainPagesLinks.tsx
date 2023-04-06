import React from 'react';
/**Components**/
import FooterLink from '../__link/FooterLink';
/**Basic Data**/
import { mainPages } from '../../../../../data/_data';

/**----------------------------**/
const MainPagesLinks: React.FC = () => {
  return (
    <nav className="w-[80%]">
      <ul className="flex flex-col gap-y-4">
        {mainPages.map(({ arrayIndex, label, url }, i) => {
          return (
            <FooterLink
              key={arrayIndex}
              uniqueKey={arrayIndex}
              url={url}
              label={label}
              isLast={arrayIndex === mainPages.length}
              isSimple={true}
            ></FooterLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainPagesLinks;
