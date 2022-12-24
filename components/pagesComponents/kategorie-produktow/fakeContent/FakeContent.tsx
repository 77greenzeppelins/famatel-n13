import React, { useEffect, useRef } from 'react';
/*Global State Staff*/
// import { useSnapshot } from 'valtio';
// import { productPageCategoryIndex } from '../../../../../valtioGlobalState/valtioGlobalState';
/*Hook Staff*/
import useIntersectionObserver from '../../../../utils/hooks/useIntersectionObserver';
/**Basic Data**/
import { mainCategories } from '../../../../data/_data';
import FakeSection from './fakeSection/FakeSection';
/**TS*/
interface IF_FakeContent {
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
}

/********************************************************************************/
const FakeContent: React.FunctionComponent<IF_FakeContent> = ({
  setCategoryIndex,
}) => {
  /**just map...**/
  const fakeSections = mainCategories.map(({ arrayIndex, fullName, url }) => {
    //___don't render "himarsy i javeliny"
    if (arrayIndex === mainCategories.length - 1) {
      return null;
    }
    return (
      <React.Fragment key={arrayIndex}>
        {' '}
        <FakeSection
          arrayIndex={arrayIndex}
          setCategoryIndex={setCategoryIndex}
        />{' '}
      </React.Fragment>
    );
  });
  /*
  JSX
  */
  return <>{fakeSections}</>;
};

export default FakeContent;
