import { useState } from "react";
import "./App.css";
import { useAppSelector } from "./hooks";

function App() {
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button">count is: {count}</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
