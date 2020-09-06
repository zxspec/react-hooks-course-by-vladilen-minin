import React, { useState, useMemo, useEffect } from "react";

function complexCalculation(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

function App() {
  console.log("render component");
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? "darkred" : "black",
    };
  }, [colored]);

  const computed = useMemo(() => complexCalculation(number), [number]);
  useEffect(() => {
    console.log("styles changed");
  }, [styles]);

  return (
    <div>
      <h1 style={styles}>Calculated value: {number}</h1>
      <h1 style={styles}>Computed value: {computed}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => {
          setNumber((prev) => prev + 1);
        }}
      >
        Increase
      </button>
      <button
        className={"btn btn-danger"}
        onClick={() => {
          setNumber((prev) => prev - 1);
        }}
      >
        Decrease
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => {
          setColored((prev) => !prev);
        }}
      >
        Change headers color
      </button>
    </div>
  );
}

export default App;
