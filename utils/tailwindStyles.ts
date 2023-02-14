const vertGap = 'divide-x-[2px] divide-dark';
const horizGap = 'divide-y-[2px] divide-dark';
const horizGapL = 'divide-y-[4px] divide-dark';
const topHeaderCell =
  'fc bg-greyShade2 py-4 px-[1px] text-light text-center p-medium select-none';
const sideHeaderCell =
  'fc py-2 px-[1px] bg-greyShade2 text-light text-center p-small group-hover:bg-corpo delay-100 ease-in duration-300 select-none';
const bodyCell =
  'fc py-2 px-[1px] bg-greyTint1 text-dark text-center p-small group-hover:bg-light delay-100 ease-in duration-300 select-none';

const blueHeaderStyle =
  'fc bg-vB py-2 px-[1px] text-light text-center p-medium select-none';
const blueCellStyle =
  'fc bg-vB py-2 px-[1px] text-light text-center p-small hover:bg-vtB delay-100 ease-in duration-300 select-none';

const productPagesSectionContentLayout =
  //___"gap-y-12" => gap between image and "tablessection" on mobile
  'flex flex-col-reverse gap-y-12 lg:flex-row lg:gap-y-0 lg:gap-x-10';

export {
  vertGap,
  horizGap,
  horizGapL,
  topHeaderCell,
  sideHeaderCell,
  bodyCell,
  blueHeaderStyle,
  blueCellStyle,
  //___ for <SectionContentLayout> at productLevel
  productPagesSectionContentLayout,
};
