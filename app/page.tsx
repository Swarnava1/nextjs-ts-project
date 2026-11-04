import { tasks } from "@/data/tasks";
import TaskBoard from "@/components/TaskBoard";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Task Tracker</h1>
      <TaskBoard initialTasks={tasks} />
    </main>
  );
}