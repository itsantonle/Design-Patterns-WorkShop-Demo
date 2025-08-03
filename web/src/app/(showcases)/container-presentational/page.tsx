import Link from "next/link";
import React from "react";

const ContainerPresentationPage = () => {
  return (
    <main>
      <h1>Container / Presentation Page</h1>
      <ul className="flex flex-col gap-2">
        {[
          "Client",
          "Nextjs",
          "Client + Tanstack Query",
          "Nextjs + Tanstack Query",
        ].map((label, idx) => (
          <Link href={`/container-presentational/${idx + 1}`} key={label}>
            <button>{label}</button>
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default ContainerPresentationPage;
