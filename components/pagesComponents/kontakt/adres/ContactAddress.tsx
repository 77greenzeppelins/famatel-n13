import React from 'react';
/**Components**/
import SectionContentLayout from '../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';

/**----------------------------------**/
const ContactAddress = () => {
  /**JSX**/
  return (
    <SectionContentLayout>
      <div className="w-full border-b border-grey">
        {' '}
        <p className="text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025">
          Adres
        </p>{' '}
      </div>
    </SectionContentLayout>
  );
};

export default ContactAddress;
