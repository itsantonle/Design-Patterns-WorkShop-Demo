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
    <main>
      <h1>Compound Components</h1>
      <Dialog type="info">
        <DialogTrigger>hey</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogClose />
        </DialogContent>
      </Dialog>
      <Dialog type="warning">
        <DialogTrigger>hey</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogClose />
        </DialogContent>
      </Dialog>
      <Dialog type="success">
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
