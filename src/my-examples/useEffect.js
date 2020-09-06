import React, { useEffect, useState } from "react";

function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState({});
  const [pos, setPos] = useState({ x: 0, y: 0 });

  console.log("Component render");

  useEffect(() => {
    console.log("render on state change");
  });

  const mouseMoveHandler = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    console.log("Component did mount");
    window.addEventListener("mousemove", mouseMoveHandler);

    // do after execution of useEffect
    return () => {
      window.removeEventListener(mouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    console.log("fetch data of slected resource type + re-rendering");

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log("do something after type changed");
    };
  }, [type]);

  return (
    <div>
      <h1>Resource: {type}</h1>

      <button
        onClick={() => {
          setType("users");
        }}
      >
        Users
      </button>

      <button
        onClick={() => {
          setType("todos");
        }}
      >
        Todos
      </button>

      <button
        onClick={() => {
          setType("posts");
        }}
      >
        Posts
      </button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
