import Link from "next/link";
import { notFound } from "next/navigation";
import { getTaskById } from "@/data/tasks";

interface TaskPageProps {
  params: Promise<{ id: string }>;
}

export default async function TaskPage({ params }: TaskPageProps) {
  const { id } = await params;
  const task = await getTaskById(Number(id));
  
  if (!task) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <Link href="/" className="text-sm underline opacity-70 hover:opacity-100">
        ← Back to all tasks
      </Link>

      <h1 className="mt-4 text-3xl font-bold">{task.title}</h1>

      <dl className="mt-6 space-y-3">
        <div>
          <dt className="text-sm opacity-70">Status</dt>
          <dd>{task.status}</dd>
        </div>
        <div>
          <dt className="text-sm opacity-70">Created</dt>
          <dd>{task.createdAt}</dd>
        </div>
        {task.description && (
          <div>
            <dt className="text-sm opacity-70">Description</dt>
            <dd>{task.description}</dd>
          </div>
        )}
      </dl>
    </main>
  );
}