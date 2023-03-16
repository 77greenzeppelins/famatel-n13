import React from 'react';
import SmallPseudoHeader from '../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import KatalogMenuHeader from './header/KatalogMenuHeader';
import LinkedLine from './header/linkedLine/LinkedLine';

const KatalogMenu: React.FC<{
  headerLabels: string[];
  lineLabels: string[];
  urls: string[];
}> = ({ headerLabels, lineLabels, urls }) => {
  return (
    <div data-component="KatalogMenu__container" className="flex h-full">
      <div className="w-[20px] border-r-[0.5px] border-grey">
        <div className="flex  w-full h-full">
          <SmallPseudoHeader
            text="Katalog"
            hasBox={false}
            hasVerticalOrnament={false}
            containerStyle="flex disable-soft"
            inlineTextStyle={{ writingMode: 'vertical-rl' }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {headerLabels.map((headerLabel, i) => {
          return (
            <div key={i} className="flex flex-col gap-1">
              <KatalogMenuHeader label={headerLabel} />
              <LinkedLine label={lineLabels[i]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KatalogMenu;

/*
<CatalogNavPanel
                key={index}
                labels={['Kategoria', 'Podkategoria']}
                namesLevels={[categoryName, subCategoryName]}
                urlsLevels={[categoryUrl, subCategoryUrl]}
                lastLevelName={productName}
                lastLevelLab="Produkt"
              />

*/
