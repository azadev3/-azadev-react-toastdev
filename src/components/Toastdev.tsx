import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToastdev } from '../hooks/useToastdev';
import { NotificationIconInterface } from '../types/notifyTypes';
import { soundPool } from '../lib/soundPool';

const Toastdev: React.FC = () => {
    const { toasts } = useToastdev();
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


    const renderIcon = (icon: NotificationIconInterface) => {
        return (
            typeof icon?.path === 'string' && icon?.path !== "" ? (
                <img src={icon?.path ?? ""} width={icon?.width ?? 24} height={icon?.height ?? 24} />
            ) : React.isValidElement(icon?.path) ? (
                icon.path
            ) : (
                <div className="circle" />
            )
        )
    }

    return (
        <div className="toastdev-container">
            <AnimatePresence>
                {toasts.map(({ id, message, type, icon, sound }) => (
                    <motion.div
                        key={id}
                        layout
                        className={`toastdev ${type}`}
                        initial={{ opacity: 0, scale: 0.8, y: -30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.1, y: -30 }}
                        transition={{ duration: 0.2 }}
                    >
                        {renderIcon(icon ?? {})}
                        <p className="main-msg">{message}</p>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Toastdev;
