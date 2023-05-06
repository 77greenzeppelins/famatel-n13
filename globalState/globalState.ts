import { proxy } from 'valtio';

type globalStateType = {
  isCatalogOpen: boolean;
};

const globalState = proxy<globalStateType>({ isCatalogOpen: false });

export { globalState };
