const topCell_1 = 'bg-dark flex flex-col p-1 border-x-[1px] border-dark';

const headerStylesSwitcher = (headerType: number, index?: number) => {
  switch (headerType) {
    case 1:
      return {
        containerStyle: 'grid grid-cols-[3fr_2fr_2fr_2fr_2fr] ',
        topCell_1: topCell_1,
        bottomCell_1_container: 'grid grid-cols-[1fr_1fr_1fr]  ',
        vatCollors: ['bg-vY', 'bg-vB', 'bg-vR', 'bg-vD'],
        vatLabel: 'text-light',
      };

    case 2:
      return {
        containerStyle: 'grid grid-cols-[3fr_3fr_3fr]',
        topCell_1: topCell_1,
        bottomCell_1_container: 'grid grid-cols-[1fr_1fr_1fr]',
        vatCollors: ['bg-vB', 'bg-vR'],
        vatLabel: 'text-light',
      };
    //___only one Vat-column
    case 3:
      return {
        containerStyle: 'grid grid-cols-[3fr_3fr]',
        topCell_1: topCell_1,
        bottomCell_1_container: 'grid grid-cols-[1fr_1fr_1fr]',
        vatCollors: ['bg-vR'],
        vatLabel: 'text-light',
      };
    //___wtyczki-gniazda-niskie-napiecia
    case 5:
      return {
        containerStyle: 'grid grid-cols-[3fr_2fr_2fr_2fr_2fr] ',
        topCell_1: topCell_1,
        bottomCell_1_container: 'grid grid-cols-[1fr_1fr_1fr]',
        vatCollors: ['bg-vV', 'bg-light', 'bg-vG', 'bg-light'],
        vatLabel: index && index % 2 ? 'text-light' : 'text-dark',
      };
    //__gniazda-z-blokada-
    case 6:
      return {
        containerStyle: 'grid grid-cols-[3fr_2fr_2fr_2fr]',
        topCell_1: topCell_1,
        bottomCell_1_container: 'grid grid-cols-[1fr_1fr_1fr]',
        vatCollors: ['bg-vY', 'bg-vB', 'bg-vR'],
        vatLabel: 'text-light',
      };
    //__wtyczki-gniazda / estradowe
    // case 7:
    //   return {
    //     containerStyle:
    //       'grid grid-cols-[6fr_4fr] divide-x-2 divide-dark group ',
    //     topCell_1: 'bg-dark',
    //     bottomCell_1_container:
    //       'grid grid-cols-[1fr_1fr_1fr]  divide-x-2 divide-dark ',
    //     vatCollors: ['bg-[#ceae0e]'],
    //     vatLabel: 'text-light',
    //   };
  }
};

export { headerStylesSwitcher };
