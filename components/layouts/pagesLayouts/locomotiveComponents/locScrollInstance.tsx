import LocomotiveScroll from 'locomotive-scroll';

const locScrollInstance = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]') as HTMLElement,
    smooth: true,
    // Add any other options you need
  });
};

export default locScrollInstance;

// import React, { ReactNode, useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';

// const LocomotiveContainer: React.FunctionComponent<{ children: ReactNode }> = ({
//   children,
// }) => {
//   /*
//   create a new instance of "Locomotive Scroll"
//   */
//   useEffect(() => {
//     //___required by TS
//     const el = document.querySelector('[data-scroll-container]') as HTMLElement;
//     //__create instance of LocomotiveScroll
//     const scroll = new LocomotiveScroll({
//       // ___specify the el property as the scrolling container, which we select using a data attribute...
//       el,
//       smooth: true,
//       multiplier: 0.5,
//       smartphone: {
//         smooth: true,
//       },
//       // smoothMobile: false,
//       // resetNativeScroll: true,
//       // inertia: 0.75,
//     });

//     return () => {
//       if (scroll) scroll.destroy();
//     };
//   }, []);

//   return <>{children}</>;
// };

// export default LocomotiveContainer;

/*
useEffect(() => {  
let scroll;
import("locomotive-scroll").then((locomotiveModule) => {
scroll = new locomotiveModule.default({
el: scrollRef.current,
smooth: true,
smoothMobile: false,
// resetNativeScroll: true
        });
scroll.init()
    });
  }, []);


*/
