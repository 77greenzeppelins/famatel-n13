import React from 'react';
import { useRouter } from 'next/router';
/**BasicData*/
import { pagesUrl } from '../../../../data/_data';

const ProductPageFixedOverlay = () => {
  /**Router Section*/
  const router = useRouter();
  /**JSX**/
  return (
    <React.Fragment>
      {router.pathname === pagesUrl.produkty && (
        <React.Fragment>
          <div
            data-component="ProductPageFixedOverlay"
            className="fixed top-0 bottom-0 w-screen bg-greyShade2"
          >
            <div className="fc flex-col w-full h-full ">
              <div className="fc w-full h-[50%]">
                <p className="fc w-[40%] h-full text-2xl text-light">
                  Test test test
                </p>
                <div className="w-[40%] h-full bg-yellow-800"></div>
              </div>
              <div className="flex items-center justify-between w-full h-[50%]">
                <div className="w-[40%] h-full bg-yellow-800"></div>
                <p className="fc w-[40%] h-full text-2xl text-light">
                  Test test test
                </p>
              </div>
            </div>

            {/* <ScrollableCategoriesCarousel /> */}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ProductPageFixedOverlay;
