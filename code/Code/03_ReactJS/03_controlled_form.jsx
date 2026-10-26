import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedName(name.trim());
  }

  return (
    <main>
      <h1>Student Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input value={name} onChange={(event) => setName(event.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedName && <p>Hello, {submittedName}!</p>}
    </main>
  );
}
