import React from 'react';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
/**Handler**/
import { createBackgroundStyle } from '../handlers/rowType_5_createBackgroundStyle';
/**
 * used in "Adaptery przemyslowe"
 * used in "Niskie Napięcia Table"
 */
/**---------------------------**/
const RowType_5 = ({
  rowData,
  backGroundStyleCase,
  rowContainerStyle, //example: "grid grid-cols-[repeat(5,1fr)_20px] "
  bgColors,
  cellContainerStyle,
  labelStyle,
}: {
  rowData: string[];
  backGroundStyleCase: number;
  rowContainerStyle: string;
  bgColors: string[];
  cellContainerStyle?: string;
  labelStyle?: string;
}) => {
  /**JSX**/
  return (
    <div data-component="RowType_5__container" className={rowContainerStyle}>
      {rowData.map((label, index) => (
        <div
          className={
            cellContainerStyle
              ? cellContainerStyle
              : `relative fc py-2 border-x-[1px] border-dark`
          }
          key={index}
        >
          <motion.div
            whileHover={{
              backgroundColor: '#ffffff',
              transition: { duration: 0.4, delay: 0.2 },
            }}
            className={`${createBackgroundStyle({
              backGroundStyleCase,
              bgColors,
              cellIndex: index,
              rowDataLength: rowData.length - 1,
            })} absolute inset-0`}
          />
          <p
            className={
              labelStyle
                ? labelStyle
                : `relative p-small text-center pointer-events-none text-light `
            }
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RowType_5;
