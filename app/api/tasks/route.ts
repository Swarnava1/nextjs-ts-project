import { NextResponse } from "next/server";
import { createTask, getTasks } from "@/data/tasks";

export async function GET() {
  return NextResponse.json(getTasks());
}

export async function POST(request: Request) {
  const body: unknown = await request.json();

  const title =
    typeof body === "object" && body !== null && "title" in body
      ? (body as { title: unknown }).title
      : undefined;

  if (typeof title !== "string" || !title.trim()) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const task = createTask(title.trim());
  return NextResponse.json(task, { status: 201 });
}