import { proxy } from 'valtio';

const appFirstApperance = proxy<{ isCompleted: boolean }>({
  isCompleted: false,
});

const state = proxy({ count: 0, text: 'hello' });

export { appFirstApperance, state };
