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
        {
          label: "Container/Presentational",
          href: "/container-presentational",
        },
        {
          label: "Custom Hooks",
          href: "/custom-hooks",
        },
      ].map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="rounded-md bg-neutral-600 px-2 py-1"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
