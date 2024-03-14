import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number | null>(null);

  const handleClink = async (): Promise<void> => {
    const data = await fetch("http://localhost:4000/");
    const res: { cnt: number } = await data.json();
    setCount(res.cnt);
  };

  return (
    <div className="card">
      <button onClick={handleClink}>Get random number</button>
      <div className="cnt">{count ?? count}</div>
    </div>
  );
}

export default App;
