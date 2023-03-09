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
      className="relative bg-dark pt-[60px]"
    >
      <div className="w-full h-full inner-px-md-xl-xxl">
        <div className="flex flex-col pt-[50px] gap-y-[10px]">
          <ContactIntro />
          <div className="flex flex-col gap-y-[80px]">
            <ContactContacts />
            <ContactAddress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktContent;
