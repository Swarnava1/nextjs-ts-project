import type { Task, TaskStatus } from "@/types/task";

const seed: Task[] = [
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

// In dev mode, Next.js reloads modules often. Storing the array on
// globalThis keeps our data alive between reloads.
const globalForTasks = globalThis as unknown as { tasks?: Task[] };

function db(): Task[] {
  return (globalForTasks.tasks ??= [...seed]);
}

const nextStatus: Record<TaskStatus, TaskStatus> = {
  todo: "in-progress",
  "in-progress": "done",
  done: "todo",
};

export function getTasks(): Task[] {
  return db();
}

export function getTaskById(id: number): Task | undefined {
  return db().find((task) => task.id === id);
}

export function createTask(title: string): Task {
  const tasks = db();
  const task: Task = {
    id: Math.max(0, ...tasks.map((t) => t.id)) + 1,
    title,
    status: "todo",
    createdAt: new Date().toISOString().slice(0, 10),
  };
  tasks.unshift(task);
  return task;
}

export function cycleTaskStatus(id: number): void {
  const task = getTaskById(id);
  if (task) task.status = nextStatus[task.status];
}

export function removeTask(id: number): void {
  const tasks = db();
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) tasks.splice(index, 1);
}