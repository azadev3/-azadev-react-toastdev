import React, { ReactNode } from 'react';
import { GlobalNotifyToastsInterface, NotificationType } from '../types/notifyTypes';
import { createNotifyHandlers } from '../lib/createNotify';

export interface ToastdevContextInterface {
  notify: ReturnType<typeof createNotifyHandlers>;
  toasts: GlobalNotifyToastsInterface[];
}

export const ToastdevContext = React.createContext<ToastdevContextInterface & { __internalType?: NotificationType } | undefined>(undefined);

interface ToastdevProviderProps {
  children: ReactNode;
}

export const ToastdevProvider: React.FC<ToastdevProviderProps> = ({ children }) => {
  const [toasts, setToasts] = React.useState<GlobalNotifyToastsInterface[]>([]);

  const notify = createNotifyHandlers(setToasts);

  return (
    <ToastdevContext.Provider
      value={{
        notify,
        toasts
      }}
    >
      {children}
    </ToastdevContext.Provider>
  );
};
