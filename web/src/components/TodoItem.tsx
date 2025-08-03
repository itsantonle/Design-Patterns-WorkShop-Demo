import { ITodo } from "@/models/todo";
import React from "react";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-gray-50 p-4">
      {todo.title}
      <p
        className={`text-sm ${todo.completed ? "text-green-500" : "text-red-500"}`}
      >
        {todo.completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
};

export default TodoItem;
