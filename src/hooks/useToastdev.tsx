import { useContext } from "react";
import { ToastdevContext, ToastdevContextInterface } from "../contexts/ToastdevContext";
import { NotificationType } from "../types/notifyTypes";
/**
 * @returns Returns all functions and parameters of your toaster
 */
export const useToastdev = (): ToastdevContextInterface => {
  const context = useContext(ToastdevContext);
  if (!context) {
    throw new Error("Hey Dev! Please use ToastdevProvider! 😎✌️");
  }
  return context;
};

export const useToastdevInternal = (): NotificationType | null => {
  const context = useContext(ToastdevContext) as ToastdevContextInterface & { __internalType?: NotificationType };
  return context?.__internalType || null;
};
