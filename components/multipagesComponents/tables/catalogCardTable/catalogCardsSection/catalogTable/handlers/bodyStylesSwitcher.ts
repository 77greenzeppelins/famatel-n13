const bodyStylesSwitcher = (bodyType: number, index?: number) => {
  switch (bodyType) {
    case 1:
      return {
        containerStyle:
          //___concept: ampers + rest of table...
          'grid grid-cols-[1fr_10fr] grid-rows-[1fr_1fr_1fr] group divide-y-2 divide-dark ',
        //___concept: all cells but ampers
        rowContainerStyle:
          'col-start-2 grid grid-cols-[1fr_1fr_2fr_2fr_2fr_2fr] border-l-[2px]',
        vatColors: [
          'bg-grey',
          'bg-grey',
          'bg-[#ceae0e]',
          'bg-[#134976]',
          'bg-[#a01b29]',
          'bg-[#2c3038]',
        ],
        vatLabel: 'text-light',
        amperStyle:
          'fc col-start-1 col-end-2 row-span-full bg-greyShade1 border-t-2 border-dark',
      };

    case 2:
      return {
        containerStyle:
          'grid grid-cols-[1fr_8fr] grid-rows-[1fr_1fr_1fr] group divide-y-2 divide-dark',
        rowContainerStyle:
          'col-start-2 grid grid-cols-[1fr_1fr_3fr_3fr] border-l-[2px]',
        vatColors: ['bg-grey', 'bg-grey', 'bg-[#134976]', 'bg-[#a01b29]'],
        vatLabel: 'text-light',
        amperStyle:
          'fc col-start-1 col-end-2 row-span-full bg-greyShade1 border-t-2  border-dark',
      };
    case 3:
      return {
        containerStyle:
          'grid grid-cols-[1fr_5fr] divide-x-2 divide-dark group ',
        rowContainerStyle:
          'col-start-2 grid grid-cols-[1fr_1fr_3fr] border-l-[2px]',
        vatColors: ['bg-grey', 'bg-grey', 'bg-[#a01b29]'],
        vatLabel: 'text-light',
        amperStyle: 'fc col-start-1 col-end-2 row-span-full bg-greyShade1 ',
      };
    case 5:
      return {
        containerStyle:
          //___concept: ampers + rest of table...
          'grid grid-cols-[1fr_10fr] grid-rows-[1fr_1fr] group divide-y-2 divide-dark ',
        //___concept: all cells but ampers
        rowContainerStyle:
          'col-start-2 grid grid-cols-[1fr_1fr_2fr_2fr_2fr_2fr] border-l-[2px]',
        vatColors: [
          'bg-grey',
          'bg-grey',
          'bg-[#434592]', //fiolet
          'bg-[#fff]',
          'bg-[#32754c]',
          'bg-[#fff]',
        ],
        vatLabel:
          index && index > 1
            ? index && index % 2
              ? 'text-dark'
              : 'text-light'
            : 'text-light',
        amperStyle:
          'fc col-start-1 col-end-2 row-span-full bg-greyShade1 border-t-2 border-dark',
      };
  }
};

export { bodyStylesSwitcher };
