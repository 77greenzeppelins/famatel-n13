import React from 'react';

const ProductDescription = () => {
  return (
    <div className="flex flex-col justify-end items-start xl:justify-center sm:items-end sm:justify-start inner-px sm:inner-px-md pt-[62px] lg:pt-[88px] sm:pb-16 lg:pb-0 w-full h-full">
      <div className="flex items-center justify-end w-full h-full ">
        <div className="overflow-hidden" style={{ width: 'fit-content' }}>
          <p
            // className="text-[1rem] text-dark text-right leading-[2rem] uppercase bg-corpo px-4 py-1 rounded-sm disable"
            // className="text-[0.75rem] xxs:text-[1rem] md:text-[1.5rem] text-dark text-left xxs:tracking-[0.2rem] bg-corpo px-4 py-1 rounded-sm disable"
            className="text-light text-[0.625rem] lg:text-[0.75rem] xxxl:text-[0.875rem] tracking-widest uppercase bg-corpo px-4 py-1 rounded-sm disable pointer-events-auto cursor-pointer"
          >
            Zobacz kategorię produktu
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
