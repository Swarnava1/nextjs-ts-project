import { getTasks } from "@/data/tasks";
import { isTaskStatus } from "@/types/task";
import AddTaskForm from "@/components/AddTaskForm";
import FilterTabs from "@/components/FilterTabs";
import TaskList from "@/components/TaskList";

export const dynamic = "force-dynamic";

interface HomeProps {
  searchParams: Promise<{ status?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { status } = await searchParams;
  const filter = status && isTaskStatus(status) ? status : undefined;
  const tasks = await getTasks(filter);

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Task Tracker</h1>
      <div className="space-y-6">
        <AddTaskForm />
        <FilterTabs active={filter} />
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}