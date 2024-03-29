import React, { useEffect, useState } from 'react';
/**Components**/
import CardFrame from '../../cardsCatalogs/__cardFrame/CardFrame';
import IconsDescription from '../iconsDescription/IconsDescription';
/**Framer Motion Staff**/
import { EventInfo, motion } from 'framer-motion';
/**Basic Data**/
import { svgIconsFromCatalog_data } from '../../../SVG/iconsFromCatalog/_iconsFromCatalog_data';
import { corpoColors } from '../../../../data/_data';

/**-----------------------------------------------------------**/
const BasicIconsManager: React.FunctionComponent<{
  svgIcons: string[];
  labeledIcons?: string[];
  iconContainerStyle?: string;
  isHoverabled?: boolean;
  mainContainerStyle?: string;
}> = ({
  svgIcons,
  labeledIcons,
  iconContainerStyle,
  isHoverabled = true,
  mainContainerStyle,
}) => {
  /*
  Global State
  */
  const [iconState, setIconState] = useState({
    id: '',
  });

  /*
  Hover Handlers
  */
  const onHoverStartHandler = (event: MouseEvent, info: EventInfo) => {
    // console.log('....onHoverStartHandler');
    /*trigger this event only on demand i.e. must be allowed explicitelly*/
    const target = event.target as HTMLElement; //TS requirements
    if (isHoverabled && target.id) {
      setIconState({ id: target.id });
      // console.log('..... onHoverStartHandler / target.id:', target.id);
      // console.log('..... onHoverStartHandler / iconState.id:', iconState.id);
    }
  };

  const onHoverEndHandler = (event: MouseEvent, info: EventInfo) => {
    /*trigger this event only on demand i.e. must be allowed explicitelly*/
    if (isHoverabled) {
      // const target = event.target as HTMLElement; //TS requirements
      setIconState({ id: '' });
      // console.log('..... onHoverEndHandler / id:', iconState.id);
    }
  };

  // useEffect(() => {
  //   console.log('..... onHoverEndHandler / id:', iconState.id);
  // }, [iconState.id]);
  /**JSX**/
  return (
    <div
      data-component="BasicIconsManager__wrapper"
      className={
        mainContainerStyle
          ? mainContainerStyle
          : 'flex flex-col lg:items-center '
      }
      //___lg:flex-row lg:gap-x-10
    >
      <div className="flex gap-4 flex-wrap">
        {svgIconsFromCatalog_data.map(({ id, Icon }, i) => {
          if (svgIcons.includes(id)) {
            return (
              <motion.div
                id={id}
                onHoverStart={onHoverStartHandler}
                onHoverEnd={onHoverEndHandler}
                key={id}
                className={
                  iconContainerStyle
                    ? iconContainerStyle
                    : 'fc w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] group'
                }
              >
                <CardFrame>
                  <div className="w-full h-full p-[2px]">
                    <Icon colorFG={corpoColors.grey} />
                  </div>
                </CardFrame>
              </motion.div>
            );
          }
        })}
        {labeledIcons &&
          labeledIcons.map(id => (
            <motion.div
              id={id}
              onHoverStart={onHoverStartHandler}
              onHoverEnd={onHoverEndHandler}
              key={id}
              className={
                iconContainerStyle ? iconContainerStyle : 'fc w-[50px] h-[50px]'
              }
            >
              <CardFrame>
                <p className="text-grey text-[1.25rem]">{id}</p>
              </CardFrame>
            </motion.div>
          ))}
      </div>
      <div className="flex h-[24px]">
        <IconsDescription iconState={iconState} />
      </div>
    </div>
  );
};

export default BasicIconsManager;
