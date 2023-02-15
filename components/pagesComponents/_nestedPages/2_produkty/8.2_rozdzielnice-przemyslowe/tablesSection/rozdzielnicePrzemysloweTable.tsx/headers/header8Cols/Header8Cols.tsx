import React from 'react';
/**Components**/
import HeaderCell from '../headerCell/HeaderCell';
import SocketsHolder from '../socketsHolder/SocketsHolder';
/*Basic Data*/
import { header8ColumnsData } from './_header8Cols_data';
/**Tailwind Styles*/
import {
  sideHeaderCellCenter,
  topHeaderCell,
} from '../../../../../../../../../utils/tailwindStyles';

/************************************************************************************/
const Header8Columns = () => {
  /*
  JSX
  */
  return (
    <>
      {
        //___ "Models"
      }
      <div className={`${header8ColumnsData.modelsHeader.gridItemStyle}`}>
        <HeaderCell label={header8ColumnsData.modelsHeader.label} />
      </div>
      {
        //___ "Gniazda"
      }
      <div className={`${header8ColumnsData.mainGridItemStyle}`}>
        <div className={`${topHeaderCell}`}>
          <p>{header8ColumnsData.mainHeader.label}</p>
        </div>
      </div>
      {
        //___ "Ampers"
      }
      <div className={`${header8ColumnsData.mainGridItemStyle}`}>
        <div className={`${header8ColumnsData.innerGridStyle} `}>
          {header8ColumnsData.ampers.labels.map((label, i) => (
            <HeaderCell key={i} label={label} />
          ))}
        </div>
      </div>
      {
        //___ "Poles"
      }
      <div className={`${header8ColumnsData.mainGridItemStyle}`}>
        <div className={`${header8ColumnsData.innerGridStyle} `}>
          <div className={`${header8ColumnsData.cellsGridStyle16A} `}>
            {header8ColumnsData.poles.labels16A.map((label, i) => (
              <HeaderCell key={i} label={label} />
            ))}
          </div>
          <div className={`${header8ColumnsData.cellsGridStyle32A} `}>
            {header8ColumnsData.poles.labels32A.map((label, i) => (
              <HeaderCell key={i} label={label} />
            ))}
          </div>
        </div>
      </div>
      {
        //___ "Vat" / "Sockets"
      }
      <div className={`${header8ColumnsData.mainGridItemStyle}`}>
        <div className={`${header8ColumnsData.innerGridStyle} `}>
          <div className={`${header8ColumnsData.cellsGridStyle16A} `}>
            {header8ColumnsData.sockets.labels16A.map((label, i) => (
              <div key={i} className="fc flex-col">
                <HeaderCell key={i} label={label} heightFull={false} />
                {i !== 3 ? (
                  <SocketsHolder
                    index={i}
                    mainContainerStyle=" fc relative w-[90%] max-w-[70px]"
                    clockPositionStyle={
                      i === 0
                        ? 'absolute bottom-0 w-[14%] h-[40%] bg-blue-500 rounded-lg'
                        : 'absolute bottom-0 w-[14%] h-[40%] bg-red-700 rounded-lg'
                    }
                    socketStyle={i === 0 ? 'bg-blue-500' : 'bg-red-700'}
                  />
                ) : (
                  <div className="w-full h-full fc bg-grey">
                    <p
                      className={`text-[0.625rem]  xxl:text-[0.75rem] text-light text-center disable-soft`}
                    >
                      SCHUKO
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={`${header8ColumnsData.cellsGridStyle32A} `}>
            {header8ColumnsData.sockets.labels32A.map((label, i) => (
              <div key={i} className="fc flex-col">
                <HeaderCell label={label} />

                <SocketsHolder
                  index={i}
                  mainContainerStyle=" fc relative w-[90%] max-w-[70px]"
                  clockPositionStyle={
                    i === 0
                      ? 'absolute bottom-0 w-[14%] h-[40%] bg-blue-500 rounded-lg'
                      : 'absolute bottom-0 w-[14%] h-[40%] bg-red-700 rounded-lg'
                  }
                  socketStyle={i === 0 ? 'bg-blue-500' : 'bg-red-700'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
    // </div>
  );
};

export default Header8Columns;
