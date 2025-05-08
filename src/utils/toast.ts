import { toast as reactToastifyToast, ToastOptions } from "react-toastify";

export const toast = {
  success: (message: string, options?: ToastOptions) =>
    reactToastifyToast.success(message, options),
  error: (message: string, options?: ToastOptions) =>
    reactToastifyToast.error(message, options),
  info: (message: string, options?: ToastOptions) =>
    reactToastifyToast.info(message, options),
  warning: (message: string, options?: ToastOptions) =>
    reactToastifyToast.warning(message, options),
};
