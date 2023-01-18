/**Components**/
import SmallPseudoHeader from '../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import CategoryPageHeader from './categoryPageHeader/CategoryPageHeader';
import SubCategoriesCatalog from './subCategoriesCatalog/SubCategoriesCatalog';
/**Basic Data**/
import { catalogStructureData } from '../../../data/_catalogStructure_data';

/**---------------------------------------------------------**/
const CategoryPageTemplate: React.FunctionComponent<{
  mainCategoryIndex: number;
}> = ({ mainCategoryIndex }) => {
  /**Retrieved Data*/
  const subCategoryData = catalogStructureData[mainCategoryIndex];
  /**JSX**/
  return (
    <div
      data-component="CategoryPageTemplate__container"
      className="w-screen inner-px-md-lg pt-[60px]"
    >
      <div
        data-layout="CategoryPageTemplate__pseudoHero"
        className="flex flex-col h-[40vh] pt-[40px]"
      >
        <SmallPseudoHeader text="Kategoria" containerStyle="pd-2 md:pb-4" />
        <CategoryPageHeader
          categoryIndex={mainCategoryIndex}
          categoryName={
            catalogStructureData[mainCategoryIndex].mainCategoryName
          }
        />
      </div>
      <div
        data-layout="CategoryPageTemplate__catalogSection"
        className="flex flex-col w-full  "
      >
        {/* <div className="flex w-full ">
          <div className="w-[60%] border-t border-greyShade2" />
        </div> */}
        <SmallPseudoHeader text="Katalog" containerStyle="pb-4 md:pb-10" />
        <SubCategoriesCatalog subCategoryData={subCategoryData} />
      </div>
      <div className="fc w-full h-[10vh] "></div>
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
