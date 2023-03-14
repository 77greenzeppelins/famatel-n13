import React from 'react';
/**Components**/
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
import SvgMap from '../../../SVG/maps/SvgMap';

/**--------------------------------**/
const ContactMapka = () => {
  return (
    <div className="relative flex flex-col gap-y-4 pb-10">
      <div className="w-full">
        {/*
        _________________________________________________header_Section
        */}
        <div>
          <p className="text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025">
            Dojazd
          </p>
        </div>
        <motion.div className="w-full h-[1px] bg-gradient-to-r from-light via-grey to-transparent" />
      </div>
      {/*
      _________________________________________________kontact_Section
      */}
      <div>
        <div className="flex w-[50%] pt-2">
          <SvgMap containerStyle="w-full" />
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

export default ContactMapka;
