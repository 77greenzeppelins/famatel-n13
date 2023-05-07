import React from 'react';
/**Components**/
import CatalogButton from '../dropDownCatalog/catalogButton/CatalogButton';
import CatalogOverlay from '../dropDownCatalog/catalogOverlay/CatalogOverlay';
import ProductBrowserButton from '../productBrowser/productBrowserButton/ProductBrowserButton';
import ProductBrowserOverlay from '../productBrowser/productBrowserOverlay/ProductBrowserOverlay';
import MainPagesNav from '../navSection/MainPagesNav';
/**Hooks staff*/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
/**HardCoded Staff*/
const layoutTreshold_1 = 300;
const layoutTreshold_2 = 1024;

/**--------------------------**/
const EventsPanel = () => {
  /**Hook Section; data for calculations**/
  const { width } = useWindowSize({
    screensNumber: 1,
  });

  /**JSX**/
  return (
    <div className="flex items-center">
      {width >= layoutTreshold_1 ? (
        <div className="relative flex items-center justify-end h-6 w-16">
          {' '}
          <ProductBrowserButton />
          <ProductBrowserOverlay />
        </div>
      ) : null}
      {width >= layoutTreshold_1 ? (
        <div className="relative flex items-center justify-end h-6 w-16">
          {' '}
          <CatalogButton />
          <CatalogOverlay />
        </div>
      ) : null}
      {width >= layoutTreshold_2 ? (
        <div className="pl-4">
          <MainPagesNav />
        </div>
      ) : (
        <div className="fc h-6 w-16"></div>
      )}
    </div>
  );
};

export default EventsPanel;
