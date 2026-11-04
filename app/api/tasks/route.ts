import { NextResponse } from "next/server";
import { createTask, getTasks } from "@/data/tasks";
import { createTaskSchema } from "@/lib/validation";

export async function GET() {
  return NextResponse.json(await getTasks());
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = createTaskSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0].message },
      { status: 400 }
    );
  }

  const task = await createTask(parsed.data.title);
  return NextResponse.json(task, { status: 201 });
}