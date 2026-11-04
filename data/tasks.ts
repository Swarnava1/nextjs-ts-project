import type { Task } from "@/types/task";

export const tasks: Task[] = [
  {
    id: 1,
    title: "Set up the project",
    description: "Next.js, TypeScript, and GitHub",
    status: "done",
    createdAt: "2026-11-01",
  },
  {
    id: 2,
    title: "Build the task list",
    status: "in-progress",
    createdAt: "2026-11-04",
  },
  {
    id: 3,
    title: "Add a task form",
    description: "Needs client-side state",
    status: "todo",
    createdAt: "2026-11-04",
  },
];