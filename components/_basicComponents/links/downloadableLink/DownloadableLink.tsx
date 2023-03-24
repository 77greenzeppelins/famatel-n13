import React from 'react';

/**-------------------------------**/
const DownloadableLink: React.FC<{
  staffToDownload: string;
  linkLabel: string;
  textStyle?: string;
}> = ({ staffToDownload, linkLabel, textStyle }) => {
  /**JSX**/
  return (
    // <div>
    <a
      className={textStyle}
      href={staffToDownload}
      target="_blank"
      rel="noopener noreferrer"
      //___
      download
      //___
      // alt="alt text"
      // locale={false}
    >
      {linkLabel}
    </a>
    // </div>
  );
};

export default DownloadableLink;
