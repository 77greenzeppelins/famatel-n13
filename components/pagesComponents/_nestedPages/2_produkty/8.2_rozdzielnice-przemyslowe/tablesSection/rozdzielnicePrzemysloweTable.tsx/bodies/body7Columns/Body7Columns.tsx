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
/**BasicData**/
import { corpoColors } from '../../../../../../../../../data/_data';

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
  /*
  Framer Motion Section
  */
  const variants = {
    initial: { backgroundColor: corpoColors.greyShade1 },
    hoverd: { backgroundColor: corpoColors.orange },
  };

  /*
  JSX
  */
  return (
    <>
      {dataLines?.map((dataLine, index) => (
        <React.Fragment key={index}>
          {/**_______________rowSideHeader*___________________________*/}
          <motion.div
            onHoverStart={() => setCurrentLineIndex(index)}
            onHoverEnd={() => setCurrentLineIndex(77)}
          >
            <div className="relative px-2 py-2">
              <motion.div
                className={`${'absolute inset-0'}`}
                animate={currentLineIndex === index ? 'hoverd' : 'initial'}
                variants={variants}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
              <p
                className={'p-small text-light relative fc h-full disable-soft'}
              >
                {dataLine.model}
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
                    bodyLabelStyle={
                      'p-small text-dark relative fc h-full disable-soft'
                    }
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
                    bodyLabelStyle={
                      'p-small text-dark relative fc h-full disable-soft'
                    }
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
                    bodyLabelStyle={
                      'p-small text-dark relative fc h-full disable-soft'
                    }
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
