import React from "react";
import { MainApp } from "./10-useContext/MainApp";
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { FormWithHook } from './02-useEffect/FormWithHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import {TodoApp} from "./09-reducer/TodoApp";

import "./App.css"

function App() {
  return (
    <div className="d-flex flex-column w-50 my-0 mx-auto justify-content-center vh-100">
      <h1>Hooks App</h1>
      <hr />
      <MainApp/>
    </div>
  );
}

export default App;
