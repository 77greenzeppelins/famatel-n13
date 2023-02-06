// import React from 'react';
// /** */
// import { headerStylesSwitcher } from '../handlers/headerStylesSwitcher';
// /***/
// const fakeLabels = ['Bieguny', 'Dodz.P'];

// /**---------------------------------------------------**/
// const CatalogTableHeader: React.FunctionComponent<{
//   headerTopData: string[] | string[][];
//   headerBottomData: string[] | string[][];
//   headerType: number;
// }> = ({ headerTopData, headerType, headerBottomData }) => {
//   /**...WTF**/
//   // console.log('headerTopData', headerTopData);
//   /**JSX**/
//   return (
//     <div className="flex flex-col divide-y-4 divide-dark">
//       <div className={headerStylesSwitcher(headerType)?.containerStyle}>
//         {headerTopData.map((lab, index) => {
//           if (index === 0 && Array.isArray(lab)) {
//             return (
//               <div
//                 className={headerStylesSwitcher(headerType)?.topCell_1}
//                 key={index}
//               >
//                 {lab.map((text, index) => (
//                   <div key={index}>
//                     <p className="p-v-small text-grey">{text}</p>
//                   </div>
//                 ))}
//               </div>
//             );
//           }
//         })}

//         {headerBottomData.map((lab, index) => {
//           if (index !== 0 && Array.isArray(lab)) {
//             return (
//               <div className=" flex flex-col" key={index}>
//                 <div className="fc h-[50%]">
//                   <p className="p-v-small text-grey">{lab[0]}</p>
//                   {/* <p className="p-v-small text-grey">{fakeLabels[0]}</p> */}
//                 </div>
//                 <div className="fc h-[50%]">
//                   <p className="p-v-small  text-grey">{lab[1]}</p>
//                   {/* <p className="p-v-small text-grey">{fakeLabels[1]}</p> */}
//                 </div>
//               </div>
//             );
//           }
//         })}
//       </div>
//       <div className={headerStylesSwitcher(headerType)?.containerStyle}>
//         {headerBottomData.map((lab, index) => {
//           if (index === 0 && Array.isArray(lab)) {
//             return (
//               <div
//                 className={
//                   headerStylesSwitcher(headerType)?.bottomCell_1_container
//                 }
//                 key={index}
//               >
//                 {lab.map((text, index) => (
//                   <div key={index} className="fc bg-greyShade1 py-2">
//                     <div className="fc w-[95%] h-full">
//                       <p className="p-v-small text-center text-light break-all">
//                         {text}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             );
//           }
//         })}

//         {headerTopData.map((lab, index) => {
//           if (index !== 0 && Array.isArray(lab)) {
//             return (
//               <div
//                 className={`flex flex-col ${
//                   headerStylesSwitcher(headerType)?.vatCollors[index - 1]
//                 }`}
//                 //___headerColors[index - 1]
//                 key={index}
//               >
//                 <div className="fc h-[60%] ">
//                   <p className="p-medium text-center text-light">{lab[0]}</p>
//                 </div>
//                 <div className="fc h-[40%]">
//                   <p className="p-small text-center text-light">{lab[1]}</p>
//                 </div>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// };

// export default CatalogTableHeader;

import React from 'react';
/** */
import { headerStylesSwitcher } from '../handlers/headerStylesSwitcher';

/**---------------------------------------------------**/
const CatalogTableHeader: React.FunctionComponent<{
  headerTopData: string[] | string[][];
  headerBottomData: string[] | string[][];
  headerType: number;
}> = ({ headerTopData, headerType, headerBottomData }) => {
  /**...WTF**/
  // console.log('headerTopData', headerTopData);
  /**JSX**/
  return (
    <div className="flex flex-col divide-y-4 divide-dark">
      <div className={headerStylesSwitcher(headerType)?.containerStyle}>
        {headerTopData.map((lab, index) =>
          index === 0 ? (
            <div
              className={headerStylesSwitcher(headerType)?.topCell_1}
              key={index}
            >
              {Array.isArray(lab) &&
                lab.map((text, i) => (
                  <div key={i}>
                    <p className="p-v-small text-grey">{text}</p>
                  </div>
                ))}
            </div>
          ) : (
            <div
              className={`fc flex-col ${
                headerStylesSwitcher(headerType)?.vatCollors[index - 1]
              }`}
              key={index}
            >
              {Array.isArray(lab) &&
                lab.map((text, i) => (
                  <div key={i} className="fc ">
                    <p
                      className={`text-center ${
                        lab.length - 1 === i ? 'p-small' : 'p-v-medium'
                      } ${headerStylesSwitcher(headerType, index)?.vatLabel}`}
                    >
                      {text}
                    </p>
                  </div>
                ))}
            </div>
          )
        )}
      </div>
      <div className={headerStylesSwitcher(headerType)?.containerStyle}>
        {headerBottomData.map((lab, index) => {
          if (index === 0 && Array.isArray(lab)) {
            return (
              <div
                className={
                  headerStylesSwitcher(headerType)?.bottomCell_1_container
                }
                key={index}
              >
                {lab.map((text, index) => (
                  <div key={index} className="fc bg-greyShade1 py-2">
                    <div className="fc w-[95%] h-full">
                      <p className="p-v-small text-center text-light break-all">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );
          }
          if (index !== 0 && Array.isArray(lab)) {
            return (
              <div className=" fc flex-col" key={index}>
                {lab.map((text, index) => (
                  <div key={index} className="fc h-[50%]">
                    <p className="p-v-small text-grey"> {text}</p>
                  </div>
                ))}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CatalogTableHeader;

/*
{headerTopData.map((lab, index) => (
index === 0 && Array.isArray(lab) ? (
              <div
                className={headerStylesSwitcher(headerType)?.topCell_1}
                key={index}
              >
                {lab.map((text, index) => (
                  <div key={index}>
                    <p className="p-v-small text-grey">{text}</p>
                  </div>
                ))}
              </div>
            ) : 
            (
              <div
                className={`fc flex-col ${
                  headerStylesSwitcher(headerType)?.vatCollors[index - 1]
                }`}
                key={index}
              >
                {lab.map((text, index) => (
                  <div key={index} className="fc ">
                    <p
                      className={`text-center text-light ${
                        lab.length - 1 === index ? 'p-small' : 'p-v-medium'
                      }`}
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            )
            )
                    }
*/
