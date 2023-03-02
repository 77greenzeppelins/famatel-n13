import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
/**Framer Motion Staff*/
import { AnimatePresence } from 'framer-motion';
import XMarkIcon from '../../../../SVG/icons/XmarkIcon';
import SVG_14307_P28 from '../../../../SVG/techDrawings/1_wtyczki-gniazda/SVG_14307_P28';
import CloseButton from './closeButton/CloseButton';

/**-------------------------------------------------------**/
const ProductDescription: React.FunctionComponent<{
  isProductDescriptionOpen: boolean;
  productDescriptionOpener: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isProductDescriptionOpen, productDescriptionOpener }) => {
  /**JSX**/
  return (
    <AnimatePresence>
      {isProductDescriptionOpen && (
        <div
          className="absolute inset-0 px-[2%] xxs:px-[6%] md:px-[60px] xl:px-0 xl:pr-[80px] xxl:pr-[100px] bg-dark xl:pt-[70px]"
          //___mix of inner-pr-md-xl-xxl & inner-px-md-xl-xxl
        >
          <div className="relative flex justify-center items-center flex-col md:flex-row md:justify-end xl:flex-col xl:items-start gap-y-2 w-full h-full bg-vB">
            <div className="absolute top-0 right-0 fc w-6 h-6 z-[50] xl:relative xl:flex xl:justify-end xl:w-full">
              {' '}
              {/* <XMarkIcon containerStyle="origin-center w-6 h-6" /> */}
              <CloseButton
                productDescriptionOpener={productDescriptionOpener}
              />
            </div>
            <div className=" flex flex-col justify-center items-start gap-y-8 w-full bg-vR">
              <div>
                <SmallPseudoHeader
                  text={'Kategoria'}
                  hasBox={true}
                  hasVerticalOrnament={false}
                />
                <SmallPseudoHeader
                  text={'Przemysłowe wtyczki i gniazda'}
                  hasBox={true}
                  hasVerticalOrnament={false}
                  boxStyle="h-[10px] md:h-[14px] aspect-square bg-transparent"
                  textStyle="xxs:text-[1.5rem] text-light"
                />
              </div>
              <div>
                <SmallPseudoHeader
                  text={'Podkategoria'}
                  hasBox={true}
                  hasVerticalOrnament={false}
                />
                <SmallPseudoHeader
                  text={'Przenośne'}
                  hasBox={true}
                  hasVerticalOrnament={false}
                  boxStyle="h-[10px] md:h-[14px] aspect-square bg-transparent"
                  textStyle="xxs:text-[1.5rem] text-light"
                />
              </div>
              <div>
                <SmallPseudoHeader
                  text={'Model'}
                  hasBox={true}
                  hasVerticalOrnament={false}
                />
                <SmallPseudoHeader
                  text={'14307'}
                  hasBox={true}
                  hasVerticalOrnament={false}
                  boxStyle="h-[10px] md:h-[14px] aspect-square bg-transparent"
                  textStyle="xxs:text-[1.5rem] text-light"
                />
              </div>
            </div>
            <div className="bg-dark w-full ">
              <SVG_14307_P28 />
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductDescription;
