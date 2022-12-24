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
            className="fixed inset-0 fc bg-greyShade2"
          >
            <p className="text-2xl text-light">
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </p>
            {/* <ScrollableCategoriesCarousel /> */}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ProductPageFixedOverlay;
