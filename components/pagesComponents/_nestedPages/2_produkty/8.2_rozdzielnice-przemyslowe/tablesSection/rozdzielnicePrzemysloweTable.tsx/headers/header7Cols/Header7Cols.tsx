import React from 'react';
/**Components**/
import HeaderCell from '../headerCell/HeaderCell';
import SocketsHolder from '../socketsHolder/SocketsHolder';
/*Basic Data*/
import {
  headerLabelStyle,
  headerCellStyle,
  grid1colsStyle,
  grid2colsStyle,
  grid3colsStyle,
  grid3fr2fr1frStyle,
  bodyLabelStyle,
} from '../../../../../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_2_przemyslowe_techSpec';
import { header7ColumnsData } from './_header7Cols_data';
import { topHeaderCell } from '../../../../../../../../../utils/tailwindStyles';

/************************************************************************************/
const Header7Cols = () => {
  /*
  JSX
  */
  return (
    <>
      {
        //___ "Models"
      }
      <div className={`${header7ColumnsData.modelsHeader.gridItemStyle}`}>
        <HeaderCell label={header7ColumnsData.modelsHeader.label} />
      </div>
      {
        //___ "Gniazda"
      }
      <div className={`${header7ColumnsData.mainHeader.gridItemStyle}`}>
        <div className={`${topHeaderCell}`}>
          <p>{header7ColumnsData.mainHeader.label}</p>
        </div>
      </div>
      {
        //___ "Ampers"
      }
      <div className={`${header7ColumnsData.ampers.gridItemStyle}`}>
        <div className={`${grid3fr2fr1frStyle} `}>
          {header7ColumnsData.ampers.labels.map((label, i) => (
            <HeaderCell key={i} label={label} />
          ))}
        </div>
      </div>
      {
        //___ "Poles"
      }
      <div className={`${header7ColumnsData.poles.gridItemStyle}`}>
        <div className={`${header7ColumnsData.poles.gridStyle} `}>
          <div className={`${grid3colsStyle}`}>
            {header7ColumnsData.poles.labels16A.map((label, i) => (
              <HeaderCell key={i} label={label} />
            ))}
          </div>
          <div className={`${grid2colsStyle}`}>
            {header7ColumnsData.poles.labels32A.map((label, i) => (
              <HeaderCell key={i} label={label} />
            ))}
          </div>
          <div className={`${grid1colsStyle}`}>
            {header7ColumnsData.poles.labels63A.map((label, i) => (
              <HeaderCell key={i} label={label} />
            ))}
          </div>
        </div>
      </div>
      {
        //___ "Vat" / "Sockets"
      }
      <div className={`${header7ColumnsData.sockets.gridItemStyle}`}>
        <div className={`${grid3fr2fr1frStyle} `}>
          <div className={`${grid3colsStyle}`}>
            {header7ColumnsData.sockets.labels16A.map((label, i) => (
              <div key={i} className="flex flex-col">
                <HeaderCell key={i} label={label} heightFull={false} />
                <div className="fc w-full h-full">
                  {i !== 2 ? (
                    <SocketsHolder
                      index={i + 1}
                      mainContainerStyle=" fc relative w-[80%]"
                      clockPositionStyle={
                        'absolute bottom-0 w-[14%] h-[40%] bg-red-700 rounded-lg'
                      }
                      socketStyle={'bg-red-700'}
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
              </div>
            ))}
          </div>
          <div className={`${grid2colsStyle}`}>
            {header7ColumnsData.sockets.labels32A.map((label, i) => (
              // <Cell key={i} label={label} />
              <div key={i} className="flex flex-col">
                <HeaderCell key={i} label={label} />
                <div className="fc w-full h-full">
                  <SocketsHolder
                    index={i + 1}
                    mainContainerStyle=" fc relative w-[80%]"
                    clockPositionStyle={
                      'absolute bottom-0 w-[14%] h-[40%] bg-red-700 rounded-lg'
                    }
                    socketStyle={'bg-red-700'}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={`${grid1colsStyle}`}>
            {header7ColumnsData.sockets.labels63A.map((label, i) => (
              <div key={i} className="flex flex-col ">
                <HeaderCell key={i} label={label} />
                <div className="fc w-full h-full">
                  <SocketsHolder
                    index={i + 2}
                    mainContainerStyle=" fc relative w-[80%] "
                    clockPositionStyle={
                      'absolute bottom-0 w-[14%] h-[40%] bg-red-700 rounded-lg'
                    }
                    socketStyle={'bg-red-700'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
    // </div>
  );
};

export default Header7Cols;
