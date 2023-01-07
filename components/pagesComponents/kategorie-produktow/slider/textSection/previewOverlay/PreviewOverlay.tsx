import React from 'react';
/**Components**/
import AriaJSLink from '../../../../../_basicComponents/links/ariaJSLink/AriaJSLink';
import LinkWithArrowIcon from '../../../../../SVG/icons/LinkWithArrowIcon';
/**Hook Staff**/
import useWindowSize from '../../../../../../utils/hooks/useWindowSize';
/**Framer Motion**/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data**/
import { catalogStructureData } from '../../../../../../data/_catalogStructure_data';
import { corpoColors } from '../../../../../../data/_data';

// text-[0.625rem] xxl:text-[0.75rem] xxxl:text-[0.825rem] tracking-[1px] lg:tracking-[0.125rem] uppercase word-spacing-0125 lg:word-spacing-025
/**-------------------------------------------------------**/
const PreviewOverlay: React.FunctionComponent<{
  isPreviewAvailable: boolean;
  isPreviewOpen: boolean;
  currentCategory: number;
}> = ({ isPreviewAvailable, isPreviewOpen, currentCategory }) => {
  /**Hook Section / just tell me what device's orientation is... **/
  const { isLandscape, width } = useWindowSize({ screensNumber: 1 });

  const createLinks = () => {
    const { name, subcategories, url } = catalogStructureData[currentCategory];
    return subcategories.map((label, i) => (
      <div
        key={i}
        // className="h-[36px] max-w-[550px]"
        className="h-[100px] w-[100px] border"
      >
        <AriaJSLink
          linkHref={url[i]}
          controlsSet={{ background: corpoColors.greyTint1 }}
          controlsStart={{
            background: corpoColors.dark, //background color
            transition: { duration: 0.4 },
          }}
          ariaLabel="Link do strony kategorii"
          aStyle="flex items-center justify-between gap-4 h-full border border-greyTint1 hover:border-corpo rounded-sm bg-transparent focus:outline-none group"
        >
          <p
            className={`header-link-label text-greyTint1 group-hover:text-corpo ease-in duration-300 px-2`}
          >
            {label}
          </p>
          {/* <LinkWithArrowIcon
            containerStyle="fc h-full aspect-square stroke-greyTint1 group-hover:stroke-corpo group-hover:translate-x-1 ease-in duration-300 scale-[0.75] origin-center"
            // pathStyle="scale-[0.75] origin-center "
          /> */}
        </AriaJSLink>
      </div>
    ));
  };

  //   console.log(
  //     'catalogStructureData[currentCategory]',
  //     catalogStructureData[currentCategory]
  //   );

  /**JSX**/
  return (
    <AnimatePresence initial={false}>
      {isPreviewOpen && (
        <motion.div
          className={`relative w-full h-full  inner-pr-md-lg z-[10] ${
            isLandscape ? 'py-4' : 'py-0'
          }`}
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
        >
          <div className="flex flex-wrap gap-4 justify-center w-full h-full ">
            {createLinks()}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreviewOverlay;

/**Manipulations**/
//   const categoriesArray = Object.values(catalogStructureData);
//   const categoriesArray2 = Object.entries(catalogStructureData);

//   console.log('categoriesArray', categoriesArray);
//   console.log('categoriesArray2', categoriesArray2[currentCategory]);
//   console.log(
//     'categoriesArray2',
//     catalogStructureData[currentCategory].subcategories
//   );
