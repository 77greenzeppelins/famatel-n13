import React from 'react';
import PageContentLayout from '../../layouts/pagesLayouts/multipagesLayouts/PageContentLayout';
import ContactAddress from './adres/ContactAddress';
import ContactIntro from './intro/ContactIntro';
import ContactContacts from './kontakty/ContactContacts';

/**----------------------------------**/
const KontaktContent = () => {
  /**JSX**/
  return (
    <div
      data-component="KontaktContent__container"
      className="relative w-screen min-h-screen bg-light pt-[60px]"
    >
      <div className="w-full h-full inner-px-md-lg">
        <PageContentLayout>
          {' '}
          <ContactIntro />
          <ContactContacts />
          <ContactAddress />
        </PageContentLayout>
      </div>
    </div>
  );
};

export default KontaktContent;
