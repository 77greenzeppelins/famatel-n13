import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

const FakeOverlay = () => {
  const { pathname } = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  /*
  .......
  */
  useEffect(() => {
    setIsMounted(true);
    timerRef.current = setTimeout(() => {
      window.scrollTo(0, 0);
      setIsMounted(false);
      console.log('setTimeout....');
    }, 400);
    return () => {
      clearTimeout(timerRef.current as NodeJS.Timeout);
      //   setIsMounted(true);
    };
  }, [pathname]);

  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  // useEffect(() => {
  //   scrollToTop();
  // }, [router.pathname]);

  //   console.log('isMounted', isMounted);

  return isMounted ? (
    <div
      data-component="FakeOverlay"
      className="fixed w-full h-full bg-dark z-[499]"
    >
      FakeOverlay
    </div>
  ) : null;
};

export default FakeOverlay;
