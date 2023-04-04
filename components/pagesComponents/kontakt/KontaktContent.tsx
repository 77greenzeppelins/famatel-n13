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
          <div className="flex flex-col gap-y-20 lg:gap-y-28 w-full">
            <div className="flex w-full md:w-[50%] flex-col gap-y-20 lg:gap-y-28 z-10">
              <div className=" ">
                <ContactContacts />
              </div>
              <div className="">
                <ContactAddress />
              </div>
            </div>
            <div className="">
              <ContactMapka />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktContent;
