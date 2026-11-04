import type { Task } from "@/types/task";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onCycleStatus: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskList({
  tasks,
  onCycleStatus,
  onDelete,
}: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="opacity-70">No tasks yet.</p>;
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onCycleStatus={onCycleStatus}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}