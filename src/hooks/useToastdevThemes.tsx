import { BaseThemeToast } from "../components/toastdev/BaseThemeToast";
import { GlobalNotifyToastsInterface, NotificationIconInterface, NotificationType, NotifyStyleThemes } from "../types/notifyTypes";
import React from 'react';
import { CheckIcon, DangerIcon, ErrorIcon, InfoIcon } from "../icons/base64";

export interface PropsForToastdevThemes {
    toasts: GlobalNotifyToastsInterface[];
    renderIcon: (icon: NotificationIconInterface) => React.ReactNode;
}

export const useToastdevThemes = () => {
    const renderIconByTypes = (icon: any, type: NotificationType) => {
        if (React.isValidElement(icon?.path)) return icon.path;
        if (typeof icon?.path === "string" && icon.path !== "") {
            return <img src={icon.path} width={icon?.width ?? 24} height={icon?.height ?? 24} alt="custom-icon" />;
        }

        switch (type) {
            case 'success': return <img src={CheckIcon} alt="success" width={24} height={24} />;
            case 'error': return <img src={ErrorIcon} alt="error" width={24} height={24} />;
            case 'info': return <img src={InfoIcon} alt="info" width={24} height={24} />;
            case 'warn': return <img src={DangerIcon} alt="warn" width={24} height={24} />;
            default: return null;
        }
    };

    const renderIconWithCircle = (icon: any, type: NotificationType) => {
        const element = renderIconByTypes(icon, type);
        return <div className="circle-with-icon">{element}</div>;
    };

    const selectedToastTheme = (theme: NotifyStyleThemes, props: PropsForToastdevThemes) => {
        switch (theme) {
            case 'light-sadelovh':
                return <BaseThemeToast toasts={props.toasts} className="toastdev-light_sadelovh" renderIcon={props.renderIcon} />;
            case 'light-ikonik':
                return <BaseThemeToast toasts={props.toasts} className="toastdev-light_ikonik" renderIcon={renderIconByTypes} />;
            case 'light-pumping':
                return <BaseThemeToast toasts={props.toasts} className="toastdev-light_pumping" renderIcon={props.renderIcon} />;
            case 'dark-sadelovh':
                return <BaseThemeToast toasts={props.toasts} className="toastdev-dark_sadelovh" renderIcon={props.renderIcon} />;
            case 'dark-ikonik':
                return <BaseThemeToast toasts={props.toasts} className="toastdev-dark_ikonik" renderIcon={renderIconWithCircle} />;
            case 'dark-pumping':
                return <BaseThemeToast toasts={props.toasts} className="toastdev-dark_pumping" renderIcon={props.renderIcon} />;
            default:
                return <BaseThemeToast toasts={props.toasts} className="toastdev-light_sadelovh" renderIcon={props.renderIcon} />;
        }
    };

    return {
        selectedToastTheme,
    };
};
