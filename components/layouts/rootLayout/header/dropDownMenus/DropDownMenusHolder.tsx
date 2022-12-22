import React from 'react';
import { useRouter } from 'next/router';
/*FramerMotion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
// import { overlayContainerVariants } from '../../../../../utils/framerMotion';
/*Basic Data*/
// import { dropDownMenusArray } from './_dropDownMenusHolder_data';
import { mainPages } from '../../../../../data/_data';

/*******************************************************************************/
const DropDownMenusHolder = ({
  condition,
  label,
}: {
  condition: boolean;
  label: string;
}) => {
  /**...*/
  const router = useRouter();
  /**...*/
  console.log('condition', condition);
  /*
  JSX
  */
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {condition && (
          /*
          linkState.condition
          this condition can be moved to "if (linkState.label === id)"...
          */
          <motion.div
            id="DropDownMenusHolder__container"
            key={label}
            className="fc bg-light w-5 h-[50px]"
            // variants={overlayContainerVariants}
            // animate="animate"
            // initial="initial"
            // exit="initial"
          ></motion.div>
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
