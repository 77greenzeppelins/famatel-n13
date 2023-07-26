import React from 'react';
import { story } from '../../../../../data/_data';
import AnimatedParagraph from '../../../../multipagesComponents/pseudoHeaders/animatedParagraph/AnimatedParagraph';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import SubCategoriesModule from './subCategoriesModule/SubCategoriesModule';

/**---------------------------------------------------------------**/
const DescriptionSection: React.FC<{ categoryIndex: number }> = ({
  categoryIndex,
}) => {
  return (
    <div className="flex flex-col w-full gap-12 ">
      <div className="w-full flex flex-col gap-4 sm:pr-[80px]">
        <SmallPseudoHeader
          text={'Opis'}
          hasBox={false}
          hasVerticalOrnament={true}
        />
        <div className="h-full xxs:h-[130px] xs4xx:h-[104px] xs:h-[78px] md:h-[70px] xl:h-[52px]">
          <AnimatedParagraph
            uniqueKey={categoryIndex}
            textsArray={story.pageProdukty.categoriesDescritpions}
            spanStyle="p-small text-left text-grey"
          />
        </div>
      </div>
      <div className="w-full  flex flex-col gap-4 sm:pr-[80px]">
        <SmallPseudoHeader
          text={'Podkategorie'}
          // textStyle={textStyle}
          hasBox={false}
          hasVerticalOrnament={true}
        />
        <div className="h-[40px]">
          <SubCategoriesModule categoryIndex={categoryIndex} />
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
