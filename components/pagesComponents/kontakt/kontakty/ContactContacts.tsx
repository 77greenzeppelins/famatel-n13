import React from 'react';
/**Components**/
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';
import FadingHeader from '../../../multipagesComponents/pseudoHeaders/fadingHeader/FadingHeader';
/*Icons Staff*/
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';
/**Basic Data**/
import { linksToInstantContactData } from '../../../../data/_data';
/**Framer Motion staff*/
import { motion } from 'framer-motion';

/**HardCoded Staff*/
const aStyle = 'flex items-center gap-6 group no-sparkling';
const iconsStyle =
  'w-6 h-6 text-light group-hover:text-corpo group-hover:translate-x-1 ease-in duration-300  origin-center';
const labelStyle =
  'text-grey text-[1rem] lg:text-2xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 group-hover:text-light group-hover:-translate-x-1 ease-in duration-300  origin-center break-all';

/**-------------------------------------------------------------------------------**/
const ContactContacts: React.FunctionComponent = () => {
  /**JSX**/
  return (
    <div className="relative flex flex-col gap-y-1">
      <motion.div
        className=" flex flex-col gap-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.01, delay: 0.2 } }}
      >
        <FadingHeader label={'Kontakt'} />

        <div className="flex flex-col gap-y-5 ">
          <div>
            <a
              href="tel:601 460 307"
              className={aStyle}
              style={{ width: 'fit-content' }}
            >
              <PhoneIcon className={iconsStyle} />
              <p className={labelStyle}>Telefon: +48 601 460 307</p>
            </a>
          </div>

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

          <div>
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
      </motion.div>

      <OverlayWithGradient
        initial={{ x: '-50%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, delay: 0.6 }}
      />
    </div>
  );
};

export default ContactContacts;
