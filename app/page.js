import Form from "./components/Form";

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
  // improved structure
      <h1>🔮 Project Astro</h1>
      <p>AI Kundli Generator</p>

      <Form />
    </div>
  );
}
