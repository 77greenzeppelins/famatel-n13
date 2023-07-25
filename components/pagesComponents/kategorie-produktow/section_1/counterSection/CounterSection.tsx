import React, { ForwardedRef, forwardRef } from 'react';
/**Components**/
import NumbersDisplayer from '../../../../multipagesComponents/counters/numbersDisplayer/NumbersDisplayer';
import LinkWithSpanAndIcon from '../../../../_basicComponents/links/linkWithSpanAndIcon/LinkWithSpanAndIcon';
import AnimatedSpanHeader from '../../../../multipagesComponents/pseudoHeaders/animatedSpanHeader/AnimatedSpanHeader';
/**Basic Data*/
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';

/**HardCoded Style*/
const textStyle =
  'text-grey text-center text-[1.75rem] xxs:text-[2.75rem] xs4xx:text-[4.5rem] lg:text-[5.5rem] font-bold tracking-[2px] leading-tight';

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
      <div className="flex flex-col items-center w-full ">
        <div>
          <NumbersDisplayer
            currentCategoryIndex={props.categoryIndex}
            digitStyle={textStyle}
            digitContainerStyle="fc xxs:w-[66px] xs4xx:w-[80px]"
            countedStaff={catalogStructureData.length}
          />
        </div>
        <div className="flex-col w-full fc" ref={ref}>
          <AnimatedSpanHeader
            uniqueKey={props.categoryIndex}
            label={catalogStructureData[props.categoryIndex].mainCategoryName}
          />
          <div className="hidden sm:block">
            <LinkWithSpanAndIcon
              uniqueKeyToAnimate={''} //___empty means no animation in <span>
              linkHref={
                catalogStructureData[props.categoryIndex].mainCategoryUrl
              }
              linkLabel={'Szczegóły kategorii'}
              ariaLabel={`Link do strony: Kategorie Produktów`}
              linkStyle="fc gap-x-4 group px-4 py-1 bg-corpo rounded-sm"
              spanStyle={`p-small text-dark font-bold group-hover:text-light group-hover:font-normal  ease-in duration-[0.4s] delay-[0.1s] `}
              //text-[0.75rem]  lg:text-[1rem] tracking-[2px] leading-tight
              iconStyle="fc h-4 w-4  aspect-square stroke-dark group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0"
            />
          </div>
        </div>
      </div>
    );
  }
);

CounterSection.displayName = 'CounterSection';

export default CounterSection;
