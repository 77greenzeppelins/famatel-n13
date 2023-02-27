import React from 'react';
import { useRouter } from 'next/router';
/**FramerMotion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
import { overlayContainerVariants } from '../../../../../utils/framerMotion/framerMotionUtils';
/**Basic Data**/
import { dropDownMenusArray } from './_dropDownMenusHolder_data';
import { pagesUrl } from '../../../../../data/_data';

/*******************************************************************************/
const DropDownMenusHolder = ({
  isHovered,
  label,
  hasDropDownMenu,
}: {
  isHovered: boolean;
  label: string;
  hasDropDownMenu: boolean;
}) => {
  /**Router Section**/
  const { pathname } = useRouter();
  /**AdditionalCondition
   * why: to prevent displaying <ProduktyDropDownMenu> when user is on ".../kategorie-produktow" path
   */
  // const specialCondition = pathname !== mainPages[1].url;
  const specialCondition = true;

  const styleCondition = pathname === pagesUrl.kontakt;

  /**...WTF...**/
  // console.log('isHovered', isHovered);
  // console.log('hasDropDownMenu', hasDropDownMenu);

  /**JSX**/
  return (
    <>
      <AnimatePresence mode="wait">
        {isHovered && hasDropDownMenu && (
          /*
          linkState.condition
          this condition can be moved to "if (linkState.label === id)"...
          */
          <motion.div
            id="DropDownMenusHolder__container"
            key={label}
            className={`fc w-screen h-screen ${
              styleCondition ? 'bg-light' : 'bg-dark'
            } `}
            variants={overlayContainerVariants}
            animate="animate"
            initial="initial"
            exit="initial"
          >
            {dropDownMenusArray.map(({ id, Component }) => {
              // console.log('isHovered', isHovered);
              // console.log('hasDropDownMenu', hasDropDownMenu);
              // console.log(`label: ${label} ;  id: ${id}`);
              if (label === id) {
                // console.log('label id', `${label} ;  ${id}`);
                return (
                  <React.Fragment key={id}>
                    {specialCondition && (
                      <div
                        className={`w-[98%] h-[80%] xl:h-[90%] fc ${
                          styleCondition ? 'bg-light' : 'bg-dark'
                        } `}
                      >
                        <Component />
                      </div>
                    )}
                  </React.Fragment>
                );
              }
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DropDownMenusHolder;

// {
//   dropDownMenusArray.map(({ id, Component }) => {
//     if (label === id) {
//       return (
//         <React.Fragment key={id}>
//           {
//             /*
//                       (!) additional condition => to prevent displaying <ProduktyDropDownMenu> when user is on ".../kategorie-produktow" path
//                       */
//             router.pathname !== mainPages[1].url && (
//               <div className="w-screen h-screen fc">
//                 <Component />
//               </div>
//             )
//           }
//         </React.Fragment>
//       );
//     }
//   });
// }
