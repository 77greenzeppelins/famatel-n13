import React, { ForwardedRef, forwardRef } from 'react';
/**Components**/
import NumbersDisplayer from '../../../../multipagesComponents/counters/numbersDisplayer/NumbersDisplayer';
/**Basic Data*/
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import LinkWithSpanAndIcon from '../../../../_basicComponents/links/linkWithSpanAndIcon/LinkWithSpanAndIcon';

/**HardCoded Style*/
const textStyle =
  'text-corpo text-center text-[1.75rem] xxs:text-[2.75rem] xs4xx:text-[4.5rem] lg:text-[5.5rem] font-bold tracking-[2px] leading-tight';

/**TS**/

type RefType = HTMLDivElement;

type PropsType = {
  categoryIndex: number;
};
/**------------------------------------------------------------**/
/*
syntax__2:
const CounterSection = forwardRef<RefType, PropsType>(
  (props, ref) => {...}
in this case we "apply" to forwadRef two generic types; order matters...
 */
const CounterSection = forwardRef(
  (props: PropsType, ref: ForwardedRef<RefType>) => {
    return (
      <div className="flex flex-col w-full items-center ">
        <div
          className=""
          // className="w-5/12 fc"
        >
          <NumbersDisplayer
            currentCategoryIndex={props.categoryIndex}
            digitStyle={textStyle}
            digitContainerStyle="fc xxs:w-[66px] xs4xx:w-[80px]"
            countedStaff={catalogStructureData.length}
          />
        </div>
        <div className="fc w-full" ref={ref}>
          <LinkWithSpanAndIcon
            uniqueKeyToAnimate={
              catalogStructureData[props.categoryIndex].mainCategoryUrl
            }
            linkHref={catalogStructureData[props.categoryIndex].mainCategoryUrl}
            linkLabel={
              catalogStructureData[props.categoryIndex].mainCategoryName
            }
            ariaLabel={`Link do kategorii: ${
              catalogStructureData[props.categoryIndex].mainCategoryName
            }`}
            linkStyle="relative flex flex-col items-center justify-center w-full group"
            //___h-full xl:h-full
            spanStyle="text-grey text-center text-[1.25rem] xs:text-[1.5rem]  xs:text-[1.75rem] xxl:text-[2.25rem] tracking-[2px] leading-tight flex items-center w-fit max-w-[750px] h-[72px] lg:h-[60px] disable-soft"
            //___error maker: group-hover:text-light ease-in" ???
          />
        </div>
      </div>
    );
  }
);

CounterSection.displayName = 'CounterSection';

export default CounterSection;
