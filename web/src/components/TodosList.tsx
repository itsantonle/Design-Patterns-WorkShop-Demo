import { ITodo } from "@/models/todo";
import React from "react";
import TodoItem from "./TodoItem";

interface TodosListProps {
  todos?: ITodo[];
  loading?: boolean;
  error?: string | null;
}

const TodosList = ({ todos, loading, error }: TodosListProps) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!todos || todos.length === 0) {
    return <div>No todos found</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
