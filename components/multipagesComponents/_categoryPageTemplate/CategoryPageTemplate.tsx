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
      className="w-full inner-px-md-lg pt-[60px] bg-dark"
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
