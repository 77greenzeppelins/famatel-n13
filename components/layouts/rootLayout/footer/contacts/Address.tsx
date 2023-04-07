import React from 'react';

/**Basic Data**/
import { story } from '../../../../../data/_data';
const labelStyle =
  'p-small text-left text-grey group-hover:text-light duration-[0.3s] delay-[0.1s] ease-in';

const Address = () => {
  /**JSX**/
  return (
    <address className="not-italic">
      <ul className="flex flex-col gap-y-5 ">
        {story.pageKontakt.adres.map(label => (
          <li key={label}>
            <p className={labelStyle}>{label}</p>
          </li>
        ))}
        <li>
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
