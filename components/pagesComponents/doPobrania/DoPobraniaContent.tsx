import React, { useState } from 'react';
import KatalogMenu from './katalogMenu/KatalogMenu';
// import InViewContainer from '../../containers/inViewContainer/InViewContainer';

/**Components**/

/**----------------------------------**/
const DoPobraniaContent = () => {
  /**Local State**/
  // const [animationStage, setAnimationStage] = useState<number>(0);

  // console.log('.......animationStage', animationStage);
  /**JSX**/
  return (
    <div
      data-component="KontaktContent__container"
      className="relative bg-dark pt-[60px]"
    >
      <div className="w-full h-full inner-px-md-xl-xxl pt-[20px] lg:pt-[40px]">
        {/* <div className="flex flex-col pt-[50px] gap-y-[10px]">
          <div className="fc h-20">
            <button className=" w-6 h-6 rounded-sm bg-corpo glow animate-pulse"></button>
          </div>
        </div> */}
        <div>
          <KatalogMenu
            headerLabels={['Kategoria', 'Podkategoria', 'Produkt']}
            lineLabels={[
              'Przemysłowe wtyczki i gniazda',
              'Wtyczki i gniazda przenośne',
              '14328',
            ]}
            urls={['', '', '']}
          />
        </div>
      </div>
    </div>
  );
};

export default DoPobraniaContent;
