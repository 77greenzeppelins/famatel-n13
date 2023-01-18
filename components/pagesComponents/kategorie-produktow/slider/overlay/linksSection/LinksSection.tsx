import React from 'react';
/**Components**/
import LinkToSubCategory from './link/LinkToSubCategory';
/**Hook Staff**/
import useWindowSize from '../../../../../../utils/hooks/useWindowSize';
/**Framer Motion**/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data**/
import { catalogStructureData } from '../../../../../../data/_catalogStructure_data';

/**-------------------------------------------------------**/
const LinksSection: React.FunctionComponent<{
  isPreviewOpen?: boolean;
  currentCategory: number;
}> = ({ isPreviewOpen, currentCategory }) => {
  const { isLandscape } = useWindowSize({ screensNumber: 1 });
  const { subCategoriesNames, subCategoriesUrls } =
    catalogStructureData[currentCategory];

  /**JSX**/
  return (
    <div
      className={`relative w-full h-full  ${isLandscape ? 'py-4' : 'py-0'} `}
    >
      <AnimatePresence mode="wait">
        <motion.ul
          key={currentCategory}
          className="relative flex flex-col h-auto max-w-[550px] gap-3 "
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4 } }}
          // exit={{
          //   opacity: 0,
          //   transition: { duration: 0.4 },
          // }}
        >
          {subCategoriesNames.map((label, i) => (
            <LinkToSubCategory
              key={currentCategory + i}
              label={label}
              index={i}
              url={subCategoriesUrls[i]}
            />
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
};

export default LinksSection;

// const createLinks = () => {
//   const { subcategories, url } = catalogStructureData[currentCategory];
//   return subcategories.map((label, i) => (
//     <div
//       key={i}
//       className="h-auto max-w-[550px]"
//       // className="h-[100px] w-[100px] border"
//     >
//       <AriaJSLink
//         linkHref={url[i]}
//         controlsSet={{ background: corpoColors.greyTint1 }}
//         controlsStart={{
//           background: corpoColors.dark, //background color
//           transition: { duration: 0.4 },
//         }}
//         ariaLabel="Link do strony kategorii"
//         aStyle="flex items-center gap-4 h-full  focus:outline-none group"
//         //___ ease-in duration-300 hover:border-corpo rounded-sm bg-transparent
//       >
//         <div className="w-[30px]">
//           <p
//             className={`header-link-label text-greyTint1 group-hover:text-corpo ease-in duration-300`}
//           >
//             {`0${i + 1}.`}
//           </p>
//         </div>
//         <p
//           className={`p-small text-greyTint1  group-hover:text-corpo  ease-in duration-300`}
//           //___border-t border-greyShade2 hover:border-corpo
//         >
//           {label}
//         </p>
//       </AriaJSLink>
//     </div>
//   ));
// };
