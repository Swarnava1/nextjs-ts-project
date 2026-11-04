import { tasks } from "@/data/tasks";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Task Tracker</h1>
      <TaskList tasks={tasks} />
    </main>
  );
}