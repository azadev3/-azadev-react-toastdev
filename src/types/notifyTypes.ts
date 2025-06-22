import React from 'react';

/**
 * Defines methods for triggering toast notifications with optional customization.
 */
export interface Notify {
  /**
   * Show a success notification.
   * If no message is provided, a default message will be used.
   *
   * @param {string} [message] - Custom success message.
   * @param {NotifyOptionsInterface} [notifyOptions] - Optional settings such as duration.
   */
  success(message?: string, notifyOptions?: NotifyOptionsInterface): void;
  /**
   * Show an error notification.
   * If no message is provided, a default message will be used.
   *
   * @param {string} [message] - Custom error message.
   * @param {NotifyOptionsInterface} [notifyOptions] - Optional settings such as duration.
   */
  error(message?: string, notifyOptions?: NotifyOptionsInterface): void;
  /**
   * Show an informational notification.
   * If no message is provided, a default message will be used.
   *
   * @param {string} [message] - Custom info message.
   * @param {NotifyOptionsInterface} [notifyOptions] - Optional settings such as duration.
   */
  info(message?: string, notifyOptions?: NotifyOptionsInterface): void;
  /**
   * Show a warning notification.
   * If no message is provided, a default message will be used.
   *
   * @param {string} [message] - Custom warning message.
   * @param {NotifyOptionsInterface} [notifyOptions] - Optional settings such as duration.
   */
  warn(message?: string, notifyOptions?: NotifyOptionsInterface): void;
}

/**
 * Possible types of toast notifications.
 */
export type NotificationType = 'success' | 'error' | 'info' | 'warn';

/**
 * For notification options => icon object
 */
export interface NotificationIconInterface {
  /**
   * The path of the icon you will add
   *
   * @example
   * ```tsx
   *  path: "/myicon.svg"
   *  or
   *  path: <MyJsxIcon />
   * ```
   */
  path?: string | React.JSX.Element;
  width?: number;
  height?: number;
}

/**
 * Options for customizing toast notification behavior.
 */
export interface NotifyOptionsInterface {
  /**
   * Duration (in milliseconds) before the toast disappears.
   *
   * @default 2000
   * @example 5000
   */
  duration?: number;
  /**
   * Custom icon shown next to the toast message.
   *
   * @example
   * ```tsx
   * notify.success("Successfully!", {
   *   icon: {
   *     path: "/my_success_icon.svg",
   *     width: 30,
   *     height: 30
   *   },
   * });
   * ```
   */
  icon?: NotificationIconInterface;
  /**
   * Activate this feature for sound notifications
   * @default false
   *
   * @example
   * ```tsx
   * notify.success("Successfully!", {
   *   sound: true
   * });
   * ```
   */
  sound?: boolean;
}

export type GlobalNotifyToastsInterface = {
  id: string;
  message: string;
  type: NotificationType;
  icon?: NotificationIconInterface;
  sound?: boolean;
};
