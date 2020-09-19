import React from "react";
import Main from "./Main";
import { AlertProvider } from "./my-alert/AlertContext";
import Alert from "./my-alert/Alert";

function App() {
  return (
    <AlertProvider>
      <div className="container pt-3">
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  );
}

export default App;
