import React from 'react';
import FadingLine from '../../../multipagesComponents/lines/fadingLine/FadingLine';
import SmallPseudoHeader from '../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import ContactsLinks from './contacts/ContactsLinks';
import GoToTopButton from './goToTopButton/GoToTopButton';
import MainPagesLinks from './mainPages/MainPagesLinks';
import ProductCategoriesLinks from './productCategories/ProductCategoriesLinks';

const Footer = () => {
  return (
    <footer className="w-full pb-10">
      <div className="relative flex items-end h-20 ">
        <FadingLine gradientTo="toLeft" containerStyle="w-1/2 h-[1px]" />
        <FadingLine gradientTo="toRight" containerStyle="w-1/2 h-[1px]" />
        {/* <div className="absolute inset-0 fc">
          <GoToTopButton />
        </div> */}
      </div>

      <div className="w-full h-24 sm:h-40 fc pb-4">
        <div>
          <GoToTopButton />
        </div>
      </div>
      <div className="w-full inner-px-md-xl-xxl ">
        <div className="flex flex-col sm:flex-row gap-y-14 sm:gap-h-0 w-full  ">
          <div className="flex flex-col gap-y-8 xs4xx:flex-row w-full sm:w-2/3">
            <div className="flex flex-col gap-y-6 w-1/2">
              <SmallPseudoHeader text="Strony" />
              <MainPagesLinks />
            </div>
            <div className="flex flex-col gap-y-6 w-1/2">
              <SmallPseudoHeader text="Kontakt" />
              <ContactsLinks />
            </div>
          </div>
          <div className="flex flex-col gap-y-6 w-full sm:w-1/3">
            <SmallPseudoHeader text="Kategorie produktów" />
            <ProductCategoriesLinks />
          </div>
        </div>
      </div>
      <div className="flex justify-between inner-px-md-xl-xxl pt-20">
        <div className="flex gap-x-1">
          <p className="p-small text-grey">&copy;</p>
          <p className="p-small text-grey">2013. Famatel Polska</p>
        </div>
        <div>
          <p className="p-small text-grey">twórca: 77</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
