import { useState } from "react";
import "./App.css";
import { amountAdded, increment } from "./features/couter/counter-slice";
import { useAppDispatch, useAppSelector } from "./hooks";

function App() {
  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* <button onClick={() => dispatch(increment())}>
            count is: {count}
          </button> */}
        </p>
        <p>
          <button onClick={() => dispatch(amountAdded(3))}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
