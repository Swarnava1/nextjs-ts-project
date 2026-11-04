import type { Task } from "@/types/task";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <li className="rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">{task.title}</h2>
        <span className="text-sm opacity-70">{task.status}</span>
      </div>
      {task.description && (
        <p className="mt-1 text-sm opacity-80">{task.description}</p>
      )}
    </li>
  );
}