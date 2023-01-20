import React from 'react';
import Image, { StaticImageData } from 'next/image';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data / arrays of images for each category **/
import { imgWtyczkiGniazda } from '../../../../../../../../../public/images/c1_wtyczki-gniazda/imgWtyczkiGniazda';
import { imgGniazdaZBlokada } from '../../../../../../../../../public/images/c2_gniazda-z-blokada/imgGniazdaZBlokada';
import { imgAdapteryPrzemyslowe } from '../../../../../../../../../public/images/c3_adaptery-przemyslowe/imgAdapteryPrzemyslowe';
import { imgGniazdaPodwieszaneFake } from '../../../../../../../../../public/images/c4_gniazda-podwieszane/imgGniazdaPodwieszane';
import { imgPrzedluzaczeBebnowe } from '../../../../../../../../../public/images/c5_przedluzacze-bebnowe/imgPrzedluzaczeBebnowe';
import { imgRozlacznikBezpieczenstwaSlides } from '../../../../../../../../../public/images/c6_rozlacznik-bezpieczenstwa/imgRozlacznikBezpieczenstwa';
import { imgLadowarkiSlides } from '../../../../../../../../../public/images/c7_ladowarki/imgLadowarki';
import { imgObudowyRozdzielniceSlide } from '../../../../../../../../../public/images/c8_obudowy-rozdzielnice/imgObudowyRozdzielnice';
import { imgRozdzielniceModuloweSlider } from '../../../../../../../../../public/images/c9_rozdzielnice-modulowe/imgRozdzielniceModulowe';
import { imgPuszkiInstalacyjneSlider } from '../../../../../../../../../public/images/c10_puszki-instalacyjne/imgPuszkiInstalacyjne';
import { imgDomoweSlider } from '../../../../../../../../../public/images/c11_domowe/imgDomowe';
const arrOfImages = [
  imgWtyczkiGniazda,
  imgGniazdaZBlokada,
  imgAdapteryPrzemyslowe,
  imgGniazdaPodwieszaneFake,
  imgPrzedluzaczeBebnowe,
  imgRozlacznikBezpieczenstwaSlides,
  imgLadowarkiSlides,
  imgObudowyRozdzielniceSlide,
  imgRozdzielniceModuloweSlider,
  imgPuszkiInstalacyjneSlider,
  imgDomoweSlider,
];

/**----------------------------------------------------**/
const ImageContnent: React.FunctionComponent<{
  categoryIndex: number;
  slidesLineIndex: number;
  slideIndex: number;
}> = ({ categoryIndex, slidesLineIndex, slideIndex }) => {
  /**Basic Data**/
  const categoryImages = arrOfImages[categoryIndex];
  /**JSX**/
  return (
    <div className="relative w-full h-full bg-light p-5 rounded-sm overflow-hidden">
      <AnimatePresence initial={true}>
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
            src={
              /**
               * slidesLineIndex is 0 for "slidesLine" nr.1; here imagesArray is read from the end...
               */
              slidesLineIndex
                ? categoryImages[slideIndex].image
                : categoryImages[categoryImages.length - slideIndex].image
            }
            fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
          />

          <div data-layout="someFakeContainer" className="absolute inset-0 " />
        </motion.div>
        {/* <motion.div
          data-layout="someFakeContainer"
          className="absolute inset-0 bg-dark"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 0.2, duration: 0.4 } }}
          exit={{ opacity: 1, transition: { duration: 0.4 } }}
        /> */}
      </AnimatePresence>
      {/* <motion.div
        data-layout="someFakeContainer"
        className="absolute inset-0 bg-dark"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transition: { delay: 0.2, duration: 0.2 } }}
        exit={{ opacity: 1 }}
      /> */}
    </div>
  );
};

export default ImageContnent;
