"use client";

import { useState } from "react";

interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

export default function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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