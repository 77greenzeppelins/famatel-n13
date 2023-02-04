import { motion } from 'framer-motion';
import React from 'react';

const CatalogTableRow: React.FunctionComponent<{
  rowData: string[] | (string | undefined)[];
  vatColors: string[] | undefined;
}> = ({ rowData, vatColors }) => {
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
            // whileHover={{ opacity: 0.9 }}
            whileHover={
              index > 1
                ? { opacity: 0.5, transition: { duration: 0.3 } }
                : { opacity: 1 }
            }
            className={`absolute inset-0 ${vatColors && vatColors[index]} `} //___group-hover:opacity-50
          />
          <p className=" relative p-small text-center text-light pointer-events-none">
            {label}
          </p>
        </motion.div>
      ))}
    </>
  );
};

export default CatalogTableRow;
