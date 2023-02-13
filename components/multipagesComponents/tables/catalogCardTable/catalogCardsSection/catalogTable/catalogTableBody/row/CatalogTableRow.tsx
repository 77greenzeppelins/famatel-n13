import { motion } from 'framer-motion';
import React from 'react';
import { bodyStylesSwitcher } from '../../handlers/bodyStylesSwitcher';

const CatalogTableRow: React.FunctionComponent<{
  rowData: string[] | (string | undefined)[];
  vatColors?: string[];
  vatTintColors?: string[];
  bodyType: number;
}> = ({ rowData, vatColors, vatTintColors, bodyType }) => {
  return (
    <>
      {rowData.map((label, index) => (
        <motion.div
          className={`relative fc py-2 ${
            index < 2 ? 'border-r-[2px] border-dark' : 'border-r-[0px]'
          } ${index > 2 ? 'border-l-[2px] border-dark' : 'border-l-[0px]'}`}
          key={index}
        >
          <motion.div
            whileHover={
              index > 1 && vatTintColors
                ? // ? { opacity: 0.5, transition: { duration: 0.4 } }
                  // : { opacity: 1 }
                  {
                    backgroundColor: vatTintColors && vatTintColors[index],
                    transition: { duration: 0.4 },
                  }
                : { opacity: 1 }
            }
            className={`absolute inset-0 ${vatColors && vatColors[index]} `}
            //___hover:${vatTintColors && vatTintColors[4]}
            //__hover:opacity-${vatTintColors[index]}
            //___group-hover:opacity-50 //___ bodyStylesSwitcher(bodyType)?.vatColors[index]
          />
          <p
            className={`relative p-small text-center pointer-events-none ${
              bodyStylesSwitcher(bodyType, index)?.vatLabel
            } `}
          >
            {label}
            {/* {index} */}
          </p>
        </motion.div>
      ))}
    </>
  );
};

export default CatalogTableRow;
