import React from 'react';
import { story } from '../../../../../data/_data';
import AnimatedParagraph from '../../../../multipagesComponents/pseudoHeaders/animatedParagraph/AnimatedParagraph';
import FadingHeader from '../../../../multipagesComponents/pseudoHeaders/fadingHeader/FadingHeader';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
// story.pageProdukty.categoriesDescritpions

const DescriptionSection: React.FC<{ categoryIndex: number }> = ({
  categoryIndex,
}) => {
  return (
    <div className="w-full flex flex-col gap-24 inner-px-md-xl-xxl">
      {/* <div className="w-full flex flex-col gap-10">
        <FadingHeader label={'Opis'} />
        <AnimatedParagraph
          uniqueKey={categoryIndex}
          textsArray={story.pageProdukty.categoriesDescritpions}
        />
      </div> */}
      {/* <div>
        <FadingHeader label={'Podkategorie'} />
      </div> */}
      <div className="w-full xl:w-[80%] flex flex-col gap-10">
        <SmallPseudoHeader
          text={'Opis'}
          hasBox={false}
          hasVerticalOrnament={true}
        />
        <AnimatedParagraph
          uniqueKey={categoryIndex}
          textsArray={story.pageProdukty.categoriesDescritpions}
        />
      </div>
      <SmallPseudoHeader
        text={'Podkategorie'}
        // textStyle={textStyle}
        hasBox={false}
        hasVerticalOrnament={true}
      />
    </div>
  );
};

export default DescriptionSection;
