import React from 'react';
/**Components**/
import InViewContainer from '../../../containers/inViewContainer/InViewContainer';
import InViewAnimatedContent from '../_inViewAnimatedContent/InViewAnimatedContent';
import FadingHeader from '../../../multipagesComponents/pseudoHeaders/fadingHeader/FadingHeader';
import OverlayWithGradient from '../../../multipagesComponents/overlays/ovelayWithGradient/OverlayWithGradient';
import SvgMap from '../../../SVG/maps/SvgMap';
import { MapPinIcon } from '@heroicons/react/24/solid';

/**Basic Data**/
import { story } from '../../../../data/_data';
import LinkWithMap from './linkWithMap/LinkWithMap';
import Link from 'next/link';

/**ChardCoded Staff**/
const labelStyle =
  'text-grey text-[1rem] lg:text-2xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 group-hover:text-light ease-in duration-300 delay-100 origin-center break-all';

/**--------------------------------**/
const ContactMapka = () => {
  return (
    <div className="relative flex flex-col pb-10 gap-y-4">
      <InViewContainer
        animationDelay={2}
        outherContainerStyle="w-full"
        measuredElementStyle="relative "
        topFactor={0.2}
        bottomFactor={0.1}
      >
        <InViewAnimatedContent>
          <FadingHeader
            label={'Dojazd'}
            mainContainerStyle=" flex flex-col w-full md:w-[50%] gap-[10px] "
          />
          <div className="flex flex-col items-center h-full w-full sm:flex-row gap-y-6 sm:gap-y-0 sm:gap-2 lg:gap-10">
            <div className="flex flex-col w-full sm:w-[40%] lg:w-[50%] xl:w-[45%]lg:w-[50%] xl:w-[45%] h-full pt-2 ">
              <ul className="flex flex-col gap-5 group">
                {story.pageKontakt.dojazd.map(label => (
                  <li key={label}>
                    <p className={labelStyle}>{label}</p>
                  </li>
                ))}
                <li className="flex items-center gap-x-3">
                  <MapPinIcon className="h-[16px] w-[16px] lg:h-[20px] lg:w-[20px] text-corpo group-hover:animate-pulse ease-in duration-300 delay-100" />
                  <p className={labelStyle}>{story.pageKontakt.dojazdNav}</p>
                </li>
              </ul>
            </div>
            <div className="relative flex w-full gap-x-6 min-h-[400px] xl:h-[80vh] lg:w-[50%] xl:w-[55%] md:justify-center pt-2">
              <Link
                className="absolute z-10 w-full h-full"
                role="link"
                target="_blank"
                rel="noopener"
                // href="https://www.google.com/maps/search/Av.+el+Pla,+11+P.I.+Pla+els+Baltzacs.+08185+Lli%C3%A7%C3%A0+de+Vall.++Barcelona.+Spain/@41.587764,2.2493782,17z"
                href="https://www.google.com/maps/search/Famatel+Polska+Sp.o.o+ul.+Willowa+5,+58+260+Bielawa+Polska"
                //___Av. el Pla, 11 P.I. Pla els Baltzacs. 08185 Lliçà de Vall.  Barcelona. Spain
                // href="https://www.google.com/maps/search/ul.+Willowa+5,+58+260+Bielawa+Polska"
                //__ul. Willowa 5, 58-260 Bielawa
                // href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.1226646024706!2d16.600824306419636!3d50.680548067870525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e3715598e761f%3A0x10519edde159a1b6!2sFamatel%20Polska%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1669975901879!5m2!1spl!2spl"
                scroll={false}
                aria-label={'Link do GoogleMap'}
              />
              <SvgMap containerStyle="relative w-full z-5" />
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
