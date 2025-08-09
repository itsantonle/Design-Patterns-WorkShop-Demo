"use client";
import TodosList from "@/components/TodosList";
import { getAllTodosQueryOptions } from "@/utils/queryOptions/todo";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ClientTanstack = () => {
  const { data, error, isLoading } = useQuery(getAllTodosQueryOptions());

  return <TodosList todos={data} error={error?.message} loading={isLoading} />;
};

export default ClientTanstack;
