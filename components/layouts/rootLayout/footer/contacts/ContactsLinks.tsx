import React from 'react';
/*Icons Staff*/
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';
/**Basic Data**/
import { linksToInstantContactData } from '../../../../../data/_data';
/**HardCoded Staff*/
const aStyle = 'flex items-center gap-6 group no-sparkling';
const iconsStyle =
  'w-4 h-4 text-light group-hover:text-corpo group-hover:translate-x-1 ease-in duration-300  origin-center';
const labelStyle =
  'p-small text-left text-grey group-hover:text-light duration-[0.3s] delay-[0.1s] ease-in';

const ContactsLinks = () => {
  return (
    <address className="not-italic">
      <ul className="flex flex-col gap-y-5 ">
        <li>
          <a
            href="tel:601 460 307"
            className={aStyle}
            style={{ width: 'fit-content' }}
          >
            <PhoneIcon className={iconsStyle} />
            <p className={labelStyle}>Telefon: +48 601 460 307</p>
          </a>
        </li>

        <li>
          <a
            href={linksToInstantContactData.mail}
            className={aStyle}
            style={{ width: 'fit-content' }}
          >
            <EnvelopeIcon className={iconsStyle} />
            <p className={labelStyle}>biuro@famatel.pl</p>
          </a>
        </li>

        <li>
          <a
            href="mailto:grzegorz.kowcz@famatel.pl"
            className={aStyle}
            style={{ width: 'fit-content' }}
          >
            <EnvelopeIcon className={iconsStyle} />
            <p className={labelStyle}>grzegorz.kowcz@famatel.pl</p>
          </a>
        </li>
      </ul>
    </address>
  );
};

export default ContactsLinks;
