"use server";

import { revalidatePath } from "next/cache";
import { createTask, cycleTaskStatus, removeTask } from "@/data/tasks";

export async function addTask(formData: FormData) {
  const title = formData.get("title");

  if (typeof title !== "string" || !title.trim()) return;

  createTask(title.trim());
  revalidatePath("/");
}

export async function cycleStatus(id: number) {
  cycleTaskStatus(id);
  revalidatePath("/");
  revalidatePath(`/tasks/${id}`);
}

export async function deleteTask(id: number) {
  removeTask(id);
  revalidatePath("/");
}