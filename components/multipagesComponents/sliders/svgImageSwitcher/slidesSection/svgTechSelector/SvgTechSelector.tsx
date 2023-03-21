import React from 'react';
/**SVG Components Data**/
import { allSvgTech } from '../../../../../SVG/techDrawings/allSvgTech';

/**------------------------------------------------------------------**/
const SvgTechSelector: React.FC<{
  modelName: string | undefined;
  basicSize: number;
}> = ({ modelName, basicSize }) => {
  console.log('modelName:', modelName);
  /**JSX**/
  return (
    <>
      {allSvgTech.map(({ model, Component }, i) => {
        if (model === modelName) {
          console.log('item.model:', modelName);
          console.log('model === modelName', model === modelName);
          return (
            <div data-component="SvgTechSelector__container" key={i}>
              <Component basicSize={basicSize} />
            </div>
          );
          //   return {item.Component};
        }
      })}
    </>
  );
};

export default SvgTechSelector;
