import { ReactNode } from 'react';
/**Components**/
import PageContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import SectionContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import CatalogNavPanel from '../navigations/catalogNavPanel/CatalogNavPanel';
import FadingHeader from '../pseudoHeaders/fadingHeader/FadingHeader';
// import SmallPseudoHeader from '../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import SubCategoriesCatalog from './subCategoriesCatalog/SubCategoriesCatalog';
import BasicIconsManager from '../iconsManagers/basicIconsManager/BasicIconsManager';
/**Basic Data**/
import { catalogStructureData } from '../../../data/_catalogStructure_data';
import { smallPseudoHeaders } from '../../../data/_data';

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
      className="w-full inner-px-md-lg pt-[60px] bg-dark pb-[10vh]"
    >
      <PageContentLayout divStyle="flex flex-col gap-y-[50px] lg:gap-y-[80px] pt-[60px]">
        <SectionContentLayout divStyle="flex xl:flex-row gap-y-4">
          <div className="w-full xl:w-[50%]">
            <CatalogNavPanel
              bottomHeader={smallPseudoHeaders.n1}
              bottomName={
                catalogStructureData[mainCategoryIndex].mainCategoryName
              }
            />
          </div>
          <div className="hidden xl:flex justify-center xl:w-[50%]">
            <BasicIconsManager
              svgIcons={categoryData.svgIcons}
              labeledIcons={categoryData.labeledIcons}
            />
          </div>
        </SectionContentLayout>

        <SectionContentLayout divStyle="flex flex-col gap-y-10">
          {/* <SmallPseudoHeader
            text={smallPseudoHeaders.n5}
            containerStyle="relative flex items-center disable-soft "
            hasBox={false}
            // hasVerticalOrnament={false}
          /> */}
          <FadingHeader label={smallPseudoHeaders.n5} />
          <SubCategoriesCatalog subCategoryData={categoryData} />
        </SectionContentLayout>
        {children}
      </PageContentLayout>
    </div>
  );
};

export default CategoryPageTemplate;

{
  /* <SectionContentLayout>
          <SmallPseudoHeader
            text="Kategoria"
            hasBox={true}
            hasVerticalOrnament={false}
          />
          <H1AnimatedPresence
            uniqueKey={mainCategoryIndex}
            text={catalogStructureData[mainCategoryIndex].mainCategoryName}
            variantH="custome"
            customeStyle="text-light text-left text-[2rem] xs:text-[2.5rem] xxl:text-[3rem] tracking-widest"
          />
          <BasicIconsManager
            svgIcons={categoryData.svgIcons}
            labeledIcons={categoryData.labeledIcons}
          />
        </SectionContentLayout> */
}

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
