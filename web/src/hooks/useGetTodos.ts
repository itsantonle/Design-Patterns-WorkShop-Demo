import { ITodo } from "@/models/todo";
import useFetch from "./useFetch";

const useGetTodos = () =>
  useFetch<ITodo[]>({
    url: "/todos",
    immediate: true,
    options: {
      method: "GET",
    },
  });

export default useGetTodos;
