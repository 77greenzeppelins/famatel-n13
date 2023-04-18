import React from 'react';
/**Components**/
import ContactIntro from './intro/ContactIntro';
import ContactAddress from './adres/ContactAddress';
import ContactContacts from './kontakty/ContactContacts';
import ContactMapka from './mapka/ContactMapka';
import WorldMapComponent from '../../SVG/maps/WorldMapComponent';

/**----------------------------------**/
const KontaktContent = () => {
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
            <div className="flex">
              <div className="flex w-full md:w-[50%] xl:w-[45%] flex-col gap-y-20 lg:gap-y-28 z-10">
                <div className=" ">
                  <ContactContacts />
                </div>
                <div className="">
                  <ContactAddress />
                </div>
              </div>
              <div className="hidden lg:flex justify-center items-end h-auto w-[50%] xl:w-[55%] z-10 ">
                <WorldMapComponent widthToDrag={1500} />
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
