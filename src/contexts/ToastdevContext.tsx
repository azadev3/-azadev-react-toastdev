import React, { ReactNode } from 'react';
import { GlobalNotifyToastsInterface, NotificationType, NotifyStyleThemes } from '../types/notifyTypes';
import { createNotifyHandlers } from '../lib/createNotify';

export interface ToastdevContextInterface {
  notify: ReturnType<typeof createNotifyHandlers>;
  toasts: GlobalNotifyToastsInterface[];
}

export const ToastdevContext = React.createContext<ToastdevContextInterface & { toastTheme?: NotifyStyleThemes | 'light-sadelovh' } | undefined>(undefined);

interface ToastdevProviderProps {
  children: ReactNode;

  /**
   * [EN] Choose from ready-made themes.  
   * [AZ] Hazır temalardan istədiyinizi seçin.
   *
   * ---
   * 
   * [EN] Available themes:  
   * `'light-sadelovh' | 'light-ikonik' | 'light-pumping' | 'dark-sadelovh' | 'dark-ikonik' | 'dark-pumping'`
   * 
   * [AZ] Mövcud temalar:  
   * `'light-sadelovh' | 'light-ikonik' | 'light-pumping' | 'dark-sadelovh' | 'dark-ikonik' | 'dark-pumping'`
   *
   * ---
   *
   * [EN] If omitted, the default theme will be `"light-sadelovh"`.  
   * [AZ] Əgər göstərilməzsə, standart dəyər `"light-sadelovh"` olacaq.
   *
   * ---
   * @example
   * ```tsx
   * createRoot(document.getElementById('root')!).render(
   *   <ToastdevProvider toastTheme="dark-ikonik">
   *     <Toastdev />
   *     <App />
   *   </ToastdevProvider>
   * )
   * ```
   */
  toastTheme?: NotifyStyleThemes | 'light-sadelovh';
}


export const ToastdevProvider: React.FC<ToastdevProviderProps> = ({ children, toastTheme }) => {
  const [toasts, setToasts] = React.useState<GlobalNotifyToastsInterface[]>([]);

  const notify = createNotifyHandlers(setToasts, toastTheme ?? "light-sadelovh");

  return (
    <ToastdevContext.Provider
      value={{
        notify,
        toasts,
        toastTheme
      }}
    >
      {children}
    </ToastdevContext.Provider>
  );
};
