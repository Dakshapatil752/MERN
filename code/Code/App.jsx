```jsx
import React, { useState } from "react";

function App() {
  // State to store the written data
  const [name, setName] = useState("");

  // Write data
  const handleWrite = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Read and Write in React</h1>

      {/* Write */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleWrite}
      />

      {/* Read */}
      <h2>Hello, {name}</h2>
    </div>
  );
}

export default App;
```
