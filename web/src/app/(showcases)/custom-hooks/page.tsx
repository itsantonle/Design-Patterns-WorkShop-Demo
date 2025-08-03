import Link from "next/link";
import React from "react";

const CustomHooksPage = () => {
  return (
    <main>
      <div>Custom Hooks Form</div>
      <ul className="flex flex-col gap-2 w-full text-center">
        {[
          {
            label: "useForm",
            href: "/custom-hooks/create-todo",
          },
          {
            label: "useFetch",
            href: "/custom-hooks/get-todos",
          },
        ].map((item) => (
          <Link key={item.label} href={item.href}>
            <button className="rounded-md bg-neutral-600 px-2 py-1">
              {item.label}
            </button>
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default CustomHooksPage;
