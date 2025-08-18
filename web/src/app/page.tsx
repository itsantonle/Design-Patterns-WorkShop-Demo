import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-10 justify-center items-center">
      <h1 className="text-3xl font-bold">Frontend Design Patterns Workshop</h1>
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
          className="w-75 py-2 bg-gray-700 hover:bg-amber-500 text-center rounded-lg transition-all text-xl"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
