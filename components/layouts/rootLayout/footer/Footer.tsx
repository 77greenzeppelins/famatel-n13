import React from 'react';
import FadingLine from '../../../multipagesComponents/lines/fadingLine/FadingLine';
import GoToTopButton from './goToTopButton/GoToTopButton';

const Footer = () => {
  return (
    <footer className="w-full min-h-[25vh] ">
      <div className="relative flex items-end h-20 ">
        <FadingLine gradientTo="toLeft" containerStyle="w-1/2 h-[1px]" />
        <FadingLine gradientTo="toRight" containerStyle="w-1/2 h-[1px]" />
        {/* <div className="absolute inset-0 fc">
          <GoToTopButton />
        </div> */}
      </div>

      <div className="inset-0 w-full h-6 fc ">
        <div>
          {' '}
          <GoToTopButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
