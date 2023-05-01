import React from 'react';
import Image, { StaticImageData } from 'next/image';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data / arrays of images for each category **/
import { imgWtyczkiGniazdaSlides } from '../../../../../../../../../public/images/c1_wtyczki-gniazda/imgWtyczkiGniazda';
import { imgGniazdaZBlokadaSlides } from '../../../../../../../../../public/images/c2_gniazda-z-blokada/imgGniazdaZBlokada';
import { imgAdapteryPrzemysloweSlides } from '../../../../../../../../../public/images/c3_adaptery-przemyslowe/imgAdapteryPrzemyslowe';
import { imgGniazdaPodwieszaneSlides } from '../../../../../../../../../public/images/c4_gniazda-podwieszane/imgGniazdaPodwieszane';
import { imgPrzedluzaczeBebnoweSlides } from '../../../../../../../../../public/images/c5_przedluzacze-bebnowe/imgPrzedluzaczeBebnowe';
import { imgRozlacznikBezpieczenstwaSlides } from '../../../../../../../../../public/images/c6_rozlacznik-bezpieczenstwa/imgRozlacznikBezpieczenstwa';
import { imgLadowarkiSlides } from '../../../../../../../../../public/images/c7_ladowarki/imgLadowarki';
import { imgObudowyRozdzielniceSlide } from '../../../../../../../../../public/images/c8_obudowy-rozdzielnice/imgObudowyRozdzielnice';
import { imgRozdzielniceModuloweSlider } from '../../../../../../../../../public/images/c9_rozdzielnice-modulowe/imgRozdzielniceModulowe';
import { imgPuszkiInstalacyjneSlider } from '../../../../../../../../../public/images/c10_puszki-instalacyjne/imgPuszkiInstalacyjne';
// import { imgDomoweSlider } from '../../../../../../../../../public/images/c11_domowe/imgDomowe';
const arrOfImages = [
  imgWtyczkiGniazdaSlides,
  imgGniazdaZBlokadaSlides,
  imgAdapteryPrzemysloweSlides,
  imgGniazdaPodwieszaneSlides,
  imgPrzedluzaczeBebnoweSlides,
  imgRozlacznikBezpieczenstwaSlides,
  imgLadowarkiSlides,
  imgObudowyRozdzielniceSlide,
  imgRozdzielniceModuloweSlider,
  imgPuszkiInstalacyjneSlider,
  // imgDomoweSlider,
];

/**----------------------------------------------------**/
const ImageContnent: React.FunctionComponent<{
  categoryIndex: number;
  slideIndex: number;
}> = ({ categoryIndex, slideIndex }) => {
  /**Basic Data**/
  const categoryImages = arrOfImages[categoryIndex];

  console.log('....slideIndex:', slideIndex);
  /**JSX**/
  return (
    <div className="relative w-full h-full bg-light p-5 rounded-sm overflow-hidden">
      <AnimatePresence initial={true} mode="wait">
        <motion.div
          key={categoryIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.1, duration: 0.8 },
          }}
          exit={{ opacity: 0 }}
          className="relative fc w-full h-full "
        >
          <Image
            alt="produkt z kategorii"
            src={categoryImages[slideIndex].image}
            fill
            sizes="400"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageContnent;
