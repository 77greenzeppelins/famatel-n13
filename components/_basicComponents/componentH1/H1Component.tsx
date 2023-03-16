import React from 'react';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
/**Basic Data**/
const h1DefaultStyle = `text-light text-left 
    text-[2rem] md:text-[3rem] xl:text-[4rem] font-bold tracking-[2px] leading-tight`;
//___leading-none, leading-tight, leading-snug

/**-----------------------------------------------**/
const H1Component: React.FunctionComponent<{
  text?: string | string[];
  hasDecoration?: boolean;
  variantH?: string;
  customeStyle?: string;
}> = ({ text, hasDecoration = false, variantH, customeStyle }) => {
  /**Const**/
  const createStyle = (variantH: string) => {
    switch (variantH) {
      case 'h2':
        return `text-light text-left text-[1rem] lg:text-[1.5rem] xxl:text-[1.75rem]  tracking-widest`;
      case 'h3':
        return `text-light text-left text-[0.75rem] lg:text-[1rem] xxl:text-[1.25rem] tracking-widest`;
      case 'custome':
        return customeStyle;
      default:
        return h1DefaultStyle;
    }
  };

  const createText = () => {
    if (text && Array.isArray(text)) {
      return (
        <div
          // className={`${categoryNameContainerStyle} flex disable`}
          className="fc flex-col  disable-soft"
        >
          {hasDecoration ? (
            <div className="h-auto w-[10px] border-l border-corpo" />
          ) : null}
          {text.map((label, i) => (
            <motion.p
              key={i}
              className={variantH ? createStyle(variantH) : h1DefaultStyle}
            >
              {label}
            </motion.p>
          ))}
        </div>
      );
    }
    return (
      <div
        // className={`${categoryNameContainerStyle} flex disable`}
        className="flex disable-soft"
      >
        {hasDecoration ? (
          <div className="h-auto w-[10px] border-l border-corpo" />
        ) : null}
        <motion.p className={variantH ? createStyle(variantH) : h1DefaultStyle}>
          {text}
        </motion.p>
      </div>
    );
  };
  /**JSX**/
  return createText();
  // <div
  //   // className={`${categoryNameContainerStyle} flex disable`}
  //   className="flex disable-soft"
  // >
  //   {hasDecoration ? (
  //     <div className="h-auto w-[10px] border-l border-corpo" />
  //   ) : null}
  //   <motion.p className={variantH ? createStyle(variantH) : h1DefaultStyle}>
  //     {text}
  //   </motion.p>
  // </div>
};

export default H1Component;

/*
useCase:
<H1Component
variantH="custome"
customeStyle="text-light text-left text-[2rem] xs:text-[2.5rem] xxl:text-[3rem] tracking-widest"
/>
*/
