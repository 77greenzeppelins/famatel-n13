import React from 'react';
/*Components*/
import DirectPhoneGK from '../../../../_basicComponents/links/directContactLinks/DirectPhoneGK';
import DirectMailGK from '../../../../_basicComponents/links/directContactLinks/DirectMailGK';
import DirectMailB from '../../../../_basicComponents/links/directContactLinks/DirectMailB';

/**HardCoded Staff*/
const aDefaultStyle = 'flex items-center gap-6 group no-sparkling w-fit';
const iconDefaultStyle =
  'w-4 h-4 text-light group-hover:text-corpo group-hover:translate-x-1 ease-in duration-300  origin-center';
const labelDefaultStyle =
  'p-small text-left text-grey group-hover:text-light duration-[0.3s] delay-[0.1s] ease-in';

/**TS**/
interface Props {
  aStyle?: string;
  iconStyle?: string;
  labelStyle?: string;
}
/**---------------------------**/
const ContactsLinks = ({ aStyle, iconStyle, labelStyle }: Props) => {
  /**JSX**/
  return (
    <address className="not-italic">
      <ul className="flex flex-col gap-y-5 ">
        <li>
          <DirectPhoneGK
            aStyle={aStyle ? aStyle : aDefaultStyle}
            iconStyle={iconStyle ? iconStyle : iconDefaultStyle}
            labelStyle={labelStyle ? labelStyle : labelDefaultStyle}
          />
        </li>

        <li>
          <DirectMailB
            aStyle={aStyle ? aStyle : aDefaultStyle}
            iconStyle={iconStyle ? iconStyle : iconDefaultStyle}
            labelStyle={labelStyle ? labelStyle : labelDefaultStyle}
          />
        </li>

        <li>
          <DirectMailGK
            aStyle={aStyle ? aStyle : aDefaultStyle}
            iconStyle={iconStyle ? iconStyle : iconDefaultStyle}
            labelStyle={labelStyle ? labelStyle : labelDefaultStyle}
          />
        </li>
      </ul>
    </address>
  );
};

export default ContactsLinks;
