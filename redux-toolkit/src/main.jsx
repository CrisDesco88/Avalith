import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PokemonApp } from "./PokemonApp";
import { TodoApp } from "./TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <App /> */}
			{/* <PokemonApp/> */}
			<TodoApp/>
		</Provider>
	</React.StrictMode>
);
