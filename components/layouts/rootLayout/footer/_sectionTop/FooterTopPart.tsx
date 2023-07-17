import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import MainPagesLinks_2 from '../mainPages/MainPagesLinks_2';
import ProductCategoriesLinks from '../productCategories/ProductCategoriesLinks';
import Regulacje from '../regulacje/Regulacje';

/**TS**/
interface Props {
  headerTextStyle?: string;
  ornamentColor?: string;
  labelStyle?: string;
}
/**----------------------------**/
const FooterTopPart = ({
  headerTextStyle,
  ornamentColor,
  labelStyle,
}: Props) => {
  /**JSX**/
  return (
    <div className="flex flex-wrap gap-y-8 w-full min-h-[200px] inner-px-md-xl-xxl bg-grey py-6">
      <div className="flex flex-col w-full gap-y-6 xs4xx:w-1/2 xs4xx:pr-2 md:pr-0  md:basis-1/3">
        <SmallPseudoHeader
          text="Regulacje"
          textStyle={headerTextStyle}
          ornamentColor={ornamentColor}
        />
        <Regulacje />
      </div>
      <div className="flex flex-col w-full gap-y-6 xs4xx:w-1/2 xs4xx:pl-2 md:pl-0 md:basis-1/3">
        <SmallPseudoHeader
          text="Strony główne"
          textStyle={headerTextStyle}
          ornamentColor={ornamentColor}
        />
        <MainPagesLinks_2 labelStyle={labelStyle} />
      </div>
      <div className="flex flex-col w-full gap-y-6 xs4xx:basis-1/1 md:basis-1/3">
        <SmallPseudoHeader
          text="Kategorie produktów"
          textStyle={headerTextStyle}
          ornamentColor={ornamentColor}
        />
        <ProductCategoriesLinks />
      </div>
    </div>
  );
};

export default FooterTopPart;
