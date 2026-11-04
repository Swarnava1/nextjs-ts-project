import { prisma } from "../lib/prisma";

async function main() {
  await prisma.task.deleteMany();
  await prisma.task.createMany({
    data: [
      { title: "Set up the project", description: "Next.js, TypeScript, and GitHub", status: "done" },
      { title: "Build the task list", status: "in-progress" },
      { title: "Add a task form", description: "Now backed by a real database", status: "todo" },
    ],
  });
}

main().then(() => prisma.$disconnect());
