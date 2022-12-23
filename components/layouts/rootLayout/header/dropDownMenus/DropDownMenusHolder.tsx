import React from 'react';
import { useRouter } from 'next/router';
/**FramerMotion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
import { overlayContainerVariants } from '../../../../../utils/framerMotion/framerMotionUtils';
/**Basic Data**/
import { dropDownMenusArray } from './_dropDownMenusHolder_data';
import { mainPages } from '../../../../../data/_data';

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
  const router = useRouter();
  /**AdditionalCondition
   * why: to prevent displaying <ProduktyDropDownMenu> when user is on ".../kategorie-produktow" path
   */
  const specialCondition = router.pathname !== mainPages[1].url;

  /**JSX**/
  return (
    <>
      <AnimatePresence
      //  exitBeforeEnter
      >
        {isHovered && hasDropDownMenu && (
          /*
          linkState.condition
          this condition can be moved to "if (linkState.label === id)"...
          */
          <motion.div
            id="DropDownMenusHolder__container"
            key={label}
            className="fc bg-dark"
            variants={overlayContainerVariants}
            animate="animate"
            initial="initial"
            exit="initial"
          >
            {dropDownMenusArray.map(({ id, Component }) => {
              if (label === id) {
                return (
                  <React.Fragment key={id}>
                    {specialCondition && (
                      <div className="w-screen h-screen fc">
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
