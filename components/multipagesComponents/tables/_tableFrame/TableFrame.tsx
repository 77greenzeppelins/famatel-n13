import React, { ReactNode } from 'react';
/**Components**/
import SliderWithScrollbar from '../../sliders/sliderWithScrollbar/SliderWithScrollbar';
/**Tailwind Staff**/
import { horizGap } from '../../../../utils/tailwindStyles';

/**--------------------------**/
const TableFrame: React.FC<{
  children: ReactNode;
  customContainerStyle?: string;
  detailsForContainerStyle?: string;
  sliderTriggersValue?: string;
  customeTrigger?: string;
}> = ({
  children,
  customContainerStyle,
  detailsForContainerStyle,
  sliderTriggersValue,
  customeTrigger,
}) => {
  /**Switch statement*/
  const createSliderTriggerValue = (
    sliderTriggersValue: string | undefined
  ) => {
    switch (sliderTriggersValue) {
      case 'sm':
        return 'min-w-[500px]';
      case 'md':
        return 'min-w-[700px]';
      case 'lg':
        return 'min-w-[900px]';
      case 'custom':
        return customeTrigger && customeTrigger;
    }
  };
  /**JSX*/
  return (
    <SliderWithScrollbar>
      <div
        data-component="TableFrame__innerContainer"
        className={
          customContainerStyle
            ? customContainerStyle
            : `flex flex-col ${horizGap} ${createSliderTriggerValue(
                sliderTriggersValue
              )} ${detailsForContainerStyle ? detailsForContainerStyle : ''}`
        }
      >
        {children}
      </div>
    </SliderWithScrollbar>
  );
};

export default TableFrame;
