import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemon, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
	return async (dispatch) => {
		dispatch(startLoadingPokemons());

		// const res = await fetch(
		// 	`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
		// );
		// const data = await res.json();
		const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

		dispatch(setPokemon({ pokemon: data.results, page: page }));
	};
};
