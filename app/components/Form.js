"use client";

import { useState } from "react";

export default function Form() {
  const [result, setResult] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/chat", {
      method: "POST"
    });

    const data = await res.json();
    setResult(data.reply);
  }
// form component added
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter Name" /><br /><br />
        <input type="date" /><br /><br />

        <button type="submit">Generate Kundli</button>
      </form>

      <p style={{ marginTop: 20 }}>
        {result}
      </p>
    </div>
  );
}
