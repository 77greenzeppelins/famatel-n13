import React from 'react';
import SectionContentLayout from '../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
/*Icons Staff*/
import { MapPinIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { linksToInstantContactData } from '../../../../data/_data';

const aStyle = 'flex items-center gap-6 group no-sparkling';
const iconsStyle =
  'w-6 h-6 text-light group-hover:text-corpo group-hover:translate-x-1 ease-in duration-300  origin-center';
const labelStyle =
  'text-grey text-[1rem] lg:text-2xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 group-hover:text-light group-hover:-translate-x-1 ease-in duration-300  origin-center break-all';

/**----------------------------------**/
const ContactContacts = () => {
  return (
    <SectionContentLayout>
      <div className="w-full border-b border-grey">
        {' '}
        <p className="text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025">
          Kontakt
        </p>{' '}
      </div>
      <div className="flex flex-col gap-6 pt-2 ">
        <a
          href="tel:601 460 307"
          className={aStyle}
          // style={{ width: 'fit-content' }}
        >
          <PhoneIcon className={iconsStyle} />
          <p className={labelStyle}>Telefon: +48 601 460 307</p>
        </a>

        <div>
          <a
            href={linksToInstantContactData.mail}
            className={aStyle}
            style={{ width: 'fit-content' }}
          >
            <EnvelopeIcon className={iconsStyle} />
            <p className={labelStyle}>biuro@famatel.pl</p>
          </a>
        </div>
        <div className="">
          <a
            href="mailto:grzegorz.kowcz@famatel.pl"
            className={aStyle}
            style={{ width: 'fit-content' }}
          >
            <EnvelopeIcon className={iconsStyle} />
            <p className={labelStyle}>grzegorz.kowcz@famatel.pl</p>
          </a>
        </div>
      </div>
    </SectionContentLayout>
  );
};

export default ContactContacts;
