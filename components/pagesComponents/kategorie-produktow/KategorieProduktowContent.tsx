import React from 'react';
/**Components**/
import FakeContent from './fakeContent/FakeContent';
/**Basic Data**/
import { mainCategories } from '../../../data/_data';

/**----------------------------------------------------------------------------------**/
const KategorieProduktowContent = () => {
  /**JSX**/
  return (
    <div
      data-component="KategorieProduktowContent__container"
      className="relative"
    >
      {/* <div className="h-[50vh] bg-green-900"> </div>
      <div className="h-[50vh] bg-red-900"></div>
      <div className="h-[50vh] bg-green-700"></div> */}

      {mainCategories.map(({ arrayIndex, fullName, url }) => {
        //___don't render "himarsy i javeliny"
        if (arrayIndex === mainCategories.length - 1) {
          return null;
        }
        return (
          <React.Fragment key={arrayIndex}>
            {' '}
            <FakeContent arrayIndex={arrayIndex} />{' '}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default KategorieProduktowContent;
