import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';

/**Hardcoded data*/
/*
____1___
oneCol => to md / 768
twoCols => md / xl / 768 - 1280
threeCols => xl
*/
const textStyle =
  'text-[0.75rem] xs:text-[0.825rem] md:text-[0.75rem] xl:text-[0.675rem] xxxl:text-[0.825rem] tracking-[1px] lg:tracking-[0.125rem] word-spacing-01 lg:word-spacing-0125 text-grey text-left group-hover:text-light ease-in duration-300';
/*
____2__
*/
const widthConditionValue = 350;

/**------------------------------------------------------**/
const ProductCardTextSection: React.FunctionComponent<{
  textIcons?: string[];
  productName: string | string[] | undefined;
  type?: string;
  collection?: string[] | string;
  model?: string;
}> = ({ textIcons, productName, type, collection, model }) => {
  /**Hook Section*/
  const { width } = useWindowSize({ screensNumber: 1 });
  /**JSX**/
  return (
    <div className="relative flex flex-col  w-full h-full px-4 py-4">
      <div
        className={
          width > widthConditionValue ? '' : 'flex h-full items-center '
        }
      >
        <div className={'flex flex-col gap-2 pt-2 md:pt-4'}>
          {model && <SmallPseudoHeader text={model} textStyle={textStyle} />}
          {type && <SmallPseudoHeader text={type} textStyle={textStyle} />}
          {collection && Array.isArray(collection) ? (
            <div className="flex gap-2 pl-[0px]">
              <SmallPseudoHeader text={collection[0]} textStyle={textStyle} />
              <p className={textStyle}>{collection[1]}</p>{' '}
            </div>
          ) : (
            <div className="flex gap-2 pl-[0px]">
              <SmallPseudoHeader text={collection} textStyle={textStyle} />
            </div>
          )}
        </div>
      </div>
      {width > widthConditionValue ? (
        <div>
          <div
            className="absolute bottom-2 md:bottom-4 flex flex-wrap gap-1"
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
      ) : null}
    </div>
  );
};

export default ProductCardTextSection;
