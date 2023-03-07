import React, { useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';

const LocomotiveContainer = () => {
  /*
    create a new instance of "Locomotive Scroll"
    */
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //___specify the el property as the scrolling container, which we select using a data attribute...
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true,
  //     inertia: 0.75,
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <div
    //   data-scroll-container
    >
      LocomotiveContainer
    </div>
  );
};

export default LocomotiveContainer;
