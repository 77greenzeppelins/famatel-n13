import React from 'react';
/**Basic Data*/
import { mainCategoriesNames } from '../../../../data/_data';

/**HardCoded Staff*/
const catalogChapters = ['Wstęp', ...mainCategoriesNames];
const bgColors = [
  'bg-[#d6f518]',
  'bg-[#387370]',
  'bg-[#6b959b]',
  'bg-[#c5ad8b]',
  'bg-[#7bd5f6]',
  'bg-[#d6dac2]',
  'bg-[#3d3259]',
  'bg-[#c9daa3]',
  'bg-[#eb8107]',
  'bg-[#315c02]',
  'bg-[#FBBF24]',
];

/**-------------------------------**/
const CatalogLayout = () => {
  return (
    <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-6 xl:gap-10 w-full">
      {catalogChapters.map((name, i) => (
        <div key={i} className={`fc sm aspect-video ${bgColors[i]} `}>
          {name}
        </div>
      ))}
    </div>
  );
};
export default CatalogLayout;

// const bgColors = [
//   'bg-red-100',
//   'bg-red-200',
//   'bg-red-300',
//   'bg-red-400',
//   'bg-red-500',
//   'bg-red-100',
//   'bg-red-200',
//   'bg-red-300',
//   'bg-red-400',
//   'bg-red-500',
// ];
