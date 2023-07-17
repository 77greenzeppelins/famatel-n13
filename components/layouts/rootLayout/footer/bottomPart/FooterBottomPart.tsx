import React from 'react';
/**Components**/
import SvgLogo from '../../../../SVG/logo/SvgLogo';
/**BasicData**/
import { corpoColors, corpoStandards } from '../../../../../data/_data';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import ContactsLinks from '../contacts/ContactsLinks';
import Address from '../contacts/Address';
import SocialMediaBar from '../contacts/SocialMediaBar';
import CopyProtect from '../copyProtect/CopyProtect';

/**HardCoded Staff*/
const labelStyle =
  'p-small text-left text-dark font-bold group-hover:text-light group-hover:font-light duration-[0.3s] delay-[0.1s] ease-in';
const iconStyle =
  'h-4 w-4 text-light group-hover:animate-pulse ease-in duration-300 delay-100';
const iconStyleTrans =
  'h-4 w-4 text-light group-hover:text-dark group-hover:translate-x-1 ease-in duration-300  origin-center';
const aStyle = 'flex items-center gap-6 group no-sparkling w-fit';

const FooterBottomPart = () => {
  return (
    <div className="flex justify-between min-h-[300px] bg-corpo inner-px-md-xl-xxl py-6">
      <div className="flex justify-start items-center h-full border-r border-grey">
        <div
          //  className={`${corpoStandards.headerStyle}`}
          className="h-[52px] lg:h-[66px]"
        >
          <SvgLogo
            fillColorText={corpoColors.dark}
            hasSygnet={false}
            isHovered={false}
          />
        </div>
      </div>
      <div>
        <div className="flex gap-x-20">
          <div className="flex flex-col gap-y-6 ">
            <SmallPseudoHeader
              text="Dane Firmowe"
              textStyle="header-link-label text-dark font-bold align-middle leading-none"
              ornamentColor="border-light"
            />
            <Address labelStyle={labelStyle} iconStyle={iconStyle} />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-y-6 ">
              <SmallPseudoHeader
                text="Kontakt"
                textStyle="header-link-label text-dark font-bold align-middle leading-none"
                ornamentColor="border-light"
              />
              <ContactsLinks
                iconStyle={iconStyleTrans}
                labelStyle={labelStyle}
              />
            </div>
            <SocialMediaBar
              fillColor={corpoColors.light}
              fillColorWhileHover={corpoColors.dark}
            />
            <CopyProtect labelStyle={labelStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomPart;
