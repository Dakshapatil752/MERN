import { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => {
        if (!response.ok) throw new Error("Request failed");
        return response.json();
      })
      .then(setPosts)
      .catch(() => setError("Could not load posts."));
  }, []);

  return (
    <main>
      <h1>Posts from API</h1>
      {error && <p role="alert">{error}</p>}
      {posts.map((post) => <article key={post.id}><h3>{post.title}</h3><p>{post.body}</p></article>)}
    </main>
  );
}
