import React, { useState } from "react";

function computeInitialCounter() {
  console.log("... calculations");
  return Math.trunc(Math.random() * 20);
}

function App() {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitialCounter()); // would be executed on each re-rendring
  const [counter, setCounter] = useState(() => computeInitialCounter());
  const [state, setState] = useState({
    title: "counter",
    date: Date.now(),
  });

  function increment() {
    setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    // setCounter(counter + 1); // would not work
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function changeTitle() {
    setState((prevState) => ({ ...prevState, title: "New Title" }));
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Increase
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Decrease
      </button>
      {/* state as object */}
      {/* <button
        onClick={() => setState({ title: "New Title" })}
        className="btn btn-default"
      > */}
      <button onClick={changeTitle} className="btn btn-default">
        Change Title
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
