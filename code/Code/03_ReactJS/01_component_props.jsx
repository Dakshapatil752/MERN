function Welcome({ name = "Student" }) {
  return <h2>Welcome, {name}!</h2>;
}

export default function App() {
  return (
    <main>
      <h1>React Components and Props</h1>
      <Welcome name="Daksha" />
      <Welcome name="Rahul" />
    </main>
  );
}
