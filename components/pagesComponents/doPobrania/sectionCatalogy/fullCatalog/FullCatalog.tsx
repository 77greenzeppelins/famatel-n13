import React from 'react';
/**Components**/
import FadingFrame from '../../../../multipagesComponents/lines/fadingFrame/FadingFrame';
import DownloadableLink from '../../../../_basicComponents/links/downloadableLink/DownloadableLink';
/**Hardcoded Staff**/
const catalogLink = '/pdf/catalog/Katalog 2023.pdf';

/**-------------------------------------------------------------------------------**/
const FullCatalog: React.FC<{ mdTextStyle?: string; lgTextStyle?: string }> = ({
  mdTextStyle,
  lgTextStyle,
}) => {
  /**JSX**/
  return (
    <div className="relative fc flex-col container aspect-video">
      <div
        className={`relative fc flex-col gap-10 w-full h-full max-w-[600px] max-h-[600px]`}
      >
        <FadingFrame />

        <div className="fc flex-col ">
          <p className={lgTextStyle}>Katalog</p>
          <p className={mdTextStyle}>2023</p>
        </div>
        <div className="flex items-center justify-between min-w-[92px] gap-3 group bg-vB">
          <DownloadableLink
            staffToDownload={catalogLink}
            linkLabel={'PEŁNA WERSJA (53 MB)'}
            textStyle={
              'header-link-label text-grey group-hover:text-light ease-in duration-300 disable whitespace-normal'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FullCatalog;
