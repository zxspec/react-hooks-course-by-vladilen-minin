import React, { useEffect, useState, useRef } from "react";

function App() {
  console.log("render component");
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <h1>Render count: {renderCount.current}</h1>
      <h2>Previous input value: {prevValue.current}</h2>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus input
      </button>
    </div>
  );
}

export default App;
