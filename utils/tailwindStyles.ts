//___styles for tables Text
//___used in layout that changes at xxl / 1536px
const tableTextS =
  'text-[0.625rem] lg:text-[0.75rem] xxl:text-[0.625rem] xxxl:text-[0.75rem] tracking-[0.125rem] xxl:tracking-[1.25px] xxxl:tracking-[0.125rem] word-spacing-01 xxl:word-spacing-0125 break-all';
const tableTextM =
  'text-[0.75rem] xs:text-[0.825rem] xxl:text-[0.75rem] xxxl:text-[0.825rem] tracking-[1px] word-spacing-01 lg:word-spacing-0125 break-all'; //___tracking-[0.125rem]
const tableTextL =
  'text-[0.75rem] xs:text-[1rem] lg:text-[0.75rem] xxxl:text-[1rem] tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025 break-all';

//___styles for tables Text
//___used in layout that changes at xxl / 1536px
const tableTextS_Lg =
  'text-[0.625rem] xl:text-[0.75rem] xxxl:text-[0.75rem] tracking-[0.125rem] xxl:tracking-[1.25px] xxxl:tracking-[0.125rem] word-spacing-01 xxl:word-spacing-0125 break-all';
const tableTextM_Lg =
  'text-[0.75rem] xs:text-[0.825rem] lg:text-[0.75rem] xxl:text-[0.825rem] tracking-[1px] word-spacing-01 lg:word-spacing-0125 break-all'; //___tracking-[0.125rem]
const tableTextL_Lg =
  'text-[0.75rem] xs:text-[1rem] lg:text-[0.75rem] xxl:text-[1rem] tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025 break-all';

//___table's universal layout styles
const vertGap = 'divide-x-[2px] divide-dark';
const horizGap = 'divide-y-[2px] divide-dark';
const horizGapL = 'divide-y-[4px] divide-dark';
const topHeaderCell =
  'fc bg-greyShade2 py-4 px-[1px] text-light text-center p-medium select-none';
const sideHeaderCell = `flex items-center px-2 py-2 bg-greyShade2 text-light text-center ${tableTextM} group-hover:bg-corpo delay-100 ease-in duration-300 select-none`;
const sideHeaderCellCenter = `fc items-center px-2 py-2 bg-greyShade2 text-light text-center ${tableTextM} group-hover:bg-corpo delay-100 ease-in duration-300 select-none`;
const bodyCell = `fc py-2 px-[1px] bg-greyTint2 text-dark text-center ${tableTextM} group-hover:bg-light delay-100 ease-in duration-300 select-none`;
//___styles for vatTables
const blueHeaderStyle = `fc bg-vB py-2 px-[1px] text-light text-center ${tableTextL} select-none`;
const blueCellStyle = `fc bg-vB py-2 px-[1px] text-light text-center ${tableTextM} hover:bg-vtB delay-100 ease-in duration-300 select-none`;

const productPagesSectionContentLayout =
  'flex flex-col-reverse gap-y-12 lg:flex-row lg:gap-y-0 lg:gap-x-10';
//___used in <UnderlinedTable>
const undelinedTableTextStyle =
  'p-small text-grey group-hover:text-light ease-in duration-300 disable-soft';
//___"a" means "autonomical" i.e. has its own border; no border in gridedContainer
//___used in layout that changes at xxl / 1536px
const aTopHeaderCell = `fc bg-greyShade2 py-4 px-[1px] border-x-[1px] border-dark text-light text-center ${tableTextL} break-all select-none `;
const aSideHeaderCell = `flex items-center border-x-[1px] border-dark px-2 py-2 bg-greyShade2 text-light text-center ${tableTextM} group-hover:bg-corpo delay-100 ease-in duration-300 select-none`;
const aSideHeaderCellCenter = `fc items-center px-2 py-2 border-x-[1px] border-dark bg-greyShade2 text-light text-center ${tableTextM} group-hover:bg-corpo delay-100 ease-in duration-300 select-none`;
const aBodyCell = `fc py-2 px-[1px] bg-greyTint2 border-x-[1px] border-dark text-dark text-center ${tableTextM} group-hover:bg-light delay-100 ease-in duration-300 select-none`;
//___styles for vatTables
const aBlueHeaderStyle = `fc bg-vB py-2 px-[1px] border-x-[1px] border-dark text-light text-center ${tableTextL} break-all select-none`;
const aBlueCellStyle = `fc bg-vB py-2 px-[1px] border-x-[1px] border-dark text-light text-center ${tableTextM} hover:bg-vtB delay-100 ease-in duration-300 select-none`;
//___"a" means "autonomical" i.e. has its own border; no border in gridedContainer
//___used in layout that changes at xxl / 1536px
const aTopH_Lg = `fc bg-greyShade2 py-4 px-[1px] border-x-[1px] border-dark text-light text-center ${tableTextL_Lg} break-all select-none `;
const aSideH_Lg = `flex items-center border-x-[1px] border-dark px-2 py-2 bg-greyShade2 text-light text-center ${tableTextM_Lg} group-hover:bg-corpo delay-100 ease-in duration-300 select-none`;
const aSideHCenter_Lg = `fc items-center px-2 py-2 border-x-[1px] border-dark bg-greyShade2 text-light text-center ${tableTextM_Lg} group-hover:bg-corpo delay-100 ease-in duration-300 select-none`;
const aBodyCell_Lg = `fc py-2 px-[1px] bg-greyTint2 border-x-[1px] border-dark text-dark text-center ${tableTextM_Lg} group-hover:bg-light delay-100 ease-in duration-300 select-none`;

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
  //___
  aTopHeaderCell,
  aSideHeaderCell,
  aBlueHeaderStyle,
  aSideHeaderCellCenter,
  aBodyCell,
  aBlueCellStyle,
  //___
  tableTextM_Lg,
  aTopH_Lg,
  aSideH_Lg,
  aSideHCenter_Lg,
  aBodyCell_Lg,
};
