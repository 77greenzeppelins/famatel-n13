import React, { useEffect, useRef } from 'react';
/*Global State Staff*/
// import { useSnapshot } from 'valtio';
// import { productPageCategoryIndex } from '../../../../../valtioGlobalState/valtioGlobalState';
/*Hook Staff*/
import useIntersectionObserver from '../../../../utils/hooks/useIntersectionObserver';

/********************************************************************************/
const FakeContent = ({ arrayIndex }: { arrayIndex: number }) => {
  /*
  References; what we want to observe...
  */
  const ref = useRef<HTMLDivElement | null>(null);
  /*
  IntersectionObserver Staff
  */
  const entry = useIntersectionObserver(ref, { threshold: 0.5 });
  //___
  const isVisible = !!entry?.isIntersecting;
  /*
  ...
  */
  useEffect(() => {
    if (isVisible) {
      // productPageCategoryIndex.categoryIndex = arrayIndex;
      console.log(`...title`);
    }
  }, [isVisible, arrayIndex]);
  /*
  JSX
  */
  return (
    <div
      data-component="FakeContent__container"
      ref={ref}
      className="fc w-screen h-screen"
    ></div>
  );
};

export default FakeContent;
