import { proxy } from 'valtio';

declare module 'valtio' {
  function useSnapshot<T extends object>(p: T): T;
}

interface IF_AppGlobalStates {
  appFirstApperance: boolean;
  someNumb: number;
}

const appGlobalStates = proxy<IF_AppGlobalStates>({
  appFirstApperance: true,
  someNumb: 0,
});

export { appGlobalStates };
