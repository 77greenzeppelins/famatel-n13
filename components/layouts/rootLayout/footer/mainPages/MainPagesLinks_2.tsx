import React from 'react';
/**Components**/
import FooterLink from '../__link/FooterLink';
/**Basic Data**/
import { mainPages } from '../../../../../data/_data';

/**TS**/
interface Props {
  labelStyle?: string;
}
/**------------------------------**/
const MainPagesLinks_2 = ({ labelStyle }: Props) => {
  /**JSX**/
  return (
    <nav className="w-full sm:w-[80%]">
      <ul className="flex flex-col gap-y-4">
        {mainPages.map(item => (
          <FooterLink key={item.url} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default MainPagesLinks_2;
