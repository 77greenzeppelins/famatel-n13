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
      <div className="fixed bottom-0 left-0 right-0 h-[10vh] bg-green-900" />
      <div className="fixed fc bottom-0 w-[60px] h-screen bg-green-700">X</div>
    </div>
  );
};

export default KategorieProduktowContent;
