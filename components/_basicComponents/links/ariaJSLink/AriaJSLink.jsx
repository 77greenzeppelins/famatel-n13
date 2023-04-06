import React, { useRef } from 'react';
import Link from 'next/link';
/**ReactAria Staff*/
import { FocusRing, useLink } from 'react-aria';
/**FramerMotion Staff*/
import { motion, useAnimation } from 'framer-motion';
/**BasicData*/

const aDefaultStyle =
  'fc gap-4 h-full border border-greyTint1 hover:border-corpo rounded-sm bg-transparent  group';
/**********************************************************************************************/
const AriaJsLink = ({ children, linkHref, ...props }) => {
  /**Referencea*/
  const ref = useRef();
  /**FramerMotion Section*/
  const controls = useAnimation();

  /**React-aria + FramerMotion Section*/
  const { linkProps } = useLink(
    {
      onPressStart: () => {
        controls.stop();
        controls.set({ ...props.controlsSet }); //light
      },
      onPressEnd: () => {
        controls.start({ ...props.controlsStart });
      },
    },
    ref
  );

  /**JSX*/
  return (
    // <FocusRing
    //   //  focusRingClass="ring ring-offset-2 ring-offset-black"
    //   focusRingClass="focus:ring focus:ring-offset-2 focus:ring-offset-black"
    // >
    <Link
      href={linkHref}
      scroll={false}
      legacyBehavior
      passHref
      // legacyBehavior
      //  passHref
    >
      <motion.a
        aria-label={props.ariaLabel}
        animate={controls}
        {...linkProps}
        className={`${
          props.aStyle ? props.aStyle : aDefaultStyle
        } focus:outline-none pointer-events-auto disable-soft`}
      >
        {children}
      </motion.a>
    </Link>
    // </FocusRing>
  );
};
export default AriaJsLink;

{
  /* <motion.a
  aria-label={props.ariaLabel}
  // title={props.linkTitle ? props.linkTitle : 'link'}
  animate={controls}
  {...linkProps}
  style={{
    WebkitTapHighlightColor: 'transparent',
  }}
  // className={props.aStyle ? props.aStyle : aDefaultStyle}
  // className="h-[100%]"
  className="h-full"
>
  {children}
</motion.a>; */
}

//___ props:  childType = 1, labInitial = 'O', labModified = 'X',

//  {childType ? children : createLabel(isPressed)}

//  childType
//    ? // <motion.div className="h-full fc text-light" animate={controls2}>
//      //   <ListBulletIcon className="h-[70%] aspect-1" />
//      // </motion.div>
//      { children }
//    : // createIcon(iconID)
//      // { children }
//      // createIcon(iconID)
//      createLabel(isPressed);

/**Icon Creator*/
// const createIcon = param => {
//   buttonIconsArr.map(({ id, Component }) => {
//     // console.log('id:', id);
//     // console.log('iconID:', iconID);
//     if (id === param) {
//       console.log('iconID / param === id:', param === id);
//       // return <Component />;
//       return (
//         // <div key={id}>
//         // <ListBulletIcon key={id} className="h-[80%] aspect-1 text-corpo" />
//         // </div>
//         <Component />
//       );
//     }
//   });
// };

/**LabelCreator*/
// const createLabel = param => {
//   return param ? (
//     <motion.p className="text-2xl text-corpo" animate={controls2}>
//       {labModified}
//     </motion.p>
//   ) : (
//     <p className="text-2xl text-light">{labInitial}</p>
//   );
// };
