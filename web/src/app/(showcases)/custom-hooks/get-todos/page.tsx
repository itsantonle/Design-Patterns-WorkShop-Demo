"use client";

import TodoDialog from "@/components/TodoDialog";
import useFetch from "@/hooks/useFetch";
import { ITodo } from "@/models/todo";
import React from "react";

const GetTodosPage = () => {
  const { data, error, loading } = useFetch<ITodo[]>({
    url: "/todos",
    immediate: true,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>No todos found</div>;

  return (
    <div className="flex flex-col gap-3">
      <h1>Todos</h1>
      <ul className="flex flex-col gap-4">
        {data.map((todo) => (
          <TodoDialog key={todo._id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default GetTodosPage;
