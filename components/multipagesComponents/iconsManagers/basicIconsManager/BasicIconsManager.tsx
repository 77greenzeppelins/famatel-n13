import React, { useState } from 'react';
/**Components**/
import CardFrame from '../../cards/_cardFrame/CardFrame';
/**Framer Motion Staff**/
import { EventInfo, motion } from 'framer-motion';
/**Basic Data**/
import { svgIconsFromCatalog_data } from '../../../SVG/iconsFromCatalog/_iconsFromCatalog_data';
import { corpoColors } from '../../../../data/_data';
import IconsDescription from '../iconsDescription/IconsDescription';

/**-----------------------------------------------------------**/
const BasicIconsManager: React.FunctionComponent<{
  svgIcons: string[];
  labeledIcons: string[];
  iconContainerStyle?: string;
  isHoverabled?: boolean;
}> = ({ svgIcons, labeledIcons, iconContainerStyle, isHoverabled = true }) => {
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
      //   console.log('target.id:', target.id);
      setIconState({ id: target.id });
    }
  };

  const onHoverEndHandler = (event: MouseEvent, info: EventInfo) => {
    /*trigger this event only on demand i.e. must be allowed explicitelly*/
    if (isHoverabled) {
      // const target = event.target as HTMLElement; //TS requirements
      setIconState({ id: '' });
    }
  };
  /**JSX**/
  return (
    <div data-component="BasicIconsManager__wrapper" className="flex flex-col">
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
                    : 'fc w-[50px] h-[50px] group'
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
        {labeledIcons.map(id => (
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
      <div className="h-[0.75rem]">
        <IconsDescription iconState={iconState} />
      </div>
    </div>
  );
};

export default BasicIconsManager;
