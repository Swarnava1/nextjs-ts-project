import type { Task } from "@/types/task";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="opacity-70">No tasks yet.</p>;
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </ul>
  );
}