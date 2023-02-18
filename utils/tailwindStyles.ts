const vertGap = 'divide-x-[2px] divide-dark';
const horizGap = 'divide-y-[2px] divide-dark';
const horizGapL = 'divide-y-[4px] divide-dark';
const topHeaderCell =
  'fc bg-greyShade2 py-4 px-[1px] text-light text-center p-medium select-none';
const sideHeaderCell =
  'flex items-center px-2 py-2 bg-greyShade2 text-light text-center p-small group-hover:bg-corpo delay-100 ease-in duration-300 select-none';
const sideHeaderCellCenter =
  'fc items-center px-2 py-2 bg-greyShade2 text-light text-center p-small group-hover:bg-corpo delay-100 ease-in duration-300 select-none';
const bodyCell =
  'fc py-2 px-[1px] bg-greyTint2 text-dark text-center p-small group-hover:bg-light delay-100 ease-in duration-300 select-none';
//___styles for vatTables
const blueHeaderStyle =
  'fc bg-vB py-2 px-[1px] text-light text-center p-medium select-none';
const blueCellStyle =
  'fc bg-vB py-2 px-[1px] text-light text-center p-small hover:bg-vtB delay-100 ease-in duration-300 select-none';

const productPagesSectionContentLayout =
  'flex flex-col-reverse gap-y-12 lg:flex-row lg:gap-y-0 lg:gap-x-10';
//___used in <UnderlinedTable>
const undelinedTableTextStyle =
  'p-small text-grey group-hover:text-light ease-in duration-300 disable-soft';
//___styles for tables Text
const tableTextS =
  'text-[0.625rem] lg:text-[0.75rem] xxl:text-[0.625rem] xxxl:text-[0.75rem] tracking-[0.125rem] xxl:tracking-[1.25px] xxxl:tracking-[0.125rem] word-spacing-01 xxl:word-spacing-0125';
const tableTextM =
  'text-[0.75rem] xs:text-[0.825rem] xxl:text-[0.75rem] xxxl:text-[0.825rem] tracking-[0.125rem] word-spacing-01 lg:word-spacing-0125';
const tableTextL =
  'text-[1rem] xs:text-[1.125rem] tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025';

export {
  vertGap,
  horizGap,
  horizGapL,
  topHeaderCell,
  sideHeaderCell,
  sideHeaderCellCenter,
  bodyCell,
  blueHeaderStyle,
  blueCellStyle,
  //___ for <SectionContentLayout> at productLevel
  productPagesSectionContentLayout,
  //___used in <UmnderlinedTable>
  undelinedTableTextStyle,
  //___
  tableTextS,
  tableTextM,
  tableTextL,
};
