/**used in: <PageTransitionContainer>*/
const routingAnimation = {
  in: {
    opacity: 1,
    // scale: 1,
    // x: 0,
    transition: {
      //   delay: 1,
      duration: 0.2,
    },
  },
  out: {
    opacity: 0,
    // scale: 0.995,
    // x: 20,
    transition: {
      duration: 0.2,
      // delay: 1,
    },
  },
};
/*
used in : <MenuOfLinkProdukty>
idea: fast animation for any kind of overlay;  
common application: allowes to cover the whole screen by container, then other animation of "content" may happens => should content have "delay: 0.3" ??? 
*/
const overlayContainerVariants = {
  initial: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.2,
      delay: 0.1,
      ease: 'easeIn',
    },
  },
  animate: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.2,
      ease: 'easeOut',
      delay: 0.1,
    },
  },
};

const homePageSliderVariants = {
  from: { opacity: 0 },
  presence: {
    opacity: 1,
    transition: { type: 'tween', duration: 0.2 },
  },
  to: { opacity: 0, transition: { type: 'tween', duration: 0.2 } },
};

/**
 * used in <AriaMotionButton> /  ...
 * propsed in: <AnimatedButton> / ...
 */
const animatedButton = {
  whileHover: {
    // scale: 1.1,
    rotate: 90,
  },
  whileTap: {
    // scale: 0.95,
  },
  transition: {
    // type: 'spring',
    // damping: 5,
    // stiffness: 100,
    // restDelta: 0.001,
    duration: 5,
  },
};
const animatedSniper = {
  whileHover: {
    opacity: 1,
  },
  transition: {
    type: 'tween',
    duration: 0.6,
  },
};

/**
 * used in: <FullScreenOverlay>
 *
 */
const overlayVariants = {
  from: { y: '100%' },
  to: {
    y: 0,
    transition: {
      delay: 0.0,
      duration: 0.6,
      // ease: 'easeOut',
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
  exit: {
    y: '100%',
    transition: {
      delay: 0.9,
      duration: 0.4,
      ease: 'easeIn',
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};
const overlayClosebuttonVariants = {
  from: { opacity: 0, y: '100%' },
  to: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: '100%',
    transition: { duration: 0.6, ease: 'easeIn' },
  },
};

/**
 * used in: <CategoriesCounter>; various <textComponents> that change frequently...
 *
 */
const opacityScaleYVariants = {
  from: { opacity: 0, scaleY: 0 },
  to: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

// const headerVariants = {
//   from: { opacity: 0, x: '-100%' },
//   to: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.8,
//       ease: 'easeOut',
//     },
//   },
//   exit: {
//     opacity: 0,
//     x: '-100%',
//     transition: { duration: 0.7, ease: 'easeIn' },
//   },
// };

/**
 * created to be used in all sorts of <TextSectionComponents>
 */

const textSectionContainerVariants = {
  from: {
    //___why empty? I need "from" name to orchestrate "parent-children "animations
  },
  to: {
    transition: {
      // delay: 0.0,
      // duration: 0.6,
      // ease: 'easeOut',
      delayChildren: 0.4,
      staggerChildren: 0.6,
    },
  },
  exit: {
    transition: {
      //___no need for this settings as no time to observe them === page is changing...
      // delay: 0.9,
      // duration: 0.4,
      // ease: 'easeIn',
      // delayChildren: 0.2,
      // staggerChildren: 0.2,
    },
  },
};

const textSectionChildrenVariants = {
  from: { opacity: 0, x: '-102%' },
  to: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    // x: '-100%',
    transition: {
      //  duration: 0.7,
      duration: 0.4,
      ease: 'easeIn',
    },
  },
};

/**
 * used in cards to animate image's "white-containers": <BasicCardGraphicSection> & <ProductCardImageSection>
 */
const cardVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, delay: 0.4 },
  },
};

export {
  routingAnimation,
  overlayContainerVariants,
  homePageSliderVariants,
  animatedButton,
  animatedSniper,
  overlayVariants,
  overlayClosebuttonVariants,
  opacityScaleYVariants,
  //___
  textSectionContainerVariants,
  textSectionChildrenVariants,
  //____
  cardVariants,
};
