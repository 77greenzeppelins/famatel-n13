import React, { memo, useEffect } from 'react';
/**Components**/
import FadingLine from '../../../multipagesComponents/lines/fadingLine/FadingLine';
import SmallPseudoHeader from '../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import MainPagesLinks from './mainPages/MainPagesLinks';
import ContactsLinks from './contacts/ContactsLinks';
import SocialMediaBar from './contacts/SocialMediaBar';
import ProductCategoriesLinks from './productCategories/ProductCategoriesLinks';
import GoToTopButton from './goToTopButton/GoToTopButton';
import Address from './contacts/Address';

const Footer = memo(function Footer() {
  // useEffect(() => {
  //   console.log('Footer rendered or re-rendered');
  //   // count < 1 && console.log('count:', count);
  // });

  /**JSX**/
  return (
    <footer className="flex flex-col w-full pb-10 gap-y-10">
      <div className="relative flex items-end h-20 ">
        <FadingLine gradientTo="toLeft" containerStyle="w-1/2 h-[1px]" />
        <FadingLine gradientTo="toRight" containerStyle="w-1/2 h-[1px]" />
      </div>
      <div className="w-full inner-px-md-xl-xxl ">
        <div className="flex flex-col w-full sm:flex-row gap-y-14 sm:gap-h-0 ">
          <div className="flex flex-col w-full gap-y-14 xs4xx:flex-row xs4xx:gap-x-6 sm:w-2/3 sm:gap-x-0">
            <div className="flex flex-col w-full gap-y-6 xs4xxw-1/2">
              <SmallPseudoHeader text="Kontakt" />
              <ContactsLinks />
              <SmallPseudoHeader text="Dane Firmowe" />
              <Address />
              <SocialMediaBar />
            </div>
            <div className="flex flex-col w-full gap-y-6 xs4xxw-1/2">
              <SmallPseudoHeader text="Strony" />
              <MainPagesLinks />
            </div>
          </div>
          <div className="flex flex-col w-full gap-y-6 sm:w-1/3">
            <SmallPseudoHeader text="Kategorie produktów" />
            <ProductCategoriesLinks />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center ">
        <div className="flex justify-between inner-px-md-xl-xxl">
          <div className="flex gap-x-1">
            <p className="p-small text-grey">&copy;</p>
            <p className="p-small text-grey">2023. Famatel Polska</p>
          </div>
          <div>
            <p className="p-small text-grey">web development: 77</p>
          </div>
        </div>
        <div className="w-full fc">
          <GoToTopButton />
        </div>
      </div>
    </footer>
  );
});

export default Footer;
