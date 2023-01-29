import React from 'react';
import SectionContentLayout from '../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
/*Icons Staff*/
import { MapPinIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';

const iconsStyle =
  'w-[30px] h-[30px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] text-dark group-hover:text-corpo group-hover:translate-x-1 ease-in duration-300  origin-center';
const labelStyle =
  'text-dark text-2xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 group-hover:text-corpo group-hover:-translate-x-1 ease-in duration-300  origin-center';

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
      <div className="flex  flex-col gap-6">
        {/* <div > */}
        <a
          href="tel:601 460 307"
          className="flex items-center gap-4 w-full h-full no-sparkling group"
        >
          <PhoneIcon className={iconsStyle} />
          <p className={labelStyle}>Telefon: +48 601 460 307</p>
        </a>
        {/* </div> */}

        <div>
          <a
            href="mailto:biuro@famatel.pl"
            className="flex items-center gap-4 w-full h-full no-sparkling group"
          >
            <EnvelopeIcon className={iconsStyle} />
            <p className={labelStyle}>biuro@famatel.pl</p>
          </a>
        </div>
        <div className="">
          <a
            href="mailto:grzegorz.kowcz@famatel.pl"
            className="flex items-center gap-4 w-full h-full no-sparkling group"
          >
            <EnvelopeIcon className={iconsStyle} />
            <p className={labelStyle}>grzegorz.kowcz@famatel.pl</p>
          </a>
        </div>
        {/* <div>
          <p className="text-dark text-2xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025">
            Telefon: +48 601 460 307 E-mail: biuro@famatel.pl E-mail:
            grzegorz.kowcz@famatel.pl
          </p>{' '}
        </div> */}
      </div>
    </SectionContentLayout>
  );
};

export default ContactContacts;
