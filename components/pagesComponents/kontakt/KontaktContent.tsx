import React, { useState } from 'react';
/**Components**/
import ContactIntro from './intro/ContactIntro';
import ContactAddress from './adres/ContactAddress';

import ContactContacts from './kontakty/ContactContacts';
import ContactMapka from './mapka/ContactMapka';

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
        <div className="inner-px-md-xl-xxl">
          <div className="flex flex-col gap-y-14 w-full">
            <div
              className="flex w-full md:w-[50%] flex-col gap-y-14 xl:gap-y-20 z-10"
              //___xl:flex-row xl:gap-x-20 gap-y-[80px]
            >
              <div className=" ">
                <ContactContacts
                  animationStage={animationStage}
                  setAnimationStage={setAnimationStage}
                  animationStageNumber={1}
                />
              </div>
              <div className="">
                <ContactAddress />
              </div>
            </div>
            <div className="">
              <ContactMapka />
            </div>
            {/* <div className="hidden md:block md:w-[50%] h-ful z-10 bg-corpo"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktContent;
