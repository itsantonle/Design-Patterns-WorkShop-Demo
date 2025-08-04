import React from "react";
import TodosList from "@/components/TodosList";
import { SERVER_URL } from "@/utils/constants";

const Nextjs = async () => {
  let todos = null;
  let error: string | null = null;

  try {
    const res = await fetch(SERVER_URL + "/todos", {
      cache: "no-store", // optional: disable caching
    });

    if (!res.ok) {
      throw new Error(`Server responded with status ${res.status}`);
    }

    todos = await res.json();
  } catch (err) {
    console.error("Error fetching todos:", err);
    error = err instanceof Error ? err.message : "Failed to fetch todos";
  }

  // Since wala loading state on the server, omit sya or handle it sa client fallback
  return <TodosList todos={todos} loading={false} error={error} />;
};

export default Nextjs;

// const Nextjs = async () => {
//   return <div>Nextjs</div>;
// };

// export default Nextjs;

// export const fetchTestimonials = async (): Promise<TestimonialAdminData[]> => {
//   try {
//     const response = await fetch("/api/admin/testimonials", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
    
//     const result = await response.json();

//     if (!response.ok) {
//       throw new Error(result.error || "Failed to fetch testimonials");
//     }

//     return result as TestimonialAdminData[];
//   } catch (error) {
//     console.error("Fetch error:", error);
//     throw error;
//   }
// };
