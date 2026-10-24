export default function Home() {
  const title: string = "Hello Next.js & TypeScript!";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-blue-600">{title}</h1>
      <p className="mt-4 text-gray-600">
        My development environment is fully set up!
      </p>
    </main>
  );
}