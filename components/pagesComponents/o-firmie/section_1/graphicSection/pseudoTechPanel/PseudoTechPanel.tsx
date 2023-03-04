import React from 'react';
/** */

const PseudoTechPanel = () => {
  return (
    <div className="absolute hidden xs352:flex bottom-[10%] right-[25%] h-[70%] w-[70%]">
      <div className="relative fc w-full h-full">
        <div className={` absolute top-0 left-0 h-[20%] w-[20%] `} />
        <div className={`absolute bottom-0 left-0 h-[50%] w-[50%] `}>
          <div className="relative flex flex-col justify-end w-full h-full ">
            <div className="flex items-center pl-2 py-2 ">
              {' '}
              <div className="fc w-[10px] h-[10px] bg-dark border-[1px] border-greyShade1"></div>{' '}
              <div className="fc w-[20px] h-[1px] border-[1px] border-greyShade1"></div>{' '}
              <div className="pl-2 ">
                <p className="p-small text-greyShade1">IP 67</p>
              </div>
            </div>
            <div className="flex items-center pl-2 py-2 ">
              {' '}
              <div className="fc w-[10px] h-[10px] bg-dark border-[1px] border-greyShade1"></div>{' '}
              <div className="fc w-[10%] h-[50%] border-t-[1px] border-greyShade1"></div>{' '}
              <div className="pl-2 ">
                <p className="p-small text-greyShade1">IP 67</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className={`absolute bottom-0 right-0 h-[20%] w-[20%] `} />
        <div className={`absolute top-0 right-0 h-[50%] w-[50%]`}>
          <div className="relative w-full h-full">
            <div className={`absolute top-0 right-0 h-[20%] w-[20%] `} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PseudoTechPanel;

// ${
//           hoverCondition
//             ? ''
//             : 'group-hover:opacity-100 group-hover:h-[25%] group-hover:w-[25%] group-hover:border-corpo duration-[0.6s] ease-in delay-[0.1s]'
//         }
