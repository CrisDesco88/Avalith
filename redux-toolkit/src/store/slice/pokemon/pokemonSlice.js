import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    page:0,
    pokemons: []
};

export const pokemonSlice = createSlice({
        name: 'pokemon',
        initialState,
        reducers: {
        startLoadingPokemons: (state) => {
        state.isLoading = true;
        },
        setPokemon: (state, action) => {
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemon;
            state.isLoading = false;
        }
    },
});

export const {
startLoadingPokemons,
setPokemon
} = pokemonSlice.actions;

export default pokemonSlice.reducer;