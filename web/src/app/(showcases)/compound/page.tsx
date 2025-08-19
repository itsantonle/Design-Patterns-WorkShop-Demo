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
    <main className="space-y-7">
      <h1>Compound Components</h1>
      <div className="flex flex-col space-y-5">
        <Dialog type="info">
          <DialogTrigger>Information Dialog</DialogTrigger>
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
             <div className="flex gap-4 p-5">
              <div>left side</div>
              <div>right side</div>
            </div>
            <DialogClose />
          </DialogContent>
        </Dialog>
        <Dialog type="success" withX>
          <DialogTrigger>Success Dialog</DialogTrigger>
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogClose />
          </DialogContent>
        </Dialog>
        <Dialog type="warning">
          <DialogTrigger>Warning Dialog</DialogTrigger>
          <DialogContent>
            <DialogTitle>Warning Title</DialogTitle>
            <DialogClose />
          </DialogContent>
        </Dialog>
        
      </div>
    </main>
  );
};

export default CompoundComponentsPage;
