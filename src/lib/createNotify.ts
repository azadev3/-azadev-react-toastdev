import { GlobalNotifyToastsInterface, NotificationType, Notify, NotifyOptionsInterface, NotifyStyleThemes } from '../types/notifyTypes';

const defaultMessages: Record<NotificationType, string> = {
  success: 'Successfully!',
  error: 'Something went wrong!',
  info: 'Here is some info!',
  warn: 'Warning issued!',
};

const normalizeSize = (size?: number) => {
  if (!size || typeof size !== 'number') return undefined;
  return size > 100 ? 24 : size;
};

/**
 * createNotifyHandlers returns ready-made `success`, `error`, `info` and `warn` functions to participate in creating different types of notifications.
 *
 * @param setToasts - Setter function that adds notifications to the state (useState)
 * @returns an object of type `Notify`. Contains feed boost.
 */
export function createNotifyHandlers(
  setToasts: React.Dispatch<React.SetStateAction<GlobalNotifyToastsInterface[]>>,
  toastTheme: NotifyStyleThemes,
): Notify {
  const createNotifyFn = (type: NotificationType) => {
    return (message?: string, options?: NotifyOptionsInterface) => {
      const id = crypto.randomUUID();
      const finalMessage = message || defaultMessages[type];

      setToasts((prev: any) => [
        ...prev,
        {
          id: id,
          message: finalMessage,
          type: type,
          icon: {
            width: normalizeSize(options?.icon?.width),
            height: normalizeSize(options?.icon?.height),
            path: options?.icon?.path ?? '',
          },
          sound: options?.sound ?? false,
          toastClass: options?.toastClass ?? '', // v2
          position: options?.position ?? 't-right', // v2 
          toastTheme: toastTheme, // v2
        },
      ]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast: any) => toast.id !== id));
      }, options?.duration ?? 2000);
    };
  };

  return {
    success: createNotifyFn('success'),
    error: createNotifyFn('error'),
    info: createNotifyFn('info'),
    warn: createNotifyFn('warn'),
  };
}
