/*Imports*/
import { FunctionComponent } from 'react';
import { menuLinkLabel } from '../../../../../data/_data';
/**Componentrs**/
import ProduktyDropDownMenu from './allMenus/produktyDropDownMenu/ProduktyDropDownMenu';
/**TS**/
interface IDropDownMenusArray {
  id: string;
  Component: FunctionComponent<{}>;
}

/**Array of all DropDownMenus**/
const dropDownMenusArray: IDropDownMenusArray[] = [
  { id: menuLinkLabel[1], Component: ProduktyDropDownMenu },
];

export { dropDownMenusArray };

/*
interface IComponentProps {
  menuStateWithinClick?: boolean;
  setMenuStateWithinClick?: Dispatch<SetStateAction<IState>>;
}
interface IDropDownMenusArray {
  id: string;
  Component: ({
    menuStateWithinClick,
    setMenuStateWithinClick,
  }: IComponentProps) => JSX.Element;
  // Component: () => JSX.Element;
}
const dropDownMenusArray: IDropDownMenusArray[] = [
  { id: menuLinkLabel[1], Component: ProduktyDropDownMenu },
];
*/
