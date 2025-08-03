"use client";

import useCreateTodoForm from "@/hooks/useCreateTodoForm";
import Link from "next/link";

const CreateTodoPage = () => {
  const {
    handleChange,
    submitData,
    values,
    errors,
    submitting,
    resetForm,
    response,
  } = useCreateTodoForm();

  return (
    <main className="flex flex-col items-center gap-10 p-10">
      <Link href={"/custom-hooks"}>
        <button>&lt; Back to Custom Hooks</button>
      </Link>
      <form onSubmit={submitData} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={values.title}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={values.description}
          />
        </div>
        <div className="error">
          {errors && <span className="text-red-500">{errors}</span>}
        </div>
        <div>
          {response && (
            <span className="text-green-500">
              Todo created successfully: {response.title}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button
            disabled={submitting}
            className="rounded-md border border-neutral-50 px-4 py-2"
          >
            {submitting ? "Creating..." : "Create Todo"}
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="rounded-md border border-red-500 px-4 py-2"
          >
            Reset
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateTodoPage;
