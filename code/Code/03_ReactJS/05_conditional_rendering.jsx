import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main>
      <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>
      <button onClick={() => setIsLoggedIn((current) => !current)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </main>
  );
}
