import React from 'react';
/**Components**/
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';
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
const ContactContacts: React.FunctionComponent<{
  animationDelay?: number;
  setAnimationStage: React.Dispatch<React.SetStateAction<number>>;
  animationStage: number;
  animationStageNumber: number;
}> = ({
  animationDelay = 2,
  setAnimationStage,
  animationStage,
  animationStageNumber,
}) => {
  /**JSX**/
  return (
    <div className="relative flex flex-col gap-y-4">
      <div className="w-full">
        {/*
        _________________________________________________header_Section
        */}
        <div
        //  animationDelay={animationDelay}
        >
          <p className="text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025">
            Kontakt
          </p>
        </div>
        <motion.div
          // className="w-full h-[1px] border-b-[0.5px] border-grey"
          className="w-full h-[0.75px] bg-gradient-to-r from-light via-grey to-transparent"

          // initial={{ y: '110%', opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // transition={{ duration: 0.6, delay: animationDelay }}
        />
      </div>
      {/*
      _________________________________________________kontact_Section
      */}
      <div className="flex flex-col gap-y-10 pt-2">
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

        <div
        // onAnimationCompleteHandler={onAnimationCompleteHandler}
        >
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
      <OverlayWithGradient
        initial={{ x: '-50%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, delay: 0.6 }}
      />
    </div>
  );
};

export default ContactContacts;
