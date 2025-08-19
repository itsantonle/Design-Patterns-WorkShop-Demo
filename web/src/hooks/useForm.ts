"use client";
import ErrorResponse from "@/types/ErrorResponse";
import { SERVER_URL } from "@/utils/constants";
import { useState } from "react";

type ServerAction<I, O> = (data: I) => Promise<O>;

interface UseFormProps<I, O> {
  initialValues: I;
  submitTo: string | ServerAction<I, O>;
  method?: "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  opts?: RequestInit;
}
/**
 * Custom hook for managing form state and submission.
 *
 * @param initialValues - The initial values for the form fields.
 * @param submitTo - The endpoint or function to submit the form data.
 * @param method - The HTTP method to use for the submission.
 * @param headers - Headers to include in the submission request.
 * @param opts - Additional options for the fetch request.
 */
const useForm = <I, O>({
  initialValues,
  submitTo,
  method = "POST",
  headers = {
    "Content-Type": "application/json",
  },
  opts = {},
}: UseFormProps<I, O>) => {
  const [values, setValues] = useState<I>(initialValues);
  const [errors, setErrors] = useState<string | null>(null);
  const [response, setResponse] = useState<O | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setErrors(null);
    setResponse(null);
    setSubmitting(true);

    try {
      if (typeof submitTo === "function") {
        const data = await submitTo(values);
        return data;
      }

      if (typeof submitTo === "string") {
        const response = await fetch(SERVER_URL + submitTo, {
          ...opts,
          method,
          headers,
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          const errorData = (await response.json()) as ErrorResponse;
          throw new Error(errorData.message);
        }

        const data = (await response.json()) as O;
        setResponse(data);
        return data;
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error("Error submitting data:", error);
      setErrors(errorMessage);
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    initialValues,
    values,
    handleChange,
    resetForm,
    submitData,
    errors,
    response,
    submitting,
  };
};

export default useForm;
