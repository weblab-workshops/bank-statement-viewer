"use client";

import { useState } from "react";

export default function StatementItem({ data }) {
  console.log(data);
  const [category, setCategory] = useState(data.category);
  const desc = data.description;
  const date = data.transactionDate;
  return (
    <div className="p-2 bg-black">
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="text-xl font-bold bg-transparent"
      />
      <p>{desc}</p>
      <span>{date}</span>
    </div>
  );
}
