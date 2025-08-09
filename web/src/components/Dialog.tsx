"use client";

import { X } from "lucide-react";
import React, { createContext } from "react";

interface DialogContextType {
  showDialog: () => void;
  hideDialog: () => void;
  isVisible: boolean;
  type: "success" | "error" | "info";
  withX?: boolean;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

const useDialogContext = () => {
  const ctx = React.useContext(DialogContext);
  if (!ctx) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }
  return ctx;
};

interface DialogProps {
  type?: "success" | "error" | "info";
  children?: React.ReactNode;
  withX?: boolean;
}

const Dialog = ({ type = "info", children, withX = false }: DialogProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const showDialog = () => {
    setIsVisible(true);
  };

  const hideDialog = () => {
    setIsVisible(false);
  };

  return (
    <DialogContext.Provider
      value={{
        showDialog,
        hideDialog,
        isVisible,
        type,
        withX,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

function DialogTrigger({ children }: React.PropsWithChildren) {
  const { showDialog } = useDialogContext();
  return (
    <button
      onClick={showDialog}
      className="rounded-md bg-neutral-600 px-2 py-1"
    >
      {children}
    </button>
  );
}

function DialogContent({ children }: React.PropsWithChildren) {
  const { isVisible, hideDialog, withX, type } = useDialogContext();

  return (
    isVisible && (
      <div className="absolute top-0 left-0 h-screen w-full self-center justify-self-center">
        <div
          className={`absolute top-0 left-0 h-full w-full bg-black/50`}
          onClick={hideDialog}
        />

        <div
          className={
            "absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-lg bg-neutral-600 p-4 shadow-lg" +
              type ===
            "success"
              ? "border border-green-500"
              : type === "error"
                ? "border border-red-500"
                : "border border-blue-500"
          }
        >
          {withX && (
            <button onClick={hideDialog}>
              <X />
            </button>
          )}
          {children}
        </div>
      </div>
    )
  );
}

function DialogTitle({ children }: React.PropsWithChildren) {
  return <h2 className={`p-2 text-3xl font-semibold`}>{children}</h2>;
}

function DialogClose() {
  const { hideDialog } = useDialogContext();
  return (
    <div>
      <button
        onClick={hideDialog}
        className="flex w-full rounded-md bg-neutral-800 px-2 py-1 text-center"
      >
        Close
      </button>
    </div>
  );
}

export {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogClose,
  useDialogContext,
  DialogContext,
  DialogTrigger,
};
