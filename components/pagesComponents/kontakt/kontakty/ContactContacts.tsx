import React from 'react';
import SectionContentLayout from '../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
/*Icons Staff*/
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';
/**Basic Data**/
import { linksToInstantContactData } from '../../../../data/_data';
import ScaledYWrapper from '../_scaledYWrapper/ScaledYWrapper';
/**Framer Motion staff*/
import { motion } from 'framer-motion';

/**HardCoded Staff*/
const aStyle = 'flex items-center gap-6 group no-sparkling';
const iconsStyle =
  'w-6 h-6 text-light group-hover:text-corpo group-hover:translate-x-1 ease-in duration-300  origin-center';
const labelStyle =
  'text-grey text-[1rem] lg:text-2xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 group-hover:text-light group-hover:-translate-x-1 ease-in duration-300  origin-center break-all';

/**-------------------------------------------------------------------------------**/
const ContactContacts: React.FunctionComponent<{ animationDelay?: number }> = ({
  animationDelay = 2,
}) => {
  return (
    <SectionContentLayout>
      <div className="w-full ">
        <ScaledYWrapper animationDelay={animationDelay}>
          <p className="text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025">
            Kontakt
          </p>
        </ScaledYWrapper>

        <motion.div
          className="w-full h-[1px] border-b-[0.5px] border-grey"
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: animationDelay }}
        />
      </div>
      {/*
      ___________________________________________________________kontact Section
      */}
      <div className="flex flex-col gap-y-10  pt-2">
        <ScaledYWrapper animationDelay={animationDelay * 1.5}>
          <a
            href="tel:601 460 307"
            className={aStyle}
            style={{ width: 'fit-content' }}
          >
            <PhoneIcon className={iconsStyle} />
            <p className={labelStyle}>Telefon: +48 601 460 307</p>
          </a>
        </ScaledYWrapper>

        <ScaledYWrapper animationDelay={animationDelay * 1.7}>
          <a
            href={linksToInstantContactData.mail}
            className={aStyle}
            style={{ width: 'fit-content' }}
          >
            <EnvelopeIcon className={iconsStyle} />
            <p className={labelStyle}>biuro@famatel.pl</p>
          </a>
        </ScaledYWrapper>

        <ScaledYWrapper animationDelay={animationDelay * 1.9}>
          <a
            href="mailto:grzegorz.kowcz@famatel.pl"
            className={aStyle}
            style={{ width: 'fit-content' }}
          >
            <EnvelopeIcon className={iconsStyle} />
            <p className={labelStyle}>grzegorz.kowcz@famatel.pl</p>
          </a>
        </ScaledYWrapper>
      </div>
    </SectionContentLayout>
  );
};

export default ContactContacts;
