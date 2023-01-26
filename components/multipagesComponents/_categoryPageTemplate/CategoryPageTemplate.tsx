/**Components**/
import PageContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import SectionContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import CategoryPageHeader from './categoryPageHeader/CategoryPageHeader';
import SubCategoriesCatalog from './subCategoriesCatalog/SubCategoriesCatalog';
/**Basic Data**/
import { catalogStructureData } from '../../../data/_catalogStructure_data';
import { ReactNode } from 'react';
import BasicIconsManager from '../iconsManagers/basicIconsManager/BasicIconsManager';

/**---------------------------------------------------------**/
const CategoryPageTemplate: React.FunctionComponent<{
  mainCategoryIndex: number;
  children?: ReactNode;
}> = ({ mainCategoryIndex, children }) => {
  /**Retrieved Data*/
  const categoryData = catalogStructureData[mainCategoryIndex];

  /**JSX**/
  return (
    <div
      data-component="CategoryPageTemplate__container"
      className="w-screen inner-px-md-lg pt-[60px] bg-dark pb-[10vh]"
    >
      <PageContentLayout>
        <SectionContentLayout>
          <SmallPseudoHeader text="Kategoria" />
          <CategoryPageHeader
            categoryIndex={mainCategoryIndex}
            categoryName={
              catalogStructureData[mainCategoryIndex].mainCategoryName
            }
          />
          <BasicIconsManager
            svgIcons={categoryData.svgIcons}
            labeledIcons={categoryData.labeledIcons}
          />
        </SectionContentLayout>

        <SectionContentLayout>
          <SmallPseudoHeader
            text="Katalog podkategorii"
            containerStyle="pb-4 md:pb-10"
          />
          <SubCategoriesCatalog subCategoryData={categoryData} />
        </SectionContentLayout>
        {children}
      </PageContentLayout>
      <div className="fixed w-full h-[50px] top-0 bg-dark" />
    </div>
  );
};

export default CategoryPageTemplate;

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
