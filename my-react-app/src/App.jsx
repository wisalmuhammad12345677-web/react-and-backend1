
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://192.168.10.51:3000/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Wisal</h1>
      <h3>JOKES: {jokes.length}</h3>

      {error && <p>Error: {error}</p>}

      {jokes.map((item) => (
        <p key={item.id}>{item.joke}</p>
      ))}
    </div>
  );
}

export default App;
