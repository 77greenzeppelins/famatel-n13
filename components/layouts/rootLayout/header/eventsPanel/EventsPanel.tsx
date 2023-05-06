import React from 'react';
/**Hooks staff*/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
import CatalogButton from '../dropDownCatalog/catalogButton/CatalogButton';
import ProductBrowserButton from '../productBrowser/productBrowserButton/ProductBrowserButton';
/**HardCoded Staff*/
const layoutTreshold_1 = 300;
const layoutTreshold_2 = 1024;

/**--------------------------**/
const EventsPanel = () => {
  /**Hook Section; data for calculations**/
  const { width } = useWindowSize({
    screensNumber: 1,
  });

  return (
    <div className="flex">
      {width >= layoutTreshold_1 ? (
        <div className="fc h-6 w-10">
          {' '}
          <ProductBrowserButton />
        </div>
      ) : null}
      {width >= layoutTreshold_1 ? (
        <div className="fc h-6 w-10">
          {' '}
          <CatalogButton />
        </div>
      ) : null}
      {width >= layoutTreshold_2 ? (
        <div className="fc w-[150px] h-full bg-corpo">FM</div>
      ) : (
        <div className="fc w-[50px] h-full bg-vY">H</div>
      )}
    </div>
  );
};

export default EventsPanel;
