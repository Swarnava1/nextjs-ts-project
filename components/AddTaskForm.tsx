import { addTask } from "@/app/actions";

export default function AddTaskForm() {
  return (
    <form action={addTask} className="flex gap-2">
      <input
        type="text"
        name="title"
        required
        placeholder="What needs doing?"
        className="flex-1 rounded-lg border bg-transparent px-3 py-2"
      />
      <button
        type="submit"
        className="rounded-lg border px-4 py-2 font-medium hover:opacity-70"
      >
        Add
      </button>
    </form>
  );
}