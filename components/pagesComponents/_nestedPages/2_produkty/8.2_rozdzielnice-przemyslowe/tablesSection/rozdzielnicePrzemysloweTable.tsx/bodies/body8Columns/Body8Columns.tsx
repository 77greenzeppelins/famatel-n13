import React, { useState } from 'react';
/*Components*/
// import InteractiveBodyCell from './interacticeCell/InteractiveBodyCell';
/*Basic Data*/
import {
  headerLabelStyle,
  bodyLabelStyle,
  grid4colsStyle,
  grid3colsStyle,
  grid4fr3frStyle,
} from '../../../../../../../../../data/categoriesData/cat_8_obudowy-i-rozdzielnice/subCategories/_subCat_2_przemyslowe_techSpec';

/*Framer Motion Staff*/
import { motion } from 'framer-motion';
import InteractiveBodyCell from '../interacticeCell/InteractiveBodyCell';

/****************************************************************************/
const Body8Columns: React.FunctionComponent<{
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
  Local State
  */
  const [currentLineIndex, setCurrentLineIndex] = useState(77);
  /*
  Framer Motion Section
  */
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
          <div className="col-span-7 col-start-2">
            <div className={`${grid4fr3frStyle}`}>
              {
                //___16A
              }
              <div className={`${grid4colsStyle}`}>
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
              <div className={`${grid3colsStyle}`}>
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
            </div>
          </div>
        </React.Fragment>
      ))}{' '}
    </>
  );
};

export default Body8Columns;
