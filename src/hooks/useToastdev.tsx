import { useContext } from "react";
import { ToastdevContext } from "../contexts/ToastdevContext";
import { ToastdevContextInterface } from "../contexts/ToastdevContext";

export const useToastdev = (): ToastdevContextInterface["notify"] => {
  const context = useContext(ToastdevContext);
  if (!context) {
    throw new Error("Hey Dev! Please use <ToastdevProvider>! 😎");
  }
  return context.notify;
};

// Internal
export const useToastdevInternal = (): ToastdevContextInterface["toasts"] => {
  const context = useContext(ToastdevContext);
  if (!context) {
    throw new Error("This hook is for internal use only.");
  }
  return context.toasts;
};
