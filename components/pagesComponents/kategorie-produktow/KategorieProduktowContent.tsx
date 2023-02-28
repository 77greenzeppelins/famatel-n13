import React, { useState } from 'react';
/**Components**/
import Section_1 from './section_1/Section_1';
/**Basic Data*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';

const timeoutFactor = 1000;
/**----------------------------------------------------------------------------------**/
const KategorieProduktowContent = () => {
  /**LocalState; just to control slides**/
  const [categoryIndex, setCategoryIndex] = useState(0);

  /**JSX**/
  return (
    <div
      data-component="KategorieProduktowContent__container"
      className="flex flex-col w-screen min-h-screen pt-[60px] pb-[10vh] bg-dark"
    >
      <Section_1
        categoryIndex={categoryIndex}
        setCategoryIndex={setCategoryIndex}
        categoriesNumber={catalogStructureData.length}
      />
      <div className="fixed w-full h-[50px] top-0 bg-dark" />
    </div>
  );
};

export default KategorieProduktowContent;
