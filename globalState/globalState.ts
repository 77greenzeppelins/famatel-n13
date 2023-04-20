import { proxy } from 'valtio';

interface IF_GlobalState {
  hasAcceptedCookies: boolean;
}

const globalState = proxy<IF_GlobalState>({
  hasAcceptedCookies: false,
});

export { globalState };
