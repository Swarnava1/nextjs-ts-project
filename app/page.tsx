import { getTasks } from "@/data/tasks";
import AddTaskForm from "@/components/AddTaskForm";
import TaskList from "@/components/TaskList";

export const dynamic = "force-dynamic";

export default function Home() {
  const tasks = getTasks();

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Task Tracker</h1>
      <div className="space-y-6">
        <AddTaskForm />
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}