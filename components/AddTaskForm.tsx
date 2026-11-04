"use client";

import { useActionState } from "react";
import { addTask, type AddTaskState } from "@/app/actions";

const initialState: AddTaskState = {};

export default function AddTaskForm() {
  const [state, formAction, pending] = useActionState(addTask, initialState);

  return (
    <form action={formAction} className="space-y-2">
      <div className="flex gap-2">
        <input
          type="text"
          name="title"
          placeholder="What needs doing?"
          className="flex-1 rounded-lg border bg-transparent px-3 py-2"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded-lg border px-4 py-2 font-medium hover:opacity-70 disabled:opacity-50"
        >
          {pending ? "Adding..." : "Add"}
        </button>
      </div>
      {state.error && (
        <p role="alert" className="text-sm text-red-500">
          {state.error}
        </p>
      )}
    </form>
  );
}