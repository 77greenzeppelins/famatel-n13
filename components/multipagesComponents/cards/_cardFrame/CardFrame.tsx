import React, { ReactNode } from 'react';
const defaultContainerStyle =
  'absolute t-0 l-0 h-full w-full bg-[#111110] hover:bg-black blur-[4px] group-hover:blur-[10px] ease-in duration-300';
const defoultInnerContainerStyle =
  'relative fc w-full h-full rounded-md pointer-events-none bg-dark';

/**--------------------------------------------------------------------------**/
/**
 * remark_1: should have a parent with className='... group'
 */
const CardFrame: React.FunctionComponent<{
  children: ReactNode;
  mainContainerStyle?: string;
  innerContainerStyle?: string;
}> = ({ children, mainContainerStyle, innerContainerStyle }) => {
  /**JSX**/
  return (
    <div className="relative h-full w-full">
      <div
        data-component="CardFrame__bluredBackgroundContainer"
        className={
          mainContainerStyle ? mainContainerStyle : defaultContainerStyle
        }
      />
      <div
        className={
          innerContainerStyle ? innerContainerStyle : defoultInnerContainerStyle
        }
      >
        {children}
      </div>
    </div>
  );
};

export default CardFrame;
