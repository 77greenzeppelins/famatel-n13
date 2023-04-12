import React from 'react';
/**Components**/
import FadingHeader from '../../../multipagesComponents/pseudoHeaders/fadingHeader/FadingHeader';
import CatalogChapters from './catalogChapters/CatalogChapters';
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';

/**TS**/
import { IF_NormalizedNumbers } from '../../../../utils/TS/typeScriptStaff';

/**-----------------------------------------**/
const SectionCatalogy: React.FC<IF_NormalizedNumbers> = ({
  normalizedValues,
}) => {
  /**JSX**/
  return (
    <motion.div className="relative flex flex-col w-full gap-y-10">
      <FadingHeader
        label={'KATALOG w rozdziałach'}
        mainContainerStyle="w-full md:w-[70%] lg:w-[50%] flex flex-col gap-[10px] "
      />
      <CatalogChapters normalizedValues={normalizedValues} />

      <OverlayWithGradient
        initial={{ x: '-50%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 1.6, delay: 0.4 }}
      />
    </motion.div>
  );
};

export default SectionCatalogy;
