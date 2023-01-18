import React from 'react';
import SVG_3014_P310 from '../../../../SVG/techDrawings/10_puszki/SVG_3014_P310';
/**Components**/
import SVG_14307_P28 from '../../../../SVG/techDrawings/1_wtyczki-gniazda/SVG_14307_P28';
import SVG_26008_P100 from '../../../../SVG/techDrawings/2_gniazda-z-blokada/SVG_26008_P100';
import SVG_31071_P126 from '../../../../SVG/techDrawings/3_adaptery-przemyslowe/SVG_31071_P126';
import SVG_28000_P134 from '../../../../SVG/techDrawings/4_gniazda-podwieszane/SVG_28000_P134';
import SVG_30017_P138 from '../../../../SVG/techDrawings/5_przedluzacze-bebnowe/SVG_30017_P138';
import SVG_25501_P145 from '../../../../SVG/techDrawings/6_wylacznik-bezpieczenstwa/SVG_25501_P145';
import SVG_3928_P166 from '../../../../SVG/techDrawings/8_obudowy-rozdzielnice/SVG_3928_P166';
import SVG_39054_P220 from '../../../../SVG/techDrawings/9_rozdzielnice-modulowe/SVG_39054_P220';
/*Hook Staff*/
const svgArray = [
  { ci: 0, Component: SVG_14307_P28 },
  { ci: 1, Component: SVG_26008_P100 },
  { ci: 2, Component: SVG_31071_P126 },
  { ci: 3, Component: SVG_28000_P134 },
  { ci: 4, Component: SVG_30017_P138 },
  { ci: 5, Component: SVG_25501_P145 },
  { ci: 7, Component: SVG_3928_P166 },
  { ci: 8, Component: SVG_39054_P220 },
  { ci: 9, Component: SVG_3014_P310 },
];
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
const variants = {
  from: { opacity: 0, scale: 0.95 },
  to: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: {
    opacity: 0.5,
    // scale: 0.95,
    transition: { duration: 0.6, ease: 'easeIn' },
  },
};

/**------------------------------------------**/
const OverlayGraphicSection: React.FunctionComponent<{
  categoryIndex: number;
}> = ({ categoryIndex }) => {
  /**JSX**/
  return (
    <div
      data-component="OverlayGraphicSection__container"
      //   ref={ref}
      className="w-full max-w-[1000px] h-full"
    >
      <AnimatePresence initial={true} mode="wait">
        {svgArray.map(({ ci, Component }, index) => {
          if (ci === categoryIndex) {
            return (
              <motion.div
                className="fc w-full h-full"
                key={categoryIndex}
                variants={variants}
                initial="from"
                animate="to"
                exit="exit"
              >
                <Component />
              </motion.div>
            );
          }
        })}
      </AnimatePresence>
    </div>
  );
};

export default OverlayGraphicSection;