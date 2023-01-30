import React from 'react';
import SectionContentLayout from '../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';

const ContactIntro = () => {
  return (
    <SectionContentLayout divStyle="flex flex-col gap-y-4 xl:flex-row xl:gap-x-14">
      <div className="flex justify-start gap-4">
        <p className="text-8xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 disable-soft">
          Witaj
        </p>
        <p className="text-dark text-8xl tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 disable">
          !
        </p>
      </div>
      <div className="flex items-center lg:w-[70%] xl:w-[50%]">
        <p className="text-2xl text-grey tracking-[1px] lg:tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 disable-soft">
          Zespół Famatel Polska jest do Twojej dyspozycji od poniedziałku do
          piątku w godzinach od 8.00 do 16.00{' '}
          <span className="text-[1rem]">(a czasami nawet dłużej...)</span>
        </p>
      </div>
    </SectionContentLayout>
  );
};

export default ContactIntro;
