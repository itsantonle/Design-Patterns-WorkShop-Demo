import Link from "next/link";
import React from "react";

const ContainerPresentationPage = () => {
  return (
    <main>
      <h1 className="text-2xl font-semibold pb-5">Container / Presentation Page</h1>
      <ul className="flex flex-col gap-2 items-center">
        {[
          "Client",
          "Nextjs",
          "Client + Tanstack Query",
          "Nextjs + Tanstack Query",
          "JSON Server"
        ].map((label, idx) => (
          <Link href={`/container-presentational/${idx + 1}`} key={label}>
            <button className="w-75 h-10 pl-5 bg-gray-700 hover:bg-amber-500 text-left rounded-lg transition-all">
                {label}
            </button>
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default ContainerPresentationPage;
