/**used in: <PageTransitionContainer>*/
const routingAnimation = {
  in: {
    opacity: 1,
    // scale: 1,
    // x: 0,
    transition: {
      //   delay: 1,
      duration: 0.4,
    },
  },
  out: {
    opacity: 0,
    // scale: 0.995,
    // x: 20,
    transition: {
      duration: 0.4,
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
    transition: { type: 'tween', duration: 0.6 },
  },
  to: { opacity: 0, transition: { type: 'tween', duration: 0.6 } },
};

export { routingAnimation, overlayContainerVariants, homePageSliderVariants };
