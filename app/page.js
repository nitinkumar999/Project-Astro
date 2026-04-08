
---

## 📄 `/app/page.js`

```js
export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>🔮 Project Astro</h1>
      <p>AI Kundli Generator (Demo)</p>

      <form>
        <input placeholder="Enter Name" /><br /><br />
        <input type="date" /><br /><br />
        <button type="submit">Generate Kundli</button>
      </form>

      <p style={{ marginTop: 20 }}>
        Output: Your kundli will appear here.
      </p>
    </div>
  );
}
