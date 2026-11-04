import { tasks } from "@/data/tasks";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Task Tracker</h1>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">{task.title}</h2>
              <span className="text-sm opacity-70">{task.status}</span>
            </div>
            {task.description && (
              <p className="mt-1 text-sm opacity-80">{task.description}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}