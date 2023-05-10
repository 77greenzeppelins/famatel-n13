import React, { useState } from 'react';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data*/
import { story } from '../../../../../../data/_data';
import LinkWithSpanAndIcon from '../../../../links/linkWithSpanAndIcon/LinkWithSpanAndIcon';

/**HardCoded Staff*/
// const defaultTextStyle =
//   'text-grey text-left text-[0.75rem] lg:text-[1rem] tracking-[2px] leading-tight group-hover:text-light';
// const defaultLayoutStyle = 'flex items-center w-fit max-w-[750px] disable-soft';

/**TS**/
interface Props {
  wantedModel: string | null;

  // visibilityCondition: string | boolean | undefined;
  // submitCount: number;
}
/**-------------------------------------**/
const ProductPageDisplayer = ({
  // visibilityCondition,
  // submitCount,
  wantedModel,
}: Props) => {
  const [isHovered, SetIsHovered] = useState(false);
  /**JSX**/
  return (
    <AnimatePresence mode="wait">
      {wantedModel === null ? (
        <motion.div
          key={wantedModel}
          className="min-h-[20px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-left p-regular text-corpo">
            {story.productBrowser.noResult}
          </p>
        </motion.div>
      ) : (
        <motion.div
          key={wantedModel}
          className="flex  gap-2 "
          onHoverStart={e => {
            SetIsHovered(true);
          }}
          onHoverEnd={e => {
            SetIsHovered(false);
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <LinkWithSpanAndIcon
            uniqueKeyToAnimate={''} //___empty means no animation in <span>
            linkHref={wantedModel}
            linkLabel={story.productBrowser.isProduct}
            ariaLabel={`Link do strony z wyszukiwanym produktem`}
            linkStyle="fc gap-4"
            spanStyle={`p-regular ${
              isHovered ? 'text-light' : 'text-grey'
            } ease-in duration-[0.4s] delay-[0.1s] `} //___group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]
            // iconStyle="fc h-4 w-4 aspect-square stroke-grey hover:stroke-light hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0"
            iconStyle={`fc h-4 w-4 aspect-square  ${
              isHovered ? 'stroke-light ' : 'stroke-grey '
            }    ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductPageDisplayer;

//  iconStyle={`fc h-4 w-4 aspect-square  ${
//               isHovered
//                 ? 'stroke-light translate-x-1'
//                 : 'stroke-grey translate-x-0'
//             }    ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0`}

{
  /* {wantedModel === '' ||
      wantedModel === null ||
      visibilityCondition ? null : wantedModel === null ||
        visibilityCondition ? (
        <motion.div className="min-h-[20px] bg-greyShade2">
          <p>{story.productBrowser.noProduct}</p>
        </motion.div>
      ) : (
        <motion.div
          className=" bg-greyShade2"
          onHoverStart={e => {
            console.log('onHoverStart');
            SetIsHovered(true);
          }}
          onHoverEnd={e => {
            console.log('onHoverEnd');
            SetIsHovered(false);
          }}
        >
          <LinkWithSpanAndIcon
            uniqueKeyToAnimate={''} //___empty means no animation in <span>
            linkHref={wantedModel}
            linkLabel={story.productBrowser.isProduct}
            ariaLabel={`Link do strony: Kategorie Produktów`}
            linkStyle="fc gap-4  px-4 py-1 xl:py-4 rounded-sm "
            spanStyle={`p-regular ${
              isHovered ? 'text-light' : 'text-grey'
            } ease-in duration-[0.4s] delay-[0.1s] `} //___group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]
            // iconStyle="fc h-4 w-4 aspect-square stroke-grey hover:stroke-light hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0"
            iconStyle={`fc h-4 w-4 aspect-square  ${
              isHovered ? 'stroke-light ' : 'stroke-grey '
            }    ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0`}
          />
        </motion.div>
      )} */
}
