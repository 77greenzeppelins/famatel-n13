import React from 'react';
/**Components**/
import FooterLink from '../__link/FooterLink';
/**Basic Data*/
import { regulacjeUrl } from '../../../../../data/_data';

/**----------------------**/
const Regulacje = () => {
  const labelsArray = Object.values(regulacjeUrl);
  /**JSX**/
  return (
    <div className="w-full sm:w-[80%]">
      <ul className="flex flex-col gap-y-4">
        {labelsArray.map(({ url, label }, i) => (
          <FooterLink key={label} url={url} label={label} />
        ))}
      </ul>
    </div>
  );
};

export default Regulacje;

/*
.map(item => {
    item.label, item.url;
  });

*/
