import React from 'react';
/**Components**/
import InViewContainer from '../../../containers/inViewContainer/InViewContainer';
import InViewAnimatedContent from '../_inViewAnimatedContent/InViewAnimatedContent';
import FadingHeader from '../../../multipagesComponents/pseudoHeaders/fadingHeader/FadingHeader';
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';
import SvgMap from '../../../SVG/maps/SvgMap';
import { MapPinIcon } from '@heroicons/react/24/solid';

const labelStyle =
  'text-grey text-[1rem] lg:text-2xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 group-hover:text-light  ease-in duration-300  origin-center break-all';

/**--------------------------------**/
const ContactMapka = () => {
  return (
    <div className="relative flex flex-col gap-y-4 pb-10">
      <InViewContainer
        animationDelay={2}
        outherContainerStyle="w-full"
        measuredElementStyle="relative "
        // topFactor={0.3}
        // bottomFactor={0.3}
        topFactor={0.1}
        bottomFactor={0.2}
      >
        <InViewAnimatedContent>
          <FadingHeader label={'Dojazd'} />
          <div className="flex flex-col sm:flex-row items-center h-full gap-y-6 sm:gap-y-0 sm:gap-2 lg:gap-10 ">
            <div className="flex w-full gap-x-6 sm:w-[40%] h-full pt-2 ">
              <MapPinIcon className="h-[24px] w-[24px] text-corpo" />
              <p className={labelStyle}>ul. Strażacka 666</p>
            </div>

            <div className="flex w-full gap-x-6 min-h-[400px] xl:h-[70vh] pt-2">
              <SvgMap containerStyle="w-full" />
            </div>
          </div>
        </InViewAnimatedContent>
      </InViewContainer>
      <OverlayWithGradient
        initial={{ x: '-50%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, delay: 0.6 }}
      />
    </div>
  );
};

export default ContactMapka;
