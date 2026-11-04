"use client";

import { useState } from "react";
import type { Task, TaskStatus } from "@/types/task";
import TaskList from "./TaskList";
import AddTaskForm from "@/components/AddTaskForm";

interface TaskBoardProps {
  initialTasks: Task[];
}

const nextStatus: Record<TaskStatus, TaskStatus> = {
  todo: "in-progress",
  "in-progress": "done",
  done: "todo",
};

export default function TaskBoard({ initialTasks }: TaskBoardProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  function addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      status: "todo",
      createdAt: new Date().toISOString().slice(0, 10),
    };
    setTasks((prev) => [newTask, ...prev]);
  }

  function cycleStatus(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: nextStatus[task.status] } : task
      )
    );
  }

  function deleteTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className="space-y-6">
      <AddTaskForm onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onCycleStatus={cycleStatus}
        onDelete={deleteTask}
      />
    </div>
  );
}