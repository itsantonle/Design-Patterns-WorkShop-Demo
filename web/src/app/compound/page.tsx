import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import React from "react";

const CompoundComponentsPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Compound Components</h1>
      <Dialog type="info">
        <DialogTrigger>hey</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogClose />
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default CompoundComponentsPage;
