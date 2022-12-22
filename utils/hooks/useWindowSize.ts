import { useState } from 'react';
import useEventListener from './useEventListener';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

interface WindowSize {
  width: number;
  height: number;
  isLandscape: boolean | null;
  containerHeight: number;
}

interface IFUseWindowSize {
  screensNumber?: number;
}

function useWindowSize({ screensNumber = 0 }: IFUseWindowSize): WindowSize {
  //___state
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    isLandscape: null,
    containerHeight: 0,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isLandscape: window.innerWidth > window.innerHeight ? true : false,
      containerHeight: window.innerHeight * screensNumber,
      // containerHeight: !!screensNumber && window.innerHeight * screensNumber ,
    });
  };

  useEventListener('resize', handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}

export default useWindowSize;
