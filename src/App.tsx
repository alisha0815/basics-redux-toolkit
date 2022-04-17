import { useState } from "react";
import "./App.css";
import { amountAdded, increment } from "./features/couter/counter-slice";
import { useFetchBreedsQuery } from "./features/dogs/dog-api-slice";
import { useAppDispatch, useAppSelector } from "./hooks";

function App() {
  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();
  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

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

        {/* dog fetch */}
        <div>
          <p>Dogs to fetch:</p>
          <select
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <div>
          <p>Number of dogs fetched: {data.length}</p>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                </tr>
              </thead>
              {console.log(data)}
              <tbody>
                {data.map((breed) => (
                  <tr key={breed.id}>
                    <td>{breed.name}</td>
                    <td>
                      <img
                        src={breed.image.url}
                        alt={breed.name}
                        height={250}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
