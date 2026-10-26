const students = [
  { id: 1, name: "Daksha", course: "CS" },
  { id: 2, name: "Rahul", course: "IT" },
  { id: 3, name: "Priya", course: "AI-ML" }
];

export default function App() {
  return (
    <main>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name} — {student.course}</li>
        ))}
      </ul>
    </main>
  );
}
