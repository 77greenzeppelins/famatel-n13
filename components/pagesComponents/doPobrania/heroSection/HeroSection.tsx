import React from 'react';
/**Components**/
import FadingFrame from '../../../multipagesComponents/lines/fadingFrame/FadingFrame';
import SvgLogoF from '../../../SVG/logo/SvgLogoF';
import DownloadableLink from '../../../_basicComponents/links/downloadableLink/DownloadableLink';
/**Hardcoded Staff**/
const catalogLink = '/pdf/catalog/Katalog 2023.pdf';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';
import HeroBackground from './heroBackground/HeroBackground';
const container = {
  animate: { transition: { staggerChildren: 0.5 } },
};
const item = {
  initial: { opacity: 0, y: '5%' },
  animate: {
    opacity: 1,
    y: 0,
    // transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.95] },
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

/**-------------------------------**/
const HeroSection: React.FC<{ mdTextStyle?: string; lgTextStyle?: string }> = ({
  mdTextStyle,
  lgTextStyle,
}) => {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      data-component="HeroSection__container"
      className="relative w-full h-full fc"
    >
      <div
        className="absolute h-full left-0 w-[5%] max-w-[40px] z-10 from-dark  to-transparent bg-gradient-to-r"
        //___via-dark
      />
      <div className="absolute h-full right-0 w-[5%] max-w-[40px] z-10 from-dark to-transparent bg-gradient-to-l" />
      <HeroBackground />
      <motion.div
        className={`relative fc flex-col gap-10 w-[90%] xs4xx:w-[360px] lg:w-[400px] xxl:w-[460px] h-[80vh] min-h-[460px] z-10 bg-dark`}
        //___max-w-[600px] max-h-[600px]
        variants={container}
        initial="initial"
        animate="animate"
      >
        <FadingFrame />

        <motion.div className="fc h-[40%] w-full" variants={item}>
          <SvgLogoF svgStyle={'h-full'} gStyle={'fill-corpo'} />
        </motion.div>

        <motion.div className="flex-col fc" variants={item}>
          <p className={lgTextStyle}>Katalog</p>
          <p className={mdTextStyle}>2023</p>
        </motion.div>

        <motion.div
          className="flex items-center justify-between min-w-[92px] gap-3 group"
          variants={item}
        >
          <DownloadableLink
            staffToDownload={catalogLink}
            linkLabel={'PEŁNA WERSJA (53 MB)'}
            textStyle={
              'header-link-label text-grey group-hover:text-light ease-in duration-300 disable whitespace-normal'
            }
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
