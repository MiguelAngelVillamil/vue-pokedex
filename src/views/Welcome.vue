<template>

  <v-card-title class="text-h6 text-md-h5 text-lg-h4">Title</v-card-title>
  <v-card-text>
    Body text
  </v-card-text>
    
</template>

<script lang="ts">

  import { Pokemon } from "@/interfaces/index";
  import Card from "@/components/Card.vue";
  import { mapState } from "vuex";

  export default {
    
    components: {
      Card
    },

    data: () => ({
      pokemons: [] as Pokemon[],
      filteredPokemons: [] as Pokemon[],
      readyPokemons: [] as Pokemon[],
      pagination: {
        page: 1,
        elementsPerWidth: 12
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
        let from = pageIndex * this.pagination.elementsPerWidth;
        let till = from + this.pagination.elementsPerWidth;

        this.filteredPokemons = this.pokemons

        //Filter by name.
        .filter(e => e.name.includes(this.search))
        //Filter by type.
        .filter(pokemon => this.types.every((pokeType: any) => 
          pokeType == pokemon.types[0].type.name || pokeType == pokemon.types[1]?.type.name
        ))

        this.readyPokemons = this.filteredPokemons
        .sort((a, b) => a.id - b.id)
        .slice(from, till);
      },

      getPokemonsDetail(pokemonArray: Pokemon[]) {
        pokemonArray.forEach(async(pokemon) => {
          await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then(res => res.json())
          .then(res => this.pokemons.push(res))
        });
      },

      calcPokemonsPerPage() {
        let windowWidth = window.innerWidth;
       
        this.pagination.elementsPerWidth = 24;
        
        if (windowWidth <= 1900) {
          this.pagination.elementsPerWidth = 18;
        }
        if (windowWidth <= 1850) {
          this.pagination.elementsPerWidth = 15;
        }
        if (windowWidth <= 1600) {
          this.pagination.elementsPerWidth = 12;
        }
        if (windowWidth <= 1300) {
          this.pagination.elementsPerWidth = 9;
        }
        if (windowWidth <= 970) {
          this.pagination.elementsPerWidth = 6;
        }
        if (windowWidth <= 660) {
          this.pagination.elementsPerWidth = 3;
        }

      }
      
    },

    computed: {
      ...mapState(['search', 'types']),
  	},

    watch: {
      search() {
        this.pagination.page = 1;
        this.updatePage(this.pagination.page);
      },
      types() {
        this.pagination.page = 1;
        this.updatePage(this.pagination.page);
      }
    },

    async mounted() {
      this.calcPokemonsPerPage();
      this.getPokemons();

      setTimeout(() => {
        this.updatePage(this.pagination.page);
      }, 1000);
    },
    
  }

</script>
