import React from 'react';
import ProductBrowser from '../../_basicComponents/forms/productBrowser/ProductBrowser';
import Section2 from './section_2/Section2';
/**Components**/

/**----------------------------------**/
const NowosciContent = () => {
  /**Local State**/
  // const [animationStage, setAnimationStage] = useState<number>(0);

  // console.log('.......animationStage', animationStage);
  /**JSX**/
  return (
    <div
      data-component="KontaktContent__container"
      className="relative bg-dark pt-[60px]  "
    >
      <div className="w-full min-h-screen fc inner-px-md-xl-xxl">
        <Section2 />
      </div>
      <div className="w-full min-h-screen fc inner-px-md-xl-xxl">
        <ProductBrowser />
      </div>
    </div>
  );
};

export default NowosciContent;
