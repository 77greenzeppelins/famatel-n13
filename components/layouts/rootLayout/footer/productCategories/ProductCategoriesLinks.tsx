import React from 'react';
/**Components**/
import FooterLink from '../__link/FooterLink';
/**Basic Data**/
import { mainPages } from '../../../../../data/_data';
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';

const ProductCategoriesLinks: React.FC = () => {
  return (
    <nav className="w-[80%]">
      <ul className="flex flex-col gap-y-4">
        {catalogStructureData.map(
          ({ mainCategoryName, mainCategoryUrl }, i) => {
            return (
              <FooterLink
                key={mainCategoryName}
                uniqueKey={i}
                url={mainCategoryUrl}
                label={mainCategoryName}
                isLast={i === mainPages.length}
                isSimple={true}
              ></FooterLink>
            );
          }
        )}
      </ul>
    </nav>
  );
};

export default ProductCategoriesLinks;
