<template>

  <v-sheet class="d-flex align-content-start flex-wrap mb-10">
    <Card 
      class="ma-5"
      v-for="pokemon in readyPokemons"
      :key="pokemon.id"
      :id="pokemon.id"
      :name="pokemon.name"
      :types="pokemon.types"
      :stats="pokemon.stats"
    />
    
  </v-sheet>
  
  <v-pagination
    class="pagination"
    v-model="pagination.page"
    :length="Math.ceil(706 / pagination.pageSize)"
    @update:model-value="updatePage"
  ></v-pagination>
    
</template>

<script lang="ts">

  import { Pokemon } from "@/interfaces/index";
  import Card from "@/components/Card.vue";
  import useAppStore from '@/store/app'

  // const { search } = useAppStore();
  
  export default {
    
    components: {
      Card
    },

    data: () => ({
      pokemons: [] as Pokemon[],
      readyPokemons: [] as Pokemon[],
      // search: search,
      pagination: {
        page: 1,
        pageSize: 12,
      }
    }),

    methods: {
      async getPokemons() {
        await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${0}&limit=${706}`)
        .then(res => res.json())
        .then(res => res.results)
        .then(res => this.getPokemonsDetail(res))
      },

      async updatePage(pageNumber: number) {

        let pageIndex = pageNumber - 1;
        let from = pageIndex * this.pagination.pageSize;
        let till = from + this.pagination.pageSize;

        this.readyPokemons = this.pokemons.sort((a, b) => a.id - b.id).slice(from, till);
      },

      getPokemonsDetail(pokemonArray: Pokemon[]) {
        pokemonArray.forEach(async(pokemon) => {
          await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then(res => res.json())
          .then(res => this.pokemons.push(res))
        });
      }
    },

    async mounted() {
      this.getPokemons()
      setTimeout(() => {
        this.updatePage(this.pagination.page);
      }, 1000);
    },
  }

</script>
