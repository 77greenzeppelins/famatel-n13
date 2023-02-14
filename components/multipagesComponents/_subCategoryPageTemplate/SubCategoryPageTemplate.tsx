import React, { ReactNode } from 'react';
/**Components**/
import PageContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import SectionContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SubCategoryPageHeader from './subCategoryPageHeader/SubCategoryPageHeader';
import SmallPseudoHeader from '../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import ProductsCatalog from './productsCatalog/ProductsCatalog';
/**TS**/
import {
  IF_ProductCardData,
  ISubCategoriesItem,
} from '../../../utils/TS/typeScriptStaff';
import CatalogNavPanel from '../navigations/catalogNavPanel/CatalogNavPanel';
import H1AnimatedPresence from '../../_basicComponents/componentH1/H1AnimatedPresence';

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
          <CatalogNavPanel
            labels={['Kategoria']}
            namesLevels={[parentCategoryName]}
            urlsLevels={[parentCategoryUrl]}
            lastLevelName={subCategoryName}
            lastLevelLab="Podkategoria:"
          />
          {/* <SmallPseudoHeader
            text="Podkategoria"
            hasBox={true}
            hasVerticalOrnament={false}
          />
          <H1AnimatedPresence
            uniqueKey={arrayIndex}
            text={subCategoryName}
            variantH="custome"
            customeStyle="text-light text-left text-[2rem] xs:text-[2.5rem] xxl:text-[3rem] tracking-widest"
          /> */}
          {/* <SubCategoryPageHeader
            fullName={subCategoryName}
            subCategoryIndex={arrayIndex}
          /> */}
        </SectionContentLayout>
        <SectionContentLayout>
          <SmallPseudoHeader
            text="Katalog produktów"
            hasBox={true}
            hasVerticalOrnament={false}
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
