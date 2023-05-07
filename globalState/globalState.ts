import { proxy } from 'valtio';

type globalStateType = {
  isCatalogOpened: boolean;
  isProductBrowserOpened: boolean;
};

const globalState = proxy<globalStateType>({
  isCatalogOpened: false,
  isProductBrowserOpened: false,
});

export { globalState };
