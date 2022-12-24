import React, { useEffect, useRef } from 'react';
/*Global State Staff*/
// import { useSnapshot } from 'valtio';
// import { productPageCategoryIndex } from '../../../../../valtioGlobalState/valtioGlobalState';
/*Hook Staff*/
import useIntersectionObserver from '../../../../../utils/hooks/useIntersectionObserver';
/**TS**/
interface IF_FakeContent {
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  arrayIndex: number;
}

/********************************************************************************/
const FakeSection: React.FunctionComponent<IF_FakeContent> = ({
  setCategoryIndex,
  arrayIndex,
}) => {
  /**References; what we want to observe? this patrticular section!**/
  const ref = useRef<HTMLDivElement | null>(null);
  /**IntersectionObserver Staff**/
  const entry = useIntersectionObserver(ref, { threshold: 0.5 });
  //___
  const isVisible = !!entry?.isIntersecting;
  /**...**/
  useEffect(() => {
    if (isVisible) {
      // productPageCategoryIndex.categoryIndex = arrayIndex;
      setCategoryIndex(arrayIndex);
      console.log(`...title`);
    }
  }, [isVisible, arrayIndex, setCategoryIndex]);
  /*
  JSX
  */
  return (
    <div
      data-component="FakeSection__container"
      ref={ref}
      className="fc w-screen h-screen"
    >
      <p className="text-corpo text-2xl">{arrayIndex}</p>
    </div>
  );
};

export default FakeSection;
