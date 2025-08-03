import { ITodo } from "@/models/todo";
import useForm from "./useForm";

interface CreateTodoForm {
  title: string;
  description?: string;
}

const useCreateTodoForm = () =>
  useForm<CreateTodoForm, ITodo>({
    initialValues: {
      title: "",
      description: "",
    },
    submitTo: "/todos",
  });

export default useCreateTodoForm;
