import StatementTable from "@/components/StatementTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1 className="font-bold text-4xl">Bank Statement Viewer</h1>
        <StatementTable />
      </section>
    </main>
  );
}
