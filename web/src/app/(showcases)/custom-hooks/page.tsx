import Link from "next/link";
import React from "react";

const CustomHooksPage = () => {
  return (
    <main>
      <div className="text-2xl font-semibold pb-5">Custom Hooks Form</div>
      <ul className="flex flex-col gap-2 items-center">
        {[
            {
                label: "useForm",
                href: "/custom-hooks/create-todo",
            },
            {
                label: "useFetch",
                href: "/custom-hooks/get-todos",
            },
            {
                label: "Json Server Upgraded",
                href: "/custom-hooks/json-server-upgraded",
            },
        ].map((item) => (
          <Link key={item.label} href={item.href}>
            <button className="w-75 h-10 pl-5 bg-gray-700 hover:bg-amber-500 text-left rounded-lg transition-all">
              {item.label}
            </button>
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default CustomHooksPage;
