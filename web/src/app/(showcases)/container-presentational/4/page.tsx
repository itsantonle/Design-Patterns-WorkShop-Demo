import TodosListTanstackQuery from "@/components/TodoListTanstackQuery";
import { getAllTodosQueryOptions } from "@/utils/queryOptions/todo";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

const NextjsTanstack = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(getAllTodosQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TodosListTanstackQuery />
    </HydrationBoundary>
  );
};

export default NextjsTanstack;
