import Link from "next/link";
import React, { PropsWithChildren } from "react";

const ShowcaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Link href={".."} className="absolute top-4 left-4">
        <button>Back to Showcases</button>
      </Link>
      {children}
    </div>
  );
};

export default ShowcaseLayout;
