import React, { useState } from 'react';
/**Components**/
import FakeContent from './fakeContent/FakeContent';
import BottomMenu from './bottomMenu/BottomMenu';
import ProductPageFixedOverlay from '../../layouts/pseudoLayouts/productPageFixedOverlay/ProductPageFixedOverlay';

/**----------------------------------------------------------------------------------**/
const KategorieProduktowContent = () => {
  /**Local State**/
  const [categoryIndex, setCategoryIndex] = useState<number>(0);
  /**JSX**/
  return (
    <div
      data-component="KategorieProduktowContent__container"
      className="relative"
    >
      <FakeContent setCategoryIndex={setCategoryIndex} />
      <ProductPageFixedOverlay />
      <div className="fixed fc bottom-0 left-0 right-0 h-[60px] ">
        <BottomMenu categoryIndex={categoryIndex} />
      </div>
    </div>
  );
};

export default KategorieProduktowContent;
