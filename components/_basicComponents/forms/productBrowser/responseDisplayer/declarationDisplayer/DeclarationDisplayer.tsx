import React, { useState } from 'react';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data*/
import { story } from '../../../../../../data/_data';
import LinkWithSpanAndIcon from '../../../../links/linkWithSpanAndIcon/LinkWithSpanAndIcon';
import ArrowDownloadIcon from '../../../../../SVG/icons/ArrowDownloadIcon';

/**HardCoded Staff*/
// const defaultTextStyle =
//   'text-grey text-left text-[0.75rem] lg:text-[1rem] tracking-[2px] leading-tight group-hover:text-light';
// const defaultLayoutStyle = 'flex items-center w-fit max-w-[750px] disable-soft';

/**TS**/
interface Props {
  wantedModelDeclaration: string | null;

  // visibilityCondition: string | boolean | undefined;
  // submitCount: number;
}
/**-------------------------------------**/
const DeclarationDisplayer = ({ wantedModelDeclaration }: Props) => {
  const [isHovered, SetIsHovered] = useState(false);

  // console.log('ProductPageDisplayer / wantedModel:', wantedModel);
  /**JSX**/
  return (
    <AnimatePresence mode="wait">
      {wantedModelDeclaration && (
        <motion.div
          key={wantedModelDeclaration}
          // className=" bg-vB"
          onHoverStart={e => {
            // console.log('onHoverStart');
            SetIsHovered(true);
          }}
          onHoverEnd={e => {
            // console.log('onHoverEnd');
            SetIsHovered(false);
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            // className="flex items-center justify-between min-w-[92px] gap-3"s
            href={wantedModelDeclaration}
            target="_blank"
            rel="noopener noreferrer"
            //___
            download
          >
            <span
              className={`flex items-center gap-x-4 p-regular ${
                isHovered ? 'text-light' : 'text-grey'
              } ease-in duration-[0.4s] delay-[0.1s] group`}
            >
              {story.productBrowser.hasDeclaration}

              <ArrowDownloadIcon
                className={
                  'w-4 h-4 sm:w-6 sm:h-6 stroke-grey group-hover:stroke-light ease-in duration-300 delay-100'
                  //___animate-bounce animate-ping group-hover:translate-y-1 group-hover:translate-x-1 group-hover:scale-[1.1]
                  //___group-hover:translate-y-1 ease-in duration-300 delay-300
                }
              />
            </span>
            {/* <p className={textStyle}> {linkLabel}</p> */}
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeclarationDisplayer;
