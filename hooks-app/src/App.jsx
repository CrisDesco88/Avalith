import React from "react";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import "./App.css"
function App() {
  return (
    <div className="d-flex flex-column w-50 my-0 mx-auto justify-content-center vh-100">
      <h1>Hooks App</h1>
      <hr />
      <SimpleForm />
    </div>
  );
}

export default App;
