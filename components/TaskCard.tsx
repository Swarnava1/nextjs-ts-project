import type { Task } from "@/types/task";

interface TaskCardProps {
  task: Task;
  onCycleStatus: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskCard({
  task,
  onCycleStatus,
  onDelete,
}: TaskCardProps) {
  return (
    <li className="rounded-lg border p-4">
      <div className="flex items-center justify-between gap-3">
        <h2
          className={`font-semibold ${
            task.status === "done" ? "line-through opacity-60" : ""
          }`}
        >
          {task.title}
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onCycleStatus(task.id)}
            className="rounded border px-2 py-1 text-sm hover:opacity-70"
          >
            {task.status}
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="rounded border px-2 py-1 text-sm hover:opacity-70"
          >
            Delete
          </button>
        </div>
      </div>
      {task.description && (
        <p className="mt-1 text-sm opacity-80">{task.description}</p>
      )}
    </li>
  );
}