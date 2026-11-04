import Link from "next/link";
import type { TaskStatus } from "@/types/task";

interface FilterTabsProps {
  active?: TaskStatus;
}

const tabs: { label: string; value?: TaskStatus }[] = [
  { label: "All" },
  { label: "To do", value: "todo" },
  { label: "In progress", value: "in-progress" },
  { label: "Done", value: "done" },
];

export default function FilterTabs({ active }: FilterTabsProps) {
  return (
    <nav className="flex gap-2">
      {tabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.value ? `/?status=${tab.value}` : "/"}
          className={`rounded-full border px-3 py-1 text-sm ${
            tab.value === active ? "font-semibold" : "opacity-60 hover:opacity-100"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}