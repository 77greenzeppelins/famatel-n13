import React from 'react';
/**Components**/
import TextLinkWithArrow from '../../../../../../_basicComponents/links/textLinkWithArrow/TextLinkWithArrow';
/**Motion Staff**/
const variants = {
  initial: { y: '-100%' },
  animate: { y: 0, transition: { ease: 'circOut', duration: 0.8 } },
};
/**Basic Data**/
import { pagesUrl } from '../../../../../../../data/_data';

/**-----------------------------------------------**/
const LinkToKategorieProduktów = () => {
  /**JSX**/
  return (
    <TextLinkWithArrow
      linkHref={pagesUrl.produkty}
      aStyle="fc focus:outline-none h-[40px] overflow-hidden disable"
      ariaLabel={'Link do strony: "Kategorie Produktów"'}
      variants={variants}
      label="Zobacz pełną ofertę"
    ></TextLinkWithArrow>
  );
};

export default LinkToKategorieProduktów;
