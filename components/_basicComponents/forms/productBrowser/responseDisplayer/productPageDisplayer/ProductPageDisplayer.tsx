import React, { useState } from 'react';
/**Components**/
import LinkWithSpanAndIcon from '../../../../links/linkWithSpanAndIcon/LinkWithSpanAndIcon';
/**FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data*/
import { story } from '../../../../../../data/_data';

/**TS**/
interface Props {
  wantedModel: string | null;
}
/**-------------------------------------**/
const ProductPageDisplayer = ({ wantedModel }: Props) => {
  const [isHovered, SetIsHovered] = useState(false);
  /**JSX**/
  return (
    <AnimatePresence mode="wait">
      {wantedModel === null ? (
        <motion.div
          key={wantedModel}
          className="min-h-[20px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-left p-regular text-corpo">
            {story.productBrowser.noResult}
          </p>
        </motion.div>
      ) : (
        <motion.div
          key={wantedModel}
          className="flex gap-2 "
          onHoverStart={e => {
            SetIsHovered(true);
          }}
          onHoverEnd={e => {
            SetIsHovered(false);
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
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
            } ease-in duration-[0.4s] delay-[0.1s] `}
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
