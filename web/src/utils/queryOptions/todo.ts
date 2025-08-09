import { queryOptions } from "@tanstack/react-query";
import { SERVER_URL } from "../constants";
import { ITodo } from "@/models/todo";

export const getAllTodosQueryOptions = () =>
  queryOptions<ITodo[]>({
    queryKey: ["todos"],
    queryFn: () =>
      fetch(SERVER_URL + "/todos").then(
        (res) => res.json() as Promise<ITodo[]>,
      ),
  });
