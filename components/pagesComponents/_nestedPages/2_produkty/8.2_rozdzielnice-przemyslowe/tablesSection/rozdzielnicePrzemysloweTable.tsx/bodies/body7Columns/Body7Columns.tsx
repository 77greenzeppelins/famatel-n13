import React, { useEffect, useState } from 'react';
/**Components**/
import InteractiveBodyCell from '../interacticeCell/InteractiveBodyCell';
/*Basic Data*/
import {
  headerLabelStyle,
  headerCellStyle,
  bodyLabelStyle,
  bodyCellStyle,
} from '../../../../../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_2_przemyslowe_techSpec';
/*Framer Motion*/
import { motion } from 'framer-motion';
/*TS*/
// import { IDataLines } from '../../../../../../_rozdzielnice-przemyslowe__TS';
// interface IBodySevenColumns {
//   dataLines: IDataLines[] | undefined;
// }
/*TS*/

/****************************************************************************/
const Body7Columns: React.FunctionComponent<{
  dataLines:
    | {
        model?: string;
        labels16A?: string[];
        labels32A?: string[];
        labels63A?: string[];
      }[]
    | undefined;
}> = ({ dataLines }) => {
  /*
  ...
  */
  const [currentLineIndex, setCurrentLineIndex] = useState(77);

  // useEffect(() => {
  //   console.log('...currentLineIndex', currentLineIndex);
  // }, [currentLineIndex]);

  const variants = {
    initial: { opacity: 0.35 },
    hoverd: { opacity: 0.1 },
  };

  /*
  JSX
  */
  return (
    <>
      {dataLines?.map((dataLine, index) => (
        <React.Fragment key={index}>
          <motion.div
            className="col-end-2"
            onHoverStart={() => setCurrentLineIndex(index)}
            onHoverEnd={() => setCurrentLineIndex(77)}
          >
            <div className="relative py-[0.3rem]">
              <motion.div
                className={`${'absolute inset-0 bg-light'}`}
                animate={currentLineIndex === index ? 'hoverd' : 'initial'}
                variants={variants}
              />
              <p className={`${headerLabelStyle} relative fc h-full`}>
                <span>{dataLine.model}</span>
              </p>
            </div>
          </motion.div>
          <div className="col-span-6 col-start-2">
            <div className="grid grid-cols-[3fr_2fr_1fr] gap-[0.25rem]">
              {
                //___16A
              }
              <div className="grid grid-cols-[1fr_1fr_1fr] gap-[0.125rem]">
                {dataLine.labels16A?.map((label, i) => (
                  <InteractiveBodyCell
                    key={i}
                    label={label}
                    index={index}
                    activeIndex={currentLineIndex}
                    bodyLabelStyle={bodyLabelStyle}
                    setCurrentLineIndex={setCurrentLineIndex}
                  />
                ))}
              </div>
              {
                //___32A
              }
              <div className="grid grid-cols-[1fr_1fr] gap-[0.125rem]">
                {dataLine.labels32A?.map((label, i) => (
                  <InteractiveBodyCell
                    key={i}
                    label={label}
                    index={index}
                    activeIndex={currentLineIndex}
                    bodyLabelStyle={bodyLabelStyle}
                    setCurrentLineIndex={setCurrentLineIndex}
                  />
                ))}
              </div>
              {
                //___63A
              }
              <div className="grid grid-cols-[1fr] gap-[0.125rem]">
                {dataLine.labels63A?.map((label, i) => (
                  <InteractiveBodyCell
                    key={i}
                    label={label}
                    index={index}
                    activeIndex={currentLineIndex}
                    bodyLabelStyle={bodyLabelStyle}
                    setCurrentLineIndex={setCurrentLineIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}{' '}
    </>
  );
};

export default Body7Columns;
