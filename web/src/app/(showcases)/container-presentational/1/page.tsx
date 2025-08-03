"use client";

import TodosList from "@/components/TodosList";
import { SERVER_URL } from "@/utils/constants";
import { useEffect, useState } from "react";

const Client = () => {
  const [todos, setTodos] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await fetch(SERVER_URL + "/todos");
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
        setError(
          error instanceof Error ? error.message : "Failed to fetch todos",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return <TodosList todos={todos} loading={loading} error={error} />;
};

export default Client;
