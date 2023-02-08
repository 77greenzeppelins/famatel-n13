import React, { useEffect } from 'react';
/*Components*/
import SvgTechMetalowe from '../../../../../SVG/techDrawings/5_przedluzacze-bebnowe/SvgTechMetalowe';
/*Hook*/
import useMeasure from 'react-use-measure';

/**-----------------------------**/
const SvgTechSection = () => {
  /*
  Trick: how to make svg responsive; "SVGModule__container" inherits width and height from some parent; is pluged to useMeasure; value from hooks are propsed to SVG
  */
  const [ref, bounds] = useMeasure();
  /*
  ...WTF
  */
  useEffect(() => {
    console.log('SvgHolder / bounds:', bounds);
  }, [bounds]);
  /*
  JSX
  */
  return (
    <div
      data-component="SvgHolder__container"
      ref={ref}
      className="fc w-full h-full bg-light"
    >
      <SvgTechMetalowe width={bounds.width} height={bounds.height} />
    </div>
  );
};

export default SvgTechSection;
