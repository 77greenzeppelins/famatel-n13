import React from 'react';
/**ICOns**/
import { MapPinIcon } from '@heroicons/react/24/solid';

/**Basic Data**/
import { story } from '../../../../../data/_data';
const labelStyle =
  'p-small text-left text-grey group-hover:text-light duration-[0.3s] delay-[0.1s] ease-in';

const Address = () => {
  /**JSX**/
  return (
    <address className="not-italic">
      <ul className="flex flex-col gap-y-5 ">
        {story.pageKontakt.daneFirmy.map(label => (
          <li key={label}>
            <p className={labelStyle}>{label}</p>
          </li>
        ))}
        <li className="flex gap-2">
          <div>
            <MapPinIcon
              className="h-4 w-4  text-corpo group-hover:animate-pulse ease-in duration-300 delay-100"
              //___animate-pulse glow
            />
          </div>
          <p className={labelStyle}>Dojazd od ul. Strażackiej</p>
        </li>
        {/* <li>
        <p className={labelStyle}></p>
      </li>

      <li>
        <p className={labelStyle}></p>
      </li>

      <li>
        <p className={labelStyle}></p>
      </li> */}
      </ul>
    </address>
  );
};

export default Address;
