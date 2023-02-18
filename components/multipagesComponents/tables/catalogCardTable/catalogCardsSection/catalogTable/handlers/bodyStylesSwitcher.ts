import { corpoColors } from '../../../../../../../data/_data';
const {
  grey,
  vModYellow,
  vModBlue,
  vModRed,
  vModDark,
  vModViolet,
  vModGreen,
  vModLight,
} = corpoColors;

const amperStyle =
  'fc col-start-1 col-end-2 row-span-full bg-greyShade1 border-t-2 border-dark border-x-[1px]';

const bodyStylesSwitcher = (bodyType: number, index?: number) => {
  switch (bodyType) {
    case 1:
      return {
        containerStyle:
          //___concept: ampers + rest of table...
          'grid grid-cols-[1fr_10fr] grid-rows-[1fr_1fr_1fr] group divide-y-2 divide-dark ',
        //___concept: all cells but ampers
        rowContainerStyle:
          'col-start-2 grid grid-cols-[1fr_1fr_2fr_2fr_2fr_2fr] ',
        vatColors: ['bg-grey', 'bg-grey', 'bg-vY', 'bg-vB', 'bg-vR', 'bg-vD'],
        vatTintColors: [grey, grey, vModYellow, vModBlue, vModRed, vModDark],
        vatLabel: 'text-light',
        amperStyle: amperStyle,
      };

    case 2:
      return {
        containerStyle:
          'grid grid-cols-[1fr_8fr] grid-rows-[1fr_1fr_1fr] group divide-y-2 divide-dark',
        rowContainerStyle: 'col-start-2 grid grid-cols-[1fr_1fr_3fr_3fr] ',
        vatColors: ['bg-grey', 'bg-grey', 'bg-vB', 'bg-vR'],
        vatTintColors: [grey, grey, vModBlue, vModRed],
        vatLabel: 'text-light',
        amperStyle: amperStyle,
      };
    case 3:
      return {
        containerStyle:
          'grid grid-cols-[1fr_5fr] divide-y-2 divide-dark group ',
        rowContainerStyle: 'col-start-2 grid grid-cols-[1fr_1fr_3fr] ',
        vatColors: ['bg-grey', 'bg-grey', 'bg-vR'],
        vatTintColors: [grey, grey, vModRed],
        vatLabel: 'text-light',
        amperStyle: amperStyle,
      };
    case 5:
      return {
        containerStyle:
          //___concept: ampers + rest of table...
          'grid grid-cols-[1fr_10fr] grid-rows-[1fr_1fr] group divide-y-2 divide-dark ',
        //___concept: all cells but ampers
        rowContainerStyle:
          'col-start-2 grid grid-cols-[1fr_1fr_2fr_2fr_2fr_2fr]',
        vatColors: [
          'bg-grey',
          'bg-grey',
          'bg-vV',
          'bg-light',
          'bg-vG',
          'bg-light',
        ],
        vatTintColors: [
          grey,
          grey,
          vModViolet,
          vModLight,
          vModGreen,
          vModLight,
        ],
        vatLabel:
          index && index > 1
            ? index && index % 2
              ? 'text-dark'
              : 'text-light'
            : 'text-light',
        amperStyle: amperStyle,
      };
    case 6:
      return {
        containerStyle:
          //___concept: ampers + rest of table...
          'grid grid-cols-[1fr_8fr] grid-rows-[1fr_1fr_1fr] group divide-y-2 divide-dark ',
        //___concept: all cells but ampers
        rowContainerStyle: 'col-start-2 grid grid-cols-[1fr_1fr_2fr_2fr_2fr]',
        vatColors: ['bg-grey', 'bg-grey', 'bg-vY', 'bg-vB', 'bg-vR'],
        vatTintColors: [grey, grey, vModYellow, vModBlue, vModRed],
        vatLabel: 'text-light',
        amperStyle: amperStyle,
      };
    //___used in adapteryPrzemyslowe; similar to case_1 but has grid with 2 row
    case 7:
      return {
        containerStyle:
          //___concept: ampers + rest of table...
          'grid grid-cols-[1fr_10fr] grid-rows-[1fr_1fr] group divide-y-2 divide-dark ',
        //___concept: all cells but ampers
        rowContainerStyle:
          'col-start-2 grid grid-cols-[1fr_1fr_2fr_2fr_2fr_2fr]',
        vatColors: ['bg-grey', 'bg-grey', 'bg-vY', 'bg-vB', 'bg-vR', 'bg-vD'],
        vatTintColors: [grey, grey, vModYellow, vModBlue, vModRed, vModDark],
        vatLabel: 'text-light',
        amperStyle: amperStyle,
      };
    //___used in adapteryPrzemyslowe / poczwórne adaptery...=> similar to case_1 / 6 but has grid with 1 row
    case 8:
      return {
        containerStyle:
          //___concept: ampers + rest of table...
          'grid grid-cols-[1fr_10fr] grid-rows-[1fr] group divide-y-2 divide-dark ',
        //___concept: all cells but ampers
        rowContainerStyle:
          'col-start-2 grid grid-cols-[1fr_1fr_2fr_2fr_2fr_2fr]',
        vatColors: ['bg-grey', 'bg-grey', 'bg-vY', 'bg-vB', 'bg-vR', 'bg-vD'],
        vatTintColors: [grey, grey, vModYellow, vModBlue, vModRed, vModDark],
        vatLabel: 'text-light',
        amperStyle: amperStyle,
      };
  }
};

export { bodyStylesSwitcher };
