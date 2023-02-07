import React from 'react';
import SmallPseudoHeader from '../../../../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';

const ProductCardTextSection: React.FunctionComponent<{
  textIcons?: string[];
  productName: string | string[] | undefined;
  type?: string;
  collection?: string[];
  model?: string;
}> = ({ textIcons, productName, type, collection, model }) => {
  return (
    <div className="relative flex flex-col  w-full h-full px-4 py-4">
      <div>
        {productName && Array.isArray(productName) ? (
          productName.map((line, index) => (
            <p
              key={index}
              className="header-link-label text-light opacity-70 group-hover:opacity-100 ease-in duration-300 "
            >
              {line}
            </p>
          ))
        ) : (
          <p className="header-link-labe text-light text-center opacity-70 group-hover:opacity-100 ease-in duration-300 l">
            {productName}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 pt-2 md:pt-4">
        {model && (
          <SmallPseudoHeader
            text={model}
            textStyle=" p-small text-grey text-left group-hover:text-light ease-in duration-300"
            //___header-link-label
            verticalOrnamentStyle="h-auto w-[8px] border-l border-corpo"
            // hesVerticalOrnament={false}
            // hesHorizontalOrnament={true}
          />
        )}
        {type && (
          // <div className="pl-[0px]">
          //   <p className="header-link-label text-grey text-left group-hover:text-light ease-in duration-300 ">
          //     {type}
          //   </p>
          // </div>

          <SmallPseudoHeader
            text={type}
            textStyle="p-small text-grey text-left group-hover:text-light ease-in duration-300"
            verticalOrnamentStyle="h-auto w-[8px] border-l border-corpo"
            // hesVerticalOrnament={false}
            // hesHorizontalOrnament={true}
          />
        )}
        {collection && (
          <div className="flex gap-2 pl-[0px]">
            {/* <p className="p-small text-grey text-left group-hover:text-light ease-in duration-300">
              {collection[0]}
            </p> */}
            <SmallPseudoHeader
              text={collection[0]}
              textStyle="p-small text-grey text-left group-hover:text-light ease-in duration-300"
              verticalOrnamentStyle="h-auto w-[8px] border-l border-corpo"
              // hesVerticalOrnament={false}
              // hesHorizontalOrnament={true}
            />
            <p className="p-small text-grey text-left group-hover:text-light ease-in duration-300 ">
              {collection[1]}
            </p>{' '}
          </div>
        )}

        {/* {model && (
          <div>
            <p className="text-light text-left header-link-label">{model}</p>
          </div>
        )} */}
      </div>
      <div
        className="absolute bottom-2 md:bottom-4 flex gap-2 flex-wrap "
        //___flex-wrap
      >
        {textIcons &&
          textIcons.map((textIcon, i) => (
            <div key={i} className="relative fc py-1 px-3">
              <div className="absolute w-full h-full border border-light opacity-60 group-hover:opacity-100 ease-in duration-300 rounded-sm" />
              <p
                className="text-light text-center opacity-70 group-hover:opacity-100 ease-in duration-300 p-small "
                //___header-link-label
              >
                {textIcon}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductCardTextSection;