import React from "react";
import { useAlert } from "./my-alert/AlertContext";

export default function Main() {
  const { toggle } = useAlert();

  return (
    <>
      <h1>Hi from Context Example</h1>
      <button onClick={toggle} className="btn btn-success">
        Show alert
      </button>
    </>
  );
}
