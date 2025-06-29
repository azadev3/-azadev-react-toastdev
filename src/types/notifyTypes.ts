import React from 'react';

export type NotificationType = 'success' | 'error' | 'info' | 'warn';

export type NotifyPositionsType = 't-left' | 't-center' | 't-right' | 'b-left' | 'b-center' | 'b-right';

export type NotifyStyleThemes = 'light-sadelovh' | 'light-ikonik' | 'light-pumping' | 'dark-sadelovh' | 'dark-ikonik' | 'dark-pumping';

export interface Notify {
  /**
   * 🟢 [EN] Show a success notification.
   * 
   * 🟢 [AZ] Uğurlu bildiriş göstərin.
   *
   * [EN] If no message is provided, a default message will be used.
   *
   * [AZ] Əgər heç bir mesaj verilməzsə, təyin olunmuş mesaj göstəriləcək (default).
   *
   * @param {string} [message] - Custom success message. / Özəl müvəffəqiyyət mesajı.
   *
   * @param {NotifyOptionsInterface} [notifyOptions] - Optional settings such as duration. / Müddət və s. kimi istəyə bağlı parametrlər
   */
  success(message?: string, notifyOptions?: NotifyOptionsInterface): void;
  /**
   * 🔴 [EN] Show an error notification.
   *
   * 🔴 [AZ] Xəta bildirişi göstərin.
   *
   * [EN] If no message is provided, a default message will be used.
   *
   * [AZ] Əgər heç bir mesaj verilməzsə, təyin olunmuş mesaj göstəriləcək (default).
   *
   * @param {string} [message] - Custom error message. / Özəl müvəffəqiyyət mesajı.
   *
   * @param {NotifyOptionsInterface} [notifyOptions] - Optional settings such as duration. / Müddət və s. kimi istəyə bağlı parametrlər
   */
  error(message?: string, notifyOptions?: NotifyOptionsInterface): void;
  /**
   * 🔵 [EN] Show an informational notification.
   *
   * 🔵 [AZ] Məlumat bildirişi.
   *
   * If no message is provided, a default message will be used.
   *
   * [AZ] Əgər heç bir mesaj verilməzsə, təyin olunmuş mesaj göstəriləcək (default).
   *
   * @param {string} [message] - Custom information message. / Özəl müvəffəqiyyət mesajı.
   *
   * @param {NotifyOptionsInterface} [notifyOptions] - Optional settings such as duration. / Müddət və s. kimi istəyə bağlı parametrlər
   */
  info(message?: string, notifyOptions?: NotifyOptionsInterface): void;
  /**
   * 🟡 [EN] Show a warning notification.
   *
   * 🟡 [AZ] Xəbərdarlıq bildirişi göstərin.
   *
   * [EN] If no message is provided, a default message will be used.
   *
   * [AZ] Əgər heç bir mesaj verilməzsə, təyin olunmuş mesaj göstəriləcək (default).
   *
   * @param {string} [message] - Custom warning message. / Özəl müvəffəqiyyət mesajı.
   *
   * @param {NotifyOptionsInterface} [notifyOptions] - Optional settings such as duration. / Müddət və s. kimi istəyə bağlı parametrlər
   */
  warn(message?: string, notifyOptions?: NotifyOptionsInterface): void;
}

export interface NotificationIconInterface {
  /**
   * [EN] The path of the icon you will add
   *
   * [AZ] Əlavə edəcəyiniz simvolun yolu
   *
   * @example
   * ```tsx
   *  path: "/myicon.svg"
   *  or
   *  path: <MyJsxIcon />
   * ```
   */
  path?: string | React.JSX.Element;
  /**
   * [EN] The icon width parameter
   *
   * [AZ] İkonun genişlik dəyəri
   *
   * @example
   * ```tsx
   *  icon: {
   *     width: 24,
   *  }
   * ```
   */
  width?: number;
  /**
   * [EN] The icon height parameter
   *
   * [AZ] İkonun hündürlük dəyəri
   *
   * @example
   * ```tsx
   *  icon: {
   *     height: 24,
   *  }
   * ```
   *
   */
  height?: number;
}

export interface NotifyOptionsInterface {
  /**
   * [EN] Duration (in milliseconds) before the toast disappears.
   *
   * [AZ] Tostun yox olmağa qədər olan müddəti parametri (millisaniyələrlə).
   *
   * @default 2000
   *
   * @example
   * ```tsx
   * notify.success("Successfully!", {
   *   duration: 3000,
   * });
   * ```
   */
  duration?: number;
  /**
   * [EN] Custom icon shown next to the toast message.
   *
   * [AZ] Sizin özəl ikonunuz
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
   * [EN] Activate this feature for sound notifications 🔊
   *
   * [AZ] Səsli bildirişlər üçün bu parametri aktivləşdirin 🔊
   *
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
  /**
   * [EN] Redesign by adding custom class name
   *
   * [AZ] Fərdi sinif adı əlavə etməklə yenidən dizayn edin
   *
   * @example
   * ```tsx
   * notify.success("Successfully!", {
   *   toastClass: "my_custom_toaster_class",
   * });
   * ```
   */
  toastClass?: string;
  /**
   * [EN] Determine which way the toast will come out
   *
   * 🧭 Possible values:
   *
   * `"t-left", "t-center", "t-right", "b-left", "b-center", "b-right"`
   *
   * [AZ] Tostun hansı istiqamətdən çıxacağını təyin edin
   *
   * 🧭 Mümkün dəyərlər:
   *
   * `"t-left", "t-center", "t-right", "b-left", "b-center", "b-right"`
   *
   * @default "t-right"
   *
   * @example
   * ```tsx
   * notify.success("Successfully!", {
   *   position: "t-right",
   * });
   * ```
   */
  position?: NotifyPositionsType | undefined;
}

export interface GlobalNotifyToastsInterface {
  id: string;
  message: string;
  type: NotificationType;
  icon?: NotificationIconInterface;
  sound?: boolean;
  toastClass?: string;
  position?: NotifyPositionsType;
}
