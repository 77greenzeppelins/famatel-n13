import React from 'react';
/**Components**/
import SubCategoryPageHeader from './subCategoryPageHeader/SubCategoryPageHeader';
import SmallPseudoHeader from '../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
/**Basic Data**/
import { wtyczkiGniazdaSubCategoriesData } from '../../../data/categoriesData/_cat1_wtyczki-gniazda_data';

/**-----------------------------------------------------------------**/
const SubCategoryPageTemplate: React.FunctionComponent<{
  subCategoryIndex: number;
}> = ({ subCategoryIndex }) => {
  /**Props destructuring**/
  const { parentCategory, arrayIndex, name, url } =
    wtyczkiGniazdaSubCategoriesData[subCategoryIndex];
  /**JSX**/
  return (
    <div className="w-screen inner-px-md-lg pt-[60px] bg-dark">
      <div className="flex flex-col gap-y-6 h-[50vh] pt-[40px]">
        <div className="flex gap-x-4">
          <SmallPseudoHeader text="Kategoria" />
          <p className="header-link-label text-grey disable">/</p>
          <p className="header-link-label text-grey disable">
            {parentCategory}
          </p>
        </div>
        <SmallPseudoHeader text="Podkategoria" />
        <SubCategoryPageHeader
          fullName={name}
          subCategoryIndex={subCategoryIndex}
        />
      </div>
      <div className="flex flex-col w-full h-[50vh] border-t border-greyShade2">
        <SmallPseudoHeader text="Katalog" />
      </div>
      <div className="fc w-full h-[50vh] bg-greyShade2">
        <p className="text-3xl text-corpo">Wtyczki Gniazda part_3</p>
      </div>

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
