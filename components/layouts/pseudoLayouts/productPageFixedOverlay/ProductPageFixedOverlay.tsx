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
            className="fixed left-0 right-0 top-[60px] bottom-[60px] bg-blue-500"
          >
            {/* <ScrollableCategoriesCarousel /> */}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ProductPageFixedOverlay;
