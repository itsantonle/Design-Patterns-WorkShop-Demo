"use client";

import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getAllTodosQueryOptions } from "@/utils/queryOptions/todo";
import TodosList from "./TodosList";

const TodosListTanstackQuery = () => {
  const {
    data: todos,
    error,
  } = useSuspenseQuery(getAllTodosQueryOptions());

  return <TodosList todos={todos} error={error?.message}  />;
};

export default TodosListTanstackQuery;
