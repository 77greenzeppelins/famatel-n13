import { wtyczkiGniazdaPrzenosne_tablesData } from '../../../../data/categoriesData/cat_1_wtyczki-gniazda/subCategories/_subCat_1_przenosne_prodCat';
/**TS**/
interface TestData {
  models: string[];
  url: string;
}

function findUrlByModel(
  model: string,
  testStaticData: TestData[],
  setState: React.Dispatch<React.SetStateAction<string | null>>
) {
  const data = testStaticData.find(item => item.models.includes(model));
  setState(data ? data.url : null);
}
// function getUrlByModel(
//   model: string,
//   testStaticData: TestData[]
// ): string | null {
//   for (const data of testStaticData) {
//     if (data.models.includes(model)) {
//       console.log('getUrlByModel / data.url:', data.url);
//       return data.url;
//     }
//   }
//   return null; // if model is not found in any TestData.models array
// }

/**------------------------------------------------------------------------------**/

function createArrayOfLongerStrings(): { [key: number]: string[] }[] {
  return wtyczkiGniazdaPrzenosne_tablesData.map(item => {
    const result: { [key: number]: string[] } = {};

    item.tablesData.forEach(tableData => {
      tableData.rowsData.forEach(rowData => {
        const filteredRow = rowData.reduce(
          (acc: string[], currentValue: string) => {
            if (currentValue.length > 2) {
              acc.push(currentValue);
            }
            return acc;
          },
          []
        );

        if (filteredRow.length > 0) {
          const key = parseInt(rowData[0]); // use the first value as the key
          result[key] = filteredRow;
        }
      });
    });

    return result;
  });
}

export { findUrlByModel };
