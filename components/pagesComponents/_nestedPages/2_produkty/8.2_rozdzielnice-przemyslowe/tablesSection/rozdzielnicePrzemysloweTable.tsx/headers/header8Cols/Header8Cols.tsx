import React from 'react';
/**Components**/
import SocketsHolder from '../socketsHolder/SocketsHolder';
/*Basic Data*/
import {
  headerLabelStyle,
  headerSocketCellStyle,
  headerCellStyle,
  bodyLabelStyle,
} from '../../../../../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_2_przemyslowe_techSpec';

import { header8ColumnsData } from './_header8Cols_data';
/*TS*/
interface ICell {
  label: string;
}
/*
direct child component
*/
const Cell = ({ label }: ICell) => {
  /*
  ...JSX
  */
  return (
    <div className={`${headerCellStyle} w-full`}>
      <p className={`${headerLabelStyle} text-center`}>
        <span>{label}</span>
      </p>
    </div>
  );
};

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
        <div className={`${headerCellStyle} h-full`}>
          <p className={`${headerLabelStyle} fc h-full`}>
            <span>{header8ColumnsData.modelsHeader.label}</span>
          </p>
        </div>
      </div>
      {
        //___ "Gniazda"
      }
      <div className={`${header8ColumnsData.mainGridItemStyle}`}>
        <div className={`${headerCellStyle}`}>
          <p className={`${headerLabelStyle} text-center`}>
            <span>{header8ColumnsData.mainHeader.label}</span>
          </p>
        </div>
      </div>
      {
        //___ "Ampers"
      }
      <div className={`${header8ColumnsData.mainGridItemStyle}`}>
        <div className={`${header8ColumnsData.innerGridStyle} `}>
          {header8ColumnsData.ampers.labels.map((label, i) => (
            <Cell key={i} label={label} />
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
              <Cell key={i} label={label} />
            ))}
          </div>
          <div className={`${header8ColumnsData.cellsGridStyle32A} `}>
            {header8ColumnsData.poles.labels32A.map((label, i) => (
              <Cell key={i} label={label} />
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
              // <Cell key={i} label={label} />
              <div key={i} className="fc flex-col">
                <Cell key={i} label={label} />
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
                    <p className={`${headerLabelStyle} text-center`}>
                      <span>SCHUKO</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={`${header8ColumnsData.cellsGridStyle32A} `}>
            {header8ColumnsData.sockets.labels32A.map((label, i) => (
              <div key={i} className="fc flex-col">
                <Cell label={label} />

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
