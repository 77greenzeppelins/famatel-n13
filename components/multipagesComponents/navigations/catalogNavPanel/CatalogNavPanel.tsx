import Link from 'next/link';
import React from 'react';
/**Components**/
import SectionContentLayout from '../../../layouts/pagesLayouts/multipagesLayouts/SectionContentLayout';
import SmallPseudoHeader from '../../pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
import LinkWithArrowIcon from '../../../SVG/icons/LinkWithArrowIcon';
import H1AnimatedPresence from '../../../_basicComponents/componentH1/H1AnimatedPresence';
/**TS**/
import { IF_CatalogNavPanel } from '../../../../utils/TS/typeScriptStaff';

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
    <SectionContentLayout>
      {namesLevels.map((name, index) => (
        <div
          key={index}
          className="flex flex-col xs:flex-row  gap-x-2 md:gap-x-4  "
        >
          <SmallPseudoHeader
            text={labels[index]}
            hasBox={true}
            hasVerticalOrnament={false}
          />
          {name && (
            <>
              <p className="header-link-label text-grey disable-soft hidden xs:block">
                /
              </p>
              <div className="pl-8 xs:pl-0">
                <Link href={urlsLevels[index]} scroll={false}>
                  <div className="flex items-center gap-x-2 md:gap-x-4 group">
                    <p className="p-small text-grey text-left group-hover:text-light ease-in duration-300">
                      {name}
                    </p>
                    <div className="fc h-[16px] w-[16px]">
                      <LinkWithArrowIcon containerStyle="fc h-[16px] w-[16px] stroke-grey group-hover:stroke-corpo ease-in duration-300 origin-center" />
                    </div>
                  </div>
                </Link>{' '}
              </div>
            </>
          )}
        </div>
      ))}
      {lastLevelName && (
        <>
          <SmallPseudoHeader
            text={lastLevelLab}
            hasBox={true}
            hasVerticalOrnament={false}
          />
          <H1AnimatedPresence uniqueKey={0} text={lastLevelName} />
        </>
      )}
    </SectionContentLayout>
  );
};

export default CatalogNavPanel;
