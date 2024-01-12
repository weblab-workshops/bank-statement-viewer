import StatementItem from "./StatementItem";

async function getStatementHistory() {
  const response = await fetch("https://api.sampleapis.com/fakebank/accounts");
  const data = await response.json();
  return data;
}

export default async function StatementTable() {
  const statementHistory = await getStatementHistory();

  return (
    <section className="w-full mt-4 p-4 bg-gray-900">
      {statementHistory.map((itemData, key) => (
        <StatementItem data={itemData} key={key} />
      ))}
    </section>
  );
}
