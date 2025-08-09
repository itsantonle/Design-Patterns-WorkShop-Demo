import React from "react";
import TodosList from "@/components/TodosList";
import { SERVER_URL } from "@/utils/constants";
import { ITodo } from "@/models/todo";

const Nextjs = async () => {
  const res = await fetch(SERVER_URL + "/todos");

  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }

  const todos = (await res.json()) as ITodo[];

  return <TodosList todos={todos} />;
};

export default Nextjs;
