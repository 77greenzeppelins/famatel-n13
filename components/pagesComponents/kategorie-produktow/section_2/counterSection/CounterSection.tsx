import React, { ForwardedRef, forwardRef } from 'react';
/**Components**/
import NumbersDisplayer_2 from '../../../../multipagesComponents/counters/numbersDisplayer/NumbersDisplayer_2';
import AnimatedLabel from '../../../../multipagesComponents/pseudoHeaders/animatedLabel/AnimatedLabel';
/**Basic Data*/
import { catalogStructureData } from '../../../../../data/_catalogStructure_data';
import { simpleOpacityVariants } from '../../../../../utils/framerMotion/framerMotionUtils';
import LinkAsContainer from '../../../../_basicComponents/links/linkAsContainer/LinkAsContainer';
import NavWithProgressBar from '../../../../multipagesComponents/navigations/navWithProgressBar/NavWithProgressBar';

/**TS**/
type RefType = HTMLDivElement;

type PropsType = {
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
};
/**------------------------------------------------------------**/
/*
___1. why "forwardRef"? ==> because if this section in inView <FixedNavSection> in <Section_2> appears... 
___2. syntax__2:
const CounterSection = forwardRef<RefType, PropsType>(
  (props, ref) => {...}
in this case we "apply" to forwadRef two generic types; order matters...
 */
const CounterSection = forwardRef(
  (props: PropsType, ref: ForwardedRef<RefType>) => {
    return (
      <div className="flex flex-col w-full ">
        <div className="flex gap-x-20">
          <NumbersDisplayer_2
            currentCategoryIndex={props.categoryIndex}
            countedStaff={catalogStructureData.length}
          />
          <NavWithProgressBar
            setCategoryIndex={props.setCategoryIndex}
            categoryIndex={props.categoryIndex}
            categoriesNumber={props.categoriesNumber}
          />
        </div>
        <div className="lg:w-[80%] m-auto" ref={ref}>
          <LinkAsContainer
            linkHref={catalogStructureData[props.categoryIndex].mainCategoryUrl}
            ariaLabel={`Link do kategorii: ${
              catalogStructureData[props.categoryIndex].mainCategoryName
            }`}
          >
            <AnimatedLabel
              customeVariants={simpleOpacityVariants}
              uniqueKey={props.categoryIndex}
              label={catalogStructureData[props.categoryIndex].mainCategoryName}
              hasIcon={true}
            />
          </LinkAsContainer>
        </div>
      </div>
    );
  }
);

CounterSection.displayName = 'CounterSection';

export default CounterSection;
