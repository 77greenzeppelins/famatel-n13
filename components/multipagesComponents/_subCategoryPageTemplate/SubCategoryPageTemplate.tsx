import React, { ReactNode } from 'react';
/**Components**/
import PageContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import SectionContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SectionKategoria from './subCategoryPageHeader/sectionKategoria/SectionKategoria';
import SubCategoryPageHeader from './subCategoryPageHeader/SubCategoryPageHeader';
import SmallPseudoHeader from '../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import ProductsCatalog from './productsCatalog/ProductsCatalog';
/**TS**/
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
      className="w-screen min-h-screen inner-px-md-lg pt-[60px] bg-dark pb-[50px]"
    >
      <PageContentLayout>
        <SectionContentLayout>
          <SectionKategoria
            parentCategoryName={parentCategoryName}
            parentCategoryUrl={parentCategoryUrl}
          />
          <SmallPseudoHeader text="Podkategoria" />
          <SubCategoryPageHeader
            fullName={subCategoryName}
            subCategoryIndex={arrayIndex}
          />
        </SectionContentLayout>
        <SectionContentLayout>
          <SmallPseudoHeader text="Katalog produktów" />
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
