import React from 'react';
import SectionContentLayout from '../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
/**Hardcoded Staff*/
const witajStyle =
  'text-light text-6xl xxs:text-8xl lg:text-9xl font-bold tracking-[1.5px] lg:tracking-[1.5px] word-spacing-0125 lg:word-spacing-025 disable-soft';
const sentenceStyle =
  'text-1rem lg:text-2xl text-grey text-center md:text-left tracking-[1.5px] lg:tracking-[2px] word-spacing-0125 lg:word-spacing-025 disable-soft';

const ContactIntro = () => {
  return (
    <SectionContentLayout divStyle="flex flex-col gap-y-4 md:flex-row md:gap-x-14 pt-[20px]">
      <div className="flex justify-center md:justify-start gap-x-6">
        <p className={witajStyle}>Witaj</p>
        <p className={witajStyle}>!</p>
      </div>
      <div className="flex items-center lg:w-[70%] xl:w-[50%]">
        <p className={sentenceStyle}>
          Zespół Famatel Polska jest do Twojej dyspozycji od poniedziałku do
          piątku w godzinach 8ºº - 16ºº.
          {/* <span className="text-[1rem] leading-leading-tight">
            (a czasami nawet dłużej...)
          </span> */}
        </p>
      </div>
    </SectionContentLayout>
  );
};

export default ContactIntro;
