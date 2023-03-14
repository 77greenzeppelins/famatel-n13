import React, { useState } from 'react';
/**Components**/
import ContactIntro from './intro/ContactIntro';
import ContactAddress from './adres/ContactAddress';

import ContactContacts from './kontakty/ContactContacts';

/**----------------------------------**/
const KontaktContent = () => {
  /**Local State**/
  const [animationStage, setAnimationStage] = useState<number>(0);

  // console.log('.......animationStage', animationStage);
  /**JSX**/
  return (
    <div
      data-component="KontaktContent__container"
      className="bg-dark pt-[50px]"
    >
      <div className="relative w-full h-full ">
        <ContactIntro />
        <div className="flex flex-col gap-y-10 inner-px-md-xl-xxl">
          <div
            className="flex flex-col gap-y-10 z-10"
            //___xl:flex-row xl:gap-x-20 gap-y-[80px]
          >
            <div className="md:w-[50%] ">
              <ContactContacts
                animationStage={animationStage}
                setAnimationStage={setAnimationStage}
                animationStageNumber={1}
              />
            </div>
            {/* <div className="md:w-[50%]">
              <ContactAddress />
            </div> */}
          </div>
          <div className="h-[50vh] bg-greyShade2 z-10"></div>
          <div className="h-[50vh] bg-greyShade1 z-10"></div>
          {/* <div className="h-[50vh] bg-vY "></div> */}
        </div>
      </div>
    </div>
  );
};

export default KontaktContent;
