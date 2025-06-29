import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { NotificationIconInterface, NotificationType, GlobalNotifyToastsInterface } from '../../types/notifyTypes';

interface BaseThemeToastProps {
    toasts: GlobalNotifyToastsInterface[];
    className: string;
    renderIcon: (icon: NotificationIconInterface, type: NotificationType) => React.ReactNode;
}

export const BaseThemeToast: React.FC<BaseThemeToastProps> = ({ toasts, className, renderIcon }) => {
    const hasToasts = toasts?.length > 0 ? toasts : [];
    const position = hasToasts[0]?.position || 't-right';
    const isBottom = position.startsWith('b-');

    return (
        <div className={`${className} ${position}`}>
            <AnimatePresence>
                {hasToasts.map(({ id, message, type, icon, toastClass }) => (
                    <motion.div
                        key={id}
                        layout
                        className={`toastdev ${type} ${toastClass || ""}`}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0.8, y: isBottom ? 30 : -30 }}
                        exit={{ opacity: 0, scale: 0.1, y: isBottom ? 30 : -30 }}
                        transition={{ duration: 0.2 }}
                    >
                        {renderIcon(icon as any, type)}
                        <p className="main-msg">{message}</p>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
