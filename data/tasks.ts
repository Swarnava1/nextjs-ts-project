import { prisma } from "@/lib/prisma";
import type { Task, TaskStatus } from "@/types/task";

const nextStatus: Record<TaskStatus, TaskStatus> = {
  todo: "in-progress",
  "in-progress": "done",
  done: "todo",
};

function isTaskStatus(value: string): value is TaskStatus {
  return value === "todo" || value === "in-progress" || value === "done";
}

// Converts a database row into our app's Task type.
function toTask(row: {
  id: number;
  title: string;
  description: string | null;
  status: string;
  createdAt: Date;
}): Task {
  return {
    id: row.id,
    title: row.title,
    description: row.description ?? undefined,
    status: isTaskStatus(row.status) ? row.status : "todo",
    createdAt: row.createdAt.toISOString().slice(0, 10),
  };
}

export async function getTasks(): Promise<Task[]> {
  const rows = await prisma.task.findMany({ orderBy: { createdAt: "desc" } });
  return rows.map(toTask);
}

export async function getTaskById(id: number): Promise<Task | undefined> {
  const row = await prisma.task.findUnique({ where: { id } });
  return row ? toTask(row) : undefined;
}

export async function createTask(title: string): Promise<Task> {
  const row = await prisma.task.create({ data: { title } });
  return toTask(row);
}

export async function cycleTaskStatus(id: number): Promise<void> {
  const task = await getTaskById(id);
  if (!task) return;
  await prisma.task.update({
    where: { id },
    data: { status: nextStatus[task.status] },
  });
}

export async function removeTask(id: number): Promise<void> {
  await prisma.task.deleteMany({ where: { id } });
}