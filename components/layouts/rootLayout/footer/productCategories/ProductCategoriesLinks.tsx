import React from 'react';
/**Components**/
import NavWithLinks from '../../../../_basicComponents/links/x_NavWithLinks/NavWithLinks';
import FooterLink from '../__link/FooterLink';
/**Basic Data**/
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';

/**TS**/
import { IF_LinkData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------------**/

const ProductCategoriesLinks: React.FC = () => {
  /*
  __1. I need a new array that includes only two properties in each item of original array
  */
  const newArray: IF_LinkData[] = catalogStructureData.map(
    ({ mainCategoryName, mainCategoryUrl }) => ({
      label: mainCategoryName,
      url: mainCategoryUrl,
    })
  );
  /**JSX**/
  return (
    <NavWithLinks
      navStyle={'w-full sm:w-[80%]'}
      ulStyle={'flex flex-col gap-y-4'}
      dataArray={newArray}
      ChildComponent={FooterLink}
    />
  );
};

export default ProductCategoriesLinks;

{
  /* <FooterLink
        key={mainCategoryName}
        url={mainCategoryUrl}
        label={mainCategoryName}
      ></FooterLink> */
}

{
  /* </NavWithLinks> */
}
// <nav className="w-full sm:w-[80%]">
//   <ul className="flex flex-col gap-y-4">
//     {catalogStructureData.map(
//       ({ mainCategoryName, mainCategoryUrl }, i) => {
//         return (
//           <FooterLink
//             key={mainCategoryName}
//             url={mainCategoryUrl}
//             label={mainCategoryName}
//           ></FooterLink>
//         );
//       }
//     )}
//   </ul>
// </nav>
