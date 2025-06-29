import React, { useContext } from 'react';
import { useToastdevInternal } from '../../hooks/useToastdev';
import { NotificationIconInterface, NotifyPositionsType, NotifyStyleThemes } from '../../types/notifyTypes';
import { soundPool } from '../../lib/soundPool';
import { ToastdevContext } from '../../contexts/ToastdevContext';
import { useToastdevThemes } from '../../hooks/useToastdevThemes';
import { setGlobalToastdev } from '../../lib/toastdev';
import '../../styles/global.scss';

const Toastdev: React.FC = () => {
  const { selectedToastTheme } = useToastdevThemes();
  const context = useContext(ToastdevContext);
  if (!context) return null;

  const { toastTheme } = context;
  const toasts = useToastdevInternal();
  const prevToastsRef = React.useRef<string[]>([]);

  React.useEffect(() => {
    const prevIds = prevToastsRef.current;
    const newToasts = toasts.filter(t => !prevIds.includes(t.id));

    newToasts.forEach(toast => {
      if (toast.sound) {
        soundPool.play(toast.type);
      }
    });

    prevToastsRef.current = toasts.map(t => t.id);
  }, [toasts]);

  React.useEffect(() => {
    setGlobalToastdev(context.notify);
  }, [context.notify]);

  // render user icon
  const renderIcon = (icon: NotificationIconInterface) => {
    return typeof icon?.path === "string" && icon?.path !== "" ? (
      <img src={icon?.path ?? ""} width={icon?.width ?? 24} height={icon?.height ?? 24} />
    ) : React.isValidElement(icon?.path) ? (
      icon.path
    ) : (
      <div className="circle" />
    );
  };

  return selectedToastTheme(toastTheme ?? "light-sadelovh", {
    renderIcon: renderIcon,
    toasts: toasts
  });
};

export default Toastdev;
