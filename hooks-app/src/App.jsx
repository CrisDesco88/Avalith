import React from "react";
//import { FormWithHook } from "./02-useEffect/FormWithHook";
import { Layout } from "./05-useLayoutEffect/Layout";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
import "./App.css"
function App() {
  return (
    <div className="d-flex flex-column w-50 my-0 mx-auto justify-content-center vh-100">
      <h1>Hooks App</h1>
      <hr />
      <Layout />
    </div>
  );
}

export default App;
