
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <h1>Frontend Design Patterns Workshop</h1>
      {[
        {
          label: "Compound Components",
          href: "/compound",
        },
      ].map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="bg-neutral-600 px-2 py-1 rounded-md"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
