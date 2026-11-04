"use server";

import { revalidatePath } from "next/cache";
import { createTask, cycleTaskStatus, removeTask } from "@/data/tasks";

export async function addTask(formData: FormData) {
  const title = formData.get("title");

  if (typeof title !== "string" || !title.trim()) return;

  await createTask(title.trim());
  revalidatePath("/");
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