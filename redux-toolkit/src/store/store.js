import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "../api/todosApi";
import counterSlice from "./slice/counter/counterSlice";
import pokemonSlice from "./slice/pokemon/pokemonSlice";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		pokemon: pokemonSlice,
		[todosApi.reducerPath]: todosApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todosApi.middleware),
});
