import React from 'react';
/*Components*/
import DirectPhoneGK from '../../../../_basicComponents/links/directContactLinks/DirectPhoneGK';
import DirectMailGK from '../../../../_basicComponents/links/directContactLinks/DirectMailGK';
import DirectMailB from '../../../../_basicComponents/links/directContactLinks/DirectMailB';

/**HardCoded Staff*/
const aStyle = 'flex items-center gap-6 group no-sparkling w-fit';
const iconsStyle =
  'w-4 h-4 text-light group-hover:text-corpo group-hover:translate-x-1 ease-in duration-300  origin-center';
const labelStyle =
  'p-small text-left text-grey group-hover:text-light duration-[0.3s] delay-[0.1s] ease-in';

/**---------------------------**/
const ContactsLinks: React.FC = () => {
  /**JSX**/
  return (
    <address className="not-italic">
      <ul className="flex flex-col gap-y-5 ">
        <li>
          <DirectPhoneGK
            aStyle={aStyle}
            iconStyle={iconsStyle}
            labelStyle={labelStyle}
          />
        </li>

        <li>
          <DirectMailB
            aStyle={aStyle}
            iconStyle={iconsStyle}
            labelStyle={labelStyle}
          />
        </li>

        <li>
          <DirectMailGK
            aStyle={aStyle}
            iconStyle={iconsStyle}
            labelStyle={labelStyle}
          />
        </li>
      </ul>
    </address>
  );
};

export default ContactsLinks;
