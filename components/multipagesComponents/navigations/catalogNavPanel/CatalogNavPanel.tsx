import React, { useEffect, useState } from 'react';
/**Components**/
import SmallPseudoHeader from '../../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import LinkWithTextAndIcon from '../../../_basicComponents/links/linkWithTexAndIcon/LinkWithTextAndIcon';
import H1Component from '../../../_basicComponents/componentH1/H1Component';
/**TS**/
import { IF_CatalogNavPanel } from '../../../../utils/TS/typeScriptStaff';
/**Basic Data*/
import { corpoColors } from '../../../../data/_data';

/**HardCoded Staff*/
const headerTextStyle =
  'text-grey text-[0.825rem] xxxl:text-[1rem] tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025 flex items-center h-full group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]';
const textStyle = `text-[0.825rem] lg:text-[1.25rem] leading-1 tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025 flex items-center h-full group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]`;
const customTextstyle =
  'text-light text-left text-[1.5rem] lg:text-[2rem] xxl:text-[2.25] leading-1 tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 flex items-center h-full group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]';

const CatalogNavPanel: React.FunctionComponent<IF_CatalogNavPanel> = ({
  linkHeaders,
  linkNames,
  linkUrls,
  //__
  bottomName,
  bottomHeader,
  bottomUrl,
  //__
  optionalHeader,
}) => {
  /**Handlers to conditionally create links**/
  const createLinks = () => {
    return linkNames && linkHeaders && linkUrls
      ? linkNames.map((name, index) => (
          <div key={index} className="flex flex-col ">
            <SmallPseudoHeader
              text={linkHeaders[index]}
              textStyle={headerTextStyle}
              hasBox={false}
              hasVerticalOrnament={false}
            />
            {name && (
              <>
                <div style={{ width: 'fit-content' }}>
                  <LinkWithTextAndIcon
                    linkHref={linkUrls[index]}
                    controlsSet={{ background: corpoColors.dark }}
                    aStyle="flex items-center gap-4 h-full ease-in duration-[0.4s] delay-[0.1s] bg-transparent focus:outline-none group pr-[10px]"
                    pLabel={name}
                    //___for <SmallPseudoHeader>
                    hasBox={false}
                    hasVerticalOrnament={false}
                    pStyle={`text-grey text-left ${textStyle}`}
                  />
                </div>
              </>
            )}
          </div>
        ))
      : null;
  };

  /**Handlers to conditionally create bottomLevel**/
  const createBottomLevel = () => {
    return bottomName ? (
      <div>
        <SmallPseudoHeader
          text={bottomHeader}
          textStyle={headerTextStyle}
          hasBox={false}
          hasVerticalOrnament={false}
        />
        <div className="flex ">
          {bottomUrl ? (
            <>
              <div style={{ width: 'fit-content' }}>
                <LinkWithTextAndIcon
                  linkHref={bottomUrl}
                  controlsSet={{ background: corpoColors.dark }}
                  aStyle="flex items-center gap-4 h-full ease-in duration-[0.4s] delay-[0.1s] bg-transparent focus:outline-none group pr-[10px]"
                  pLabel={bottomName}
                  //___for <SmallPseudoHeader>
                  hasBox={false}
                  hasVerticalOrnament={false}
                  pStyle={`text-grey text-left ${textStyle}`}
                />
              </div>
            </>
          ) : (
            <H1Component
              text={bottomName}
              customeStyle={customTextstyle}
              variantH="custome"
            />
          )}
          <div className="h-6" />
        </div>
      </div>
    ) : null;
  };

  /**Handlers to conditionally create optionalHeader**/
  const createOptionalHeader = () => {
    return optionalHeader ? (
      <div className="flex gap-x-6 items-center">
        <SmallPseudoHeader
          text={optionalHeader}
          textStyle={headerTextStyle}
          hasBox={false}
          hasVerticalOrnament={false}
        />
        <div className="w-[30%] h-[0.5px] bg-greyShade1"> </div>
      </div>
    ) : null;
  };

  /**JSX**/
  return (
    <div className="flex ">
      <div className="w-[20px]">
        <SmallPseudoHeader
          text="Katalog"
          hasBox={false}
          hasVerticalOrnament={false}
          containerStyle="flex disable-soft"
          inlineTextStyle={{ writingMode: 'vertical-rl' }}
        />
      </div>
      <div className="w-[20px]  border-l border-greyShade1 "></div>
      <nav className="flex w-full flex-col gap-y-6 ">
        {createLinks()}
        {createBottomLevel()}
        {createOptionalHeader()}
      </nav>
    </div>
  );
};

export default CatalogNavPanel;
