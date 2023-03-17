import React, { ReactNode } from 'react';
/**Components**/
import PageContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import SectionContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import ProductsCatalog from './productsCatalog/ProductsCatalog';
import CatalogNavPanel from '../navigations/catalogNavPanel/CatalogNavPanel';
/**Basic Data**/
/**TS**/
import { smallPseudoHeaders } from '../../../data/_data';
import {
  IF_ProductCardData,
  ISubCategoriesItem,
} from '../../../utils/TS/typeScriptStaff';

/**-----------------------------------------------------------------**/
const SubCategoryPageTemplate: React.FunctionComponent<{
  subCategoryData: ISubCategoriesItem;
  productCardsData: IF_ProductCardData[];
  children?: ReactNode;
}> = ({ subCategoryData, productCardsData, children }) => {
  /**Props destructuring**/
  const { arrayIndex, parentCategoryName, parentCategoryUrl, subCategoryName } =
    subCategoryData;

  /**JSX**/
  return (
    <div
      data-component="SubCategoryPageTemplate__container"
      className="w-full min-h-screen inner-px-md-lg pt-[60px] bg-dark pb-[50px]"
    >
      <PageContentLayout divStyle="flex flex-col gap-y-[50px] lg:gap-y-[80px] pt-[60px]">
        <SectionContentLayout>
          <CatalogNavPanel
            linkHeaders={[smallPseudoHeaders.n1]}
            linkNames={[parentCategoryName]}
            linkUrls={[parentCategoryUrl]}
            bottomHeader={smallPseudoHeaders.n2}
            bottomName={subCategoryName}
            // optionalHeader={smallPseudoHeaders.n4}
          />
        </SectionContentLayout>
        <SectionContentLayout divStyle="flex flex-col gap-y-10">
          <SmallPseudoHeader
            text={smallPseudoHeaders.l5}
            hasBox={false}
            hasVerticalOrnament={true}
          />
          <ProductsCatalog productCardsData={productCardsData} />
        </SectionContentLayout>
        {
          //___should be wrapped into <SectionContentLayout>
          children
        }
      </PageContentLayout>

      <div className="fixed w-full h-[50px] top-0 bg-dark" />
    </div>
  );
};

export default SubCategoryPageTemplate;

//  const [categoryDetails, setCategoryDetails] = useState({
//     categoryIndex: 0,
//     categoryName: '',
//   });
/**useRouter Section; asPath**/
// const router = useRouter();
// // mainCategories;
// const setCurrentCategory = useCallback(() => {
//   switch (router.asPath) {
//     case mainCategories[0].url:
//       return {
//         categoryIndex: mainCategories[0].arrayIndex,
//         categoryName: mainCategories[0].fullName,
//       };
//     case mainCategories[1].url:
//       return {
//         categoryIndex: mainCategories[1].arrayIndex,
//         categoryName: mainCategories[1].fullName,
//       };
//       // setCategoryDetails({
//       //   categoryIndex: mainCategories[0].arrayIndex,
//       //   categoryName: mainCategories[0].fullName,
//       // });
//       break;
//     // case mainCategories[1].url:
//     //   return 1;
//     // case mainCategories[2].url:
//     //   return 2;
//     default:
//       return {
//         categoryIndex: 0,
//         categoryName: '',
//       };
//   }
// }, [router.asPath]);

// const setCurrentCategory = mainCategories.map((category, index) => {
//   if (category.url === router.asPath) {
//     console.log(
//       'category.url === router.asPath',
//       category.url === router.asPath
//     );
//     return { categoryIndex: category.arrayIndex };
//   }
// });
