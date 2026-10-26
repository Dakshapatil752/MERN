```jsx
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [fileContent, setFileContent] = useState("");

  // Write data to a file
  const writeFile = () => {
    const blob = new Blob([text], { type: "text/plain" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "myfile.txt";

    link.click();

    URL.revokeObjectURL(url);
  };

  // Read data from a file
  const readFile = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      setFileContent(e.target.result);
    };

    reader.readAsText(file);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>React File Read & Write</h1>

      <h2>Write to File</h2>

      <textarea
        rows="5"
        cols="50"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />
      <br />

      <button onClick={writeFile}>
        Write File
      </button>

      <hr />

      <h2>Read from File</h2>

      <input
        type="file"
        accept=".txt"
        onChange={readFile}
      />

      <h3>File Content:</h3>

      <p>{fileContent}</p>
    </div>
  );
}

export default App;
```
