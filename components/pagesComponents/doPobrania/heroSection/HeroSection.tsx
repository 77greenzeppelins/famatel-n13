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
      data-component="HeroSection__container"
      className="relative fc w-full h-full "
    >
      <HeroBackground />
      <motion.div
        className={`relative fc flex-col gap-10 w-[30%] min-w-[340px] h-[80vh] min-h-[500px] z-10 bg-dark`}
        //___max-w-[600px] max-h-[600px]
        variants={container}
        initial="initial"
        animate="animate"
      >
        {/* <motion.div variants={item}> */}
        <FadingFrame />
        {/* </motion.div> */}

        <motion.div className="fc h-[40%] w-full" variants={item}>
          <SvgLogoF svgStyle={'h-full'} gStyle={'fill-corpo'} />
        </motion.div>

        <motion.div className="fc flex-col" variants={item}>
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
