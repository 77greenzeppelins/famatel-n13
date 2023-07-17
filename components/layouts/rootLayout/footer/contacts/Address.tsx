import React from 'react';
/**ICOns**/
import { MapPinIcon } from '@heroicons/react/24/solid';

/**Basic Data**/
import { story } from '../../../../../data/_data';
const labelDefaultStyle =
  'p-small text-left text-grey group-hover:text-light duration-[0.3s] delay-[0.1s] ease-in';
const iconDefaultStyle =
  'h-4 w-4 text-corpo group-hover:animate-pulse ease-in duration-300 delay-100';

/**TS**/
interface Props {
  labelStyle?: string;
  iconStyle?: string;
}

/**-------------------------------------**/
const Address = ({ labelStyle, iconStyle }: Props) => {
  /**JSX**/
  return (
    <address className="not-italic">
      <ul className="flex flex-col gap-y-5 ">
        {story.pageKontakt.daneFirmy.map(label => (
          <li key={label}>
            <p className={labelStyle ? labelStyle : labelDefaultStyle}>
              {label}
            </p>
          </li>
        ))}
        <li className="flex gap-2">
          <div>
            <MapPinIcon
              className={iconStyle ? iconStyle : iconDefaultStyle}
              //___animate-pulse glow
            />
          </div>
          <p className={labelStyle ? labelStyle : labelDefaultStyle}>
            Dojazd od ul. Strażackiej
          </p>
        </li>
      </ul>
    </address>
  );
};

export default Address;
