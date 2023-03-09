import React from 'react';
/**Components**/
import ContactAddress from './adres/ContactAddress';
import ContactIntro from './intro/ContactIntro';
import ContactContacts from './kontakty/ContactContacts';

/**----------------------------------**/
const KontaktContent = () => {
  /**JSX**/
  return (
    <div
      data-component="KontaktContent__container"
      className="relative w-screen bg-dark pt-[60px]"
    >
      <div className="w-full h-full inner-px-md-xl-xxl">
        <div className="flex flex-col gap-y-[50px] lg:gap-y-[50px] pt-[50px] ">
          <ContactIntro />
          <ContactContacts />
          <ContactAddress />
        </div>
      </div>
    </div>
  );
};

export default KontaktContent;
