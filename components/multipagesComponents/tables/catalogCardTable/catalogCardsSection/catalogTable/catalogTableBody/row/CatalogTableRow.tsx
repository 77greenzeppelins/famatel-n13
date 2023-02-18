import { motion } from 'framer-motion';
import React from 'react';
import { bodyStylesSwitcher } from '../../handlers/bodyStylesSwitcher';
/**Tailwind Styles*/
import { tableTextM } from '../../../../../../../../utils/tailwindStyles';

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
          className="relative fc py-2 border-x-[1px] border-dark"
          key={index}
        >
          <motion.div
            whileHover={
              index > 1 && vatTintColors
                ? {
                    backgroundColor: vatTintColors && vatTintColors[index],
                    transition: { duration: 0.4 },
                  }
                : { opacity: 1 }
            }
            className={`absolute inset-0 ${vatColors && vatColors[index]} `}
          />
          <p
            className={`relative ${tableTextM} text-center pointer-events-none ${
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
