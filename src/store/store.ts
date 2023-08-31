import Vuex from 'vuex';
import { Pokemon } from '@/interfaces';
import { GET_POKEMON } from '@/actions';

export default new Vuex.Store({
  state: {
    pokemons: [] as Pokemon[],
    search: "",
    types: [],
    profilePick: ""
  },

  mutations: {
    setPokemons(state, newVal) {
      state.pokemons = newVal;
    },

    async getPokemons(state) {

      let pokemonList = [] as any[];

      await fetch(`${GET_POKEMON}/?offset=${0}&limit=${706}`)
      .then(res => res.json())
      .then(res => res.results)
      .then(res => pokemonList = res)

      pokemonList.forEach(async(pokemon) => {
        await fetch(`${GET_POKEMON}/${pokemon.name}`)
        .then(res => res.json())
        .then(res => state.pokemons.push(res))
      });
    },

    setSearch(state, newVal) {
      state.search = newVal;
    },
    setTypes(state, newVal) {
      state.types = newVal;
    },
    setProfilePick(state, newVal) {
      state.profilePick = newVal;
    }
  },

  getters: {
    pokemons: (state) => state.pokemons,
    name: (state) => state.search,
    types: (state) => state.types,
    profilePick: (state) => state.profilePick,
  }
});