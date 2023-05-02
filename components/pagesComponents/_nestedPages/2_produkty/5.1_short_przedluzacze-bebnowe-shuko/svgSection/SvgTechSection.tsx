import React, { useEffect } from 'react';
/*Components*/
import SvgTechSchuko from '../../../../../SVG/techDrawings/5_przedluzacze-bebnowe/SvgTechSchuko';
/*Hook*/
import useMeasure from 'react-use-measure';

/**-----------------------------**/
const SvgTechSection = () => {
  /*
  Trick: how to make svg responsive; "SVGModule__container" inherits width and height from some parent; is pluged to useMeasure; value from hooks are propsed to SVG
  */
  const [ref, bounds] = useMeasure();
  /*
  JSX
  */
  return (
    <div
      data-component="SvgHolder__container"
      ref={ref}
      className="fc w-full h-full bg-light p-6 rounded-md"
    >
      <div className="fc w-full h-full">
        <SvgTechSchuko basicSize={bounds.width * 0.9} />
      </div>
    </div>
  );
};

export default SvgTechSection;
