import Link from 'next/link';
import React from 'react';
/**Components*/
import SvgMap from '../../../../SVG/maps/SvgMap';

/**------------------------**/
const LinkWithMap = () => {
  /**JSX**/
  return (
    <div
      //  className="relative w-full h-full bg-vB"
      className="relative flex w-full gap-x-6 min-h-[400px] xl:h-[80vh] lg:w-[50%] xl:w-[55%] md:justify-center pt-2"
    >
      <Link
        className="relative block z-10 w-full h-full"
        role="link"
        href="https://www.google.com/maps/search/Av.+el+Pla,+11+P.I.+Pla+els+Baltzacs.+08185+Lli%C3%A7%C3%A0+de+Vall.++Barcelona.+Spain/@41.587764,2.2493782,17z"
        // href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.1226646024706!2d16.600824306419636!3d50.680548067870525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e3715598e761f%3A0x10519edde159a1b6!2sFamatel%20Polska%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1669975901879!5m2!1spl!2spl"
        scroll={false}
        aria-label={'Link do GoogleMap'}
      />
      <div
        className="absolute inset-0 z-5"
        role="prezentacja"
        aria-label="Mapka dojazdu"
      >
        <SvgMap containerStyle="w-full" />
      </div>
    </div>
  );
};

export default LinkWithMap;
