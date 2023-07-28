import { useRouter } from 'next/router';
import React, { memo, useEffect } from 'react';

/**Components**/
import GoToTopButton from './goToTopButton/GoToTopButton';
import FooterBottomPart from './_sectionBottom/FooterBottomPart';
import FooterTopPart from './_sectionTop/FooterTopPart';

/**HardCoded Staff*/
const headerTextStyle =
  'header-link-label text-dark font-bold align-middle leading-none';
const ornamentColor = 'border-light';
const labelStyle =
  'p-small text-left text-dark font-bold group-hover:text-light group-hover:font-light duration-[0.3s] delay-[0.1s] ease-in';
// const iconStyle =
//   'h-4 w-4 text-light group-hover:animate-pulse ease-in duration-300 delay-100';
// const iconStyleTrans =
//   'h-4 w-4 text-light group-hover:text-dark group-hover:translate-x-1 ease-in duration-300  origin-center';

const Footer = function Footer() {
  const router = useRouter();
  // useEffect(() => {
  //   console.log('Footer rendered or re-rendered');
  //   // count < 1 && console.log('count:', count);
  // });
  console.log('router.pathname', router.pathname);
  // console.log('router.route', router.route);
  // console.log('router.asPath', router.asPath);

  // if(router.pathname)

  /**JSX**/
  return (
    <footer className="flex flex-col w-full pt-20 ">
      {/* <div className="w-full pb-2 fc">
        <GoToTopButton />
      </div>
      <FooterTopPart
        headerTextStyle={headerTextStyle}
        ornamentColor={ornamentColor}
        labelStyle={labelStyle}
      /> */}
      <div className="fc w-full h-[40vh] p-v-large text-dark bg-yellow-600">
        {router.pathname}
      </div>
      <FooterBottomPart />
    </footer>
  );
};

export default Footer;

{
  /* <div className="relative flex items-end h-20 ">
        <FadingLine gradientTo="toLeft" containerStyle="w-1/2 h-[1px]" />
        <FadingLine gradientTo="toRight" containerStyle="w-1/2 h-[1px]" />
      </div> */
}
{
  /* <div className="w-full inner-px-md-xl-xxl ">
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
      </div> */
}
{
  /* <div className="flex flex-col justify-center ">
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
      </div> */
}

/*
//___my version

// import FadingLine from '../../../multipagesComponents/lines/fadingLine/FadingLine';
// import SmallPseudoHeader from '../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
// import MainPagesLinks from './mainPages/MainPagesLinks';
// import ContactsLinks from './contacts/ContactsLinks';
// import SocialMediaBar from './contacts/SocialMediaBar';
// import ProductCategoriesLinks from './productCategories/ProductCategoriesLinks';
// import GoToTopButton from './goToTopButton/GoToTopButton';
// import Address from './contacts/Address';

 <footer className="flex flex-col w-full gap-y-10">
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



*/
