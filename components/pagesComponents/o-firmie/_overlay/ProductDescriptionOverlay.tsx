import React, { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
/**Components**/
import FullScreenOverlay from '../../../multipagesComponents/overlays/fullScreenOverlay/FullScreenOverlay';
import CardFrame from '../../../multipagesComponents/cards/cardFrame/CardFrame';
import SmallPseudoHeader from '../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import H1AnimatedPresence from '../../../_basicComponents/componentH1/H1AnimatedPresence';
import LinkWithArrowIcon from '../../../SVG/icons/LinkWithArrowIcon';
import OverlayGraphicSection from './graphicSection/OverlayGraphicSection';
/**Basic Data**/
import { catalogStructureData } from '../../../../data/_catalogStructure_data';

/**HardCoded Data*/
const plugSpec = [
  {
    pseudoHeader: 'Kategoria',
    name: catalogStructureData[0].mainCategoryName,
    buttonLabel: 'Zobacz kategorię',
    url: catalogStructureData[0].mainCategoryUrl,
  },
  {
    pseudoHeader: 'Podkategoria',
    name: catalogStructureData[0].subCategoriesNames[0],
    buttonLabel: 'Zobacz podkategorię',
    url: catalogStructureData[0].subCategoriesUrls[0],
  },
  {
    pseudoHeader: 'Model',
    name: '14307',
    buttonLabel: 'Zobacz produkt',
    url: '',
  },
];

/**----------------------------------------------------------------**/
const ProductDescriptionOverlay: React.FunctionComponent<{
  currentIndex: number;
  isPreviewOpen: boolean;
  setIsProductDescriptionOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ currentIndex, isPreviewOpen, setIsProductDescriptionOpen }) => {
  /**JSX**/
  // const mountingCondition = isPreviewOpen && currentIndex === 0;
  // useEffect(() => {
  //   return () => {
  //     setIsProductDescriptionOpen(false);
  //   };
  // }, [currentIndex, setIsProductDescriptionOpen]);
  return (
    <FullScreenOverlay
      isPreviewOpen={isPreviewOpen}
      setIsPreviewOpen={setIsProductDescriptionOpen}
      containerStyle="absolute flex flex-col inset-0"
    >
      <div className="absolute w-[110%] h-[110%] backdrop-blur-md backdrop-brightness-50" />
      <div className="relative flex justify-center md:justify-start w-full h-full">
        <div className="flex flex-col justify-center gap-10 h-full md:inner-pl-md-lg">
          {plugSpec.map(({ pseudoHeader, name, url }, index) => {
            return (
              <div
                key={pseudoHeader}
                className="relative w-[200px] xs:w-[360px] group"
                // style={{ width: 'fit-content' }}
              >
                <Link href={url} scroll={false}>
                  <CardFrame innerContainerStyle="relative flex flex-col w-full h-full rounded-md pointer-events-none bg-dark p-2 lg:p-4">
                    <SmallPseudoHeader
                      text={pseudoHeader}
                      containerStyle="pd-2 md:pb-4"
                    />
                    <H1AnimatedPresence
                      uniqueKey={index}
                      text={name}
                      variantH="custome"
                      customeStyle="text-light text-left text-[0.75rem] xs:text-[1rem] xxl:text-[1.25rem] tracking-widest "
                    />
                  </CardFrame>
                </Link>
                <div className="absolute fc w-[45px] h-[45px] top-0 right-0">
                  <div className=" w-[90%] aspect-square rounded-sm ">
                    {' '}
                    <LinkWithArrowIcon
                      containerStyle="fc h-full aspect-square stroke-greyTint1 group-hover:stroke-corpo group-hover:rotate-[0.9] ease-in duration-300 scale-[0.75] origin-center"
                      strokeWidth={0.75}
                    />{' '}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden md:fc w-full h-full">
          <OverlayGraphicSection categoryIndex={currentIndex} />
        </div>
      </div>
    </FullScreenOverlay>
  );
};

export default ProductDescriptionOverlay;

// setIsPreviewOpen={function (value: React.SetStateAction<boolean>): void {
//   throw new Error('Function not implemented.');
// }}
