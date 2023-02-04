const headerStylesSwitcher = (headerType: number) => {
  switch (headerType) {
    case 1:
      return {
        containerStyle:
          'grid grid-cols-[3fr_2fr_2fr_2fr_2fr] divide-x-2 divide-dark group ',
        topCell_1: 'bg-dark flex flex-col p-1 ',
        bottomCell_1_container:
          'grid grid-cols-[1fr_1fr_1fr]  divide-x-2 divide-dark ',
        vatCollors: [
          'bg-[#ceae0e]',
          'bg-[#134976]',
          'bg-[#a01b29]',
          'bg-[#2c3038]',
        ],
      };

    case 2:
      return {
        containerStyle:
          'grid grid-cols-[3fr_3fr_3fr] divide-x-2 divide-dark group gap-y-1',
        topCell_1: 'bg-dark flex flex-col p-1 ',
        bottomCell_1_container:
          'grid grid-cols-[1fr_1fr_1fr]  divide-x-2 divide-dark',

        vatCollors: ['bg-[#134976]', 'bg-[#a01b29]'],
      };
    case 3:
      return {
        containerStyle: 'grid grid-cols-[3fr_3fr]  group gap-y-1',
        topCell_1: 'bg-dark flex flex-col  p-1',
        bottomCell_1_container:
          'grid grid-cols-[1fr_1fr_1fr]  divide-x-2 divide-dark',
        // bottomCell_1_container: 'bg-dark flex',
        vatCollors: ['bg-[#a01b29]'],
      };
  }
};

export { headerStylesSwitcher };
