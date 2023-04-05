import React from 'react';
/**Components*/
import FadingHeader from '../../../multipagesComponents/pseudoHeaders/fadingHeader/FadingHeader';
import DeclarationsList from './declarations/DeclarationsList';
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';

/**---------------------------------**/
const SectionDeclarations = () => {
  /**JSX**/
  return (
    <div className="relative flex flex-col w-full gap-y-10">
      <FadingHeader label={'DEKLARACJE zgodności'} />
      <div>
        <DeclarationsList />
      </div>
      <OverlayWithGradient
        initial={{ x: '-50%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, delay: 0.4 }}
      />
    </div>
  );
};

export default SectionDeclarations;
