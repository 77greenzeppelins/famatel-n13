import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
/**Components**/
// import LinkWithSpanAndIcon from '../../../_basicComponents/links/linkWithSpanAndIcon/LinkWithSpanAndIcon';
/*GlobalState Staff*/
import { useSnapshot } from 'valtio';
import { globalState } from '../../../../globalState/globalState';
/**BasicData */
import { story } from '../../../../data/_data';

/**-----------------------------**/
const CookiesPopUp: React.FC = () => {
  /**GlobalState Section**/
  const snap = useSnapshot(globalState);
  /**...WTF...**/
  const onClickHandler = () => {
    globalState.hasAcceptedCookies = true;
    localStorage.setItem('hasAcceptedCookies', 'true');
    console.log('onClick / snap.isCookiAccepted:', snap.hasAcceptedCookies);
  };
  useEffect(() => {
    console.log('snap.isCookiAccepted:', snap.hasAcceptedCookies);
  }, [snap.hasAcceptedCookies]);
  /**JSX**/
  return (
    <AnimatePresence>
      {!snap.hasAcceptedCookies && (
        <motion.aside
          data-component="Header__container"
          className={`fixed w-screen bottom-0 left-0 right-0 fc min-h-[100px] z-[999] backdrop-blur-xl pb-[20px]`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 4 } }}
          exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.4 } }}
        >
          <div className="fc gap-4 inner-px-md-xl-xxl">
            <p className="p-small text-light font-bold">
              {story.cookies.popup}
              {/* &nbsp; */}
              {/* <LinkWithSpanAndIcon
                linkHref="/"
                uniqueKeyToAnimate={''}
                linkLabel={story.cookies.link}
                ariaLabel={'Link do strony: Cookies'}
                linkStyle=" flex gap-1 w-full h-full"
                iconStyle=" h-4 w-4 aspect-square stroke-light origin-center flex-shrink-0"
              /> */}
            </p>
            <button
              className="px-4 py-1 bg-corpo"
              // onClick={() => (globalState.isCookiAccepted = !snap.isCookiAccepted)}
              onClick={onClickHandler}
            >
              {' '}
              <p className="p-small text-light font-bold">Akceptuję</p>{' '}
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default CookiesPopUp;

// <header
//       data-component="Header__container"
//       className={`fixed w-screen top-0 left-0 right-0 h-[50px] z-[500] bg-dark`}
//     >
