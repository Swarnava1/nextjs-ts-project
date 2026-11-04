"use server";

import { revalidatePath } from "next/cache";
import { createTask, cycleTaskStatus, removeTask } from "@/data/tasks";
import { createTaskSchema } from "@/lib/validation";

export type AddTaskState = { error?: string };

export async function addTask(
  _prevState: AddTaskState,
  formData: FormData
): Promise<AddTaskState> {
  const parsed = createTaskSchema.safeParse({ title: formData.get("title") });

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  await createTask(parsed.data.title);
  revalidatePath("/");
  return {};
}

export async function cycleStatus(id: number) {
  await cycleTaskStatus(id);
  revalidatePath("/");
  revalidatePath(`/tasks/${id}`);
}

export async function deleteTask(id: number) {
  await removeTask(id);
  revalidatePath("/");
}