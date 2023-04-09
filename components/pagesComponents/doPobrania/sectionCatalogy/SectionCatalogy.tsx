import React from 'react';
/**Components**/
import FadingHeader from '../../../multipagesComponents/pseudoHeaders/fadingHeader/FadingHeader';
import CatalogChapters from './catalogChapters/CatalogChapters';
// import FullCatalog from './fullCatalog/FullCatalog';
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';

/**TS**/
type Props = {
  componentIsInView?: boolean;
  mdTextStyle: string;
  lgTextStyle: string;
};

/**-----------------------------------------**/
const SectionCatalogy: React.FC<Props> = ({ mdTextStyle, lgTextStyle }) => {
  /**JSX**/
  return (
    <motion.div className="relative flex flex-col w-full gap-y-10">
      <FadingHeader label={'KATALOG w rozdziałach'} />
      <div className="flex flex-col-reverse xxl:flex-row gap-10">
        <CatalogChapters />
        {/* <FullCatalog mdTextStyle={mdTextStyle} lgTextStyle={lgTextStyle} /> */}
      </div>
      <OverlayWithGradient
        initial={{ x: '-50%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 1.6, delay: 0.4 }}
      />
    </motion.div>
  );
};

export default SectionCatalogy;
