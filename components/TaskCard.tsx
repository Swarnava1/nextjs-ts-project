import Link from "next/link";
import type { Task } from "@/types/task";
import { cycleStatus, deleteTask } from "@/app/actions";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <li className="rounded-lg border p-4">
      <div className="flex items-center justify-between gap-3">
        <h2
          className={`font-semibold ${
            task.status === "done" ? "line-through opacity-60" : ""
          }`}
        >
          <Link href={`/tasks/${task.id}`} className="hover:underline">
            {task.title}
          </Link>
        </h2>
        <div className="flex items-center gap-2">
          <form action={cycleStatus.bind(null, task.id)}>
            <button className="rounded border px-2 py-1 text-sm hover:opacity-70">
              {task.status}
            </button>
          </form>
          <form action={deleteTask.bind(null, task.id)}>
            <button className="rounded border px-2 py-1 text-sm hover:opacity-70">
              Delete
            </button>
          </form>
        </div>
      </div>
      {task.description && (
        <p className="mt-1 text-sm opacity-80">{task.description}</p>
      )}
    </li>
  );
}