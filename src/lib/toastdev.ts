import { Notify } from '../types/notifyTypes';

let toastRef: Notify | null = null;

export const setGlobalToastdev = (notify: Notify) => {
  toastRef = notify;
};

export const toastdev: Notify = {
  success: (msg, options) => {
    if (!toastRef) {
      console.warn('[toast] Toast system not initialized.');
      return;
    }
    toastRef.success(msg, options);
  },
  error: (msg, options) => {
    if (!toastRef) {
      console.warn('[toast] Toast system not initialized.');
      return;
    }
    toastRef.error(msg, options);
  },
  info: (msg, options) => {
    if (!toastRef) {
      console.warn('[toast] Toast system not initialized.');
      return;
    }
    toastRef.info(msg, options);
  },
  warn: (msg, options) => {
    if (!toastRef) {
      console.warn('[toast] Toast system not initialized.');
      return;
    }
    toastRef.warn(msg, options);
  },
};
