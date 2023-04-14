import React from 'react';
/**Hooks**/
import useMeasure from 'react-use-measure';
/**Components**/
import DraggableSlider from '../section_1/graphicSection/draggableSlider/DraggableSlider';

/**TS**/
interface Props {
  currentIndex: number;
  slideHeight: string;
}
const DraggableSlider_1: React.FC<Props> = ({ currentIndex, slideHeight }) => {
  /**Hook Section / just count container of "sliding" images... **/
  const [ref, { width, height }] = useMeasure();

  /**JSX**/
  return (
    <div
      ref={ref}
      className={`relative fc flex-col  w-full overflow-hidden ${slideHeight}`}
    >
      <DraggableSlider
        width={width}
        heightValue={1} //___fake value to
        currentCategory={currentIndex}
      />
    </div>
  );
};

export default DraggableSlider_1;
