import { ITodo } from "@/models/todo";
import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./Dialog";

interface TodoDialogProps {
  todo: ITodo;
}

const TodoDialog = ({ todo }: TodoDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger>{todo.title}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{todo.title}</DialogTitle>
        <p>{todo.description}</p>
        <div className="flex items-center justify-between gap-4 rounded-md border border-gray-50 p-4">
          <span>Status: </span>
          <button
            className={`text-sm ${todo.completed ? "text-green-500" : "text-red-500"}`}
          >
            {todo.completed ? "Completed" : "Pending"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TodoDialog;
