import React, { useEffect } from 'react';

const ScrollToTopWrapper = ({ children }: { children: React.ReactNode }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  /**JSX**/
  return <>{children}</>;
};

export default ScrollToTopWrapper;
