import React, { useState } from 'react';
/**Components**/
import ContactAddress from './adres/ContactAddress';
import ContactIntro from './intro/ContactIntro';
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
      className="relative bg-dark pt-[60px]"
    >
      <div className="w-full h-full inner-px-md-xl-xxl">
        <div className="flex flex-col pt-[50px] gap-y-[10px]">
          <ContactIntro />
          <div className="flex flex-col xl:flex-row xl:gap-x-20 gap-y-[80px]">
            <div className="xl:w-[50%]">
              <ContactContacts
                animationStage={animationStage}
                setAnimationStage={setAnimationStage}
                animationStageNumber={1}
              />
            </div>
            <div className="xl:w-[50%]">
              <ContactAddress />
            </div>
          </div>
          <div className="h-[50vh] bg-greyShade2"></div>
          <div className="h-[50vh] bg-greyShade1"></div>
          <div className="h-[50vh] bg-vY"></div>
        </div>
      </div>
    </div>
  );
};

export default KontaktContent;
