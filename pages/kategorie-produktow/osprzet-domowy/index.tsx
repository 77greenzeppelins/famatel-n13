import type { ReactElement } from 'react';
import { NextPage } from 'next/types';
/**Components*/
import CategoryPageTemplate from '../../../components/multipagesComponents/_categoryPageTemplate/CategoryPageTemplate';
/**BasicData*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';

/**--------------------------------------------------------**/
const KategorieProduktowPage: NextPage = () => {
  /**JSX**/
  return (
    <div className="fc flex-col w-full min-h-screen bg-dark">
      <CategoryPageTemplate
        //___should be 10 /
        mainCategoryIndex={catalogStructureData[9].mainCategoryIndex}
      />
    </div>
  );
};

export default KategorieProduktowPage;
