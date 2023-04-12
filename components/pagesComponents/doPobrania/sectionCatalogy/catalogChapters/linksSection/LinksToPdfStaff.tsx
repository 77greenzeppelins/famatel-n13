import React from 'react';
/**Components**/
import DownloadableRow from '../../../__downloadableRow/DownloadableRow';
/**Basic Data**/
import {
  catalogChapters,
  staffLinks,
  buttonsLabels,
} from './linksToPdfStaff_data';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';

/**TS**/
interface Props {
  setStateId: React.Dispatch<React.SetStateAction<string>>;
}

/**-------------------------------------------------------------**/
const LinksToPdfStaff: React.FC<Props> = ({ setStateId }) => {
  /**Handlers**/
  const handleHoverStart = (event: MouseEvent) => {
    const target = event.target as HTMLDivElement; // Cast the event.target property to HTMLDivElement
    setStateId(target.id);
  };
  // const handleHoverEnd = () => {
  //   setStateId('0');
  // };
  /**JSX**/
  return (
    <>
      {catalogChapters.map((name, i) => (
        <motion.div
          id={i.toString()}
          key={i}
          onHoverStart={event => handleHoverStart(event)}
          // onHoverEnd={handleHoverEnd}
        >
          <DownloadableRow
            rowLabel={name}
            rowNumber={i + 1}
            buttonsLabels={buttonsLabels[i]}
            staffToDownload={staffLinks[i]}
          />
        </motion.div>
      ))}
    </>
  );
};

export default LinksToPdfStaff;
