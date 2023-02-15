import React, { useState } from 'react';
/*Components*/
import InteractiveBodyCell from '../interacticeCell/InteractiveBodyCell';
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
/**BasicData**/
import { corpoColors } from '../../../../../../../../../data/_data';

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
                <span>{dataLine.model}</span>
              </p>
            </div>
          </motion.div>

          {/**_______________rowCell*___________________________*/}
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
              <div className={`${grid3colsStyle}`}>
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
            </div>
          </div>
        </React.Fragment>
      ))}{' '}
    </>
  );
};

export default Body8Columns;
