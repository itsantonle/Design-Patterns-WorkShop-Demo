"use client";

import { useState, useEffect, useCallback } from "react";
import { SERVER_URL } from "@/utils/constants";
import ErrorResponse from "@/types/ErrorResponse";

interface UseFetchProps {
  url: string;
  options?: RequestInit;
  immediate?: boolean; // Controls if the fetch runs on mount
}

/**
 * Custom hook for fetching data from a REST API endpoint.
 *
 * @param url - The API endpoint URL.
 * @param options - Fetch options such as method, headers, and body.
 * @param immediate - Whether to trigger the fetch immediately on mount.
 */
const useFetch = <T>({ url, options, immediate = true }: UseFetchProps) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // useCallback ensures the function reference is stable unless dependencies change
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(SERVER_URL + url, options);

      if (!response.ok) {
        const errorData = (await response.json()) as ErrorResponse;
        throw new Error(errorData.message || "An unknown error occurred");
      }

      const responseData = (await response.json()) as T;
      setData(responseData);
      return responseData;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      console.error("Error fetching data:", err);
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [fetchData, immediate]);

  return { data, error, loading, fetchData };
};

export default useFetch;
