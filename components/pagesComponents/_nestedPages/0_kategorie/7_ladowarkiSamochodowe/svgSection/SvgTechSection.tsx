import React from 'react';
/*Components*/
import SvgTechWylacznikBezpieczenstwa from '../../../../../SVG/techDrawings/6_wylacznik-bezpieczenstwa/SvgTechWylacznikBezpieczenstwa';
/*Hook*/
import useMeasure from 'react-use-measure';

/**-----------------------------**/
const SvgTechSection = () => {
  /*
  Trick: how to make svg responsive; "SVGModule__container" inherits width and height from parentComponent; is pluged to useMeasure; value from hooks are propsed to SVG
  */
  const [ref, bounds] = useMeasure();
  /**JSX**/
  return (
    <div
      data-component="SvgTechSection__container"
      ref={ref}
      className="fc w-full h-full bg-light"
    >
      <SvgTechWylacznikBezpieczenstwa
        /*
        ___1. usihg calculation in "width" we can control size of svgImage
        */
        width={Math.min(bounds.width, 600)}
        height={bounds.height}
      />
    </div>
  );
};

export default SvgTechSection;
