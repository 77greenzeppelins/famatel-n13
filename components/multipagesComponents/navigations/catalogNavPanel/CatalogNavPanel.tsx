import React from 'react';
/**Components**/
import SmallPseudoHeader from '../../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import LinkWithTextAndIcon from '../../../_basicComponents/links/linkWithTexAndIcon/LinkWithTextAndIcon';
import H1Component from '../../../_basicComponents/componentH1/H1Component';
// import H1AnimatedPresence from '../../../_basicComponents/componentH1/H1AnimatedPresence';
/**TS**/
import { IF_CatalogNavPanel } from '../../../../utils/TS/typeScriptStaff';
/**Basic Data*/
import { corpoColors } from '../../../../data/_data';
import ArrowLongRightIcon from '../../../SVG/icons/ArrowLongRightIcon';

/**HardCoded Staff*/
const textStyle = `text-[0.825rem] lg:text-[1.25rem] leading-1 tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 flex items-center h-full group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]`;

const CatalogNavPanel: React.FunctionComponent<IF_CatalogNavPanel> = ({
  labels,
  namesLevels,
  urlsLevels,
  //__
  lastLevelName,
  lastLevelLab,
}) => {
  /**JSX**/
  return (
    <div className="flex">
      <div className="w-[20px]">
        <SmallPseudoHeader
          text="Katalog"
          hasBox={false}
          hasVerticalOrnament={false}
          containerStyle="flex disable-soft"
          inlineTextStyle={{ writingMode: 'vertical-rl' }}
        />
      </div>
      <div className="w-[20px] border-l border-greyShade1"></div>
      <div className="flex flex-col gap-y-6 ">
        {namesLevels.map((name, index) => (
          <div key={index} className="flex flex-col ">
            <SmallPseudoHeader
              text={labels[index]}
              hasBox={false}
              hasVerticalOrnament={false}
            />
            {name && (
              <>
                <div
                  //  className="pl-[26px] "
                  style={{ width: 'fit-content' }}
                >
                  <LinkWithTextAndIcon
                    linkHref={urlsLevels[index]}
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
        ))}
        {lastLevelName && (
          <div>
            <SmallPseudoHeader
              text={lastLevelLab}
              hasBox={false}
              hasVerticalOrnament={false}
            />
            <div
              className="flex "
              //  className="pl-[26px]"
            >
              <H1Component
                text={lastLevelName}
                // customeStyle={`text-light text-left ${textStyle}`}
                customeStyle=" text-light text-left text-[1.5rem] lg:text-[2rem] xxl:text-[2.25] leading-1 tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 flex items-center h-full group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]"
                variantH="custome"
              />
              <div className="h-6" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogNavPanel;

{
  /* <H1AnimatedPresence
              uniqueKey={0}
              text={lastLevelName}
              customeStyle={`text-light text-left ${textStyle}`}
              variantH="custome"
            /> */
}

{
  /* <Link href={urlsLevels[index]} scroll={false}>
                  <div className="flex items-center gap-x-2 md:gap-x-4 group">
                    <p className="p-small text-grey text-left group-hover:text-light ease-in duration-300">
                      {name}
                    </p>
                    <div className="fc h-[16px] w-[16px]">
                      <LinkWithArrowIcon containerStyle="fc h-[16px] w-[16px] stroke-grey group-hover:stroke-corpo ease-in duration-300 origin-center" />
                    </div>
                  </div>
                </Link>{' '} */
}
