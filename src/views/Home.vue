<template>

  <v-sheet style="background-color: transparent; height: 100vh;" class="d-flex flex-wrap">
    <Card 
      class="ma-5 mb-2"
      v-for="pokemon in readyPokemons"
      :key="pokemon.id"
      :id="pokemon.id"
      :name="pokemon.name"
      :types="pokemon.types"
      :stats="pokemon.stats"
    />

    <br />
    <div style="position: relative; bottom: 0; width: 95vw;">
      <v-pagination
      style="margin: 10px;"
      active-color="#212121"
      density="compact"
      variant="plain"
      v-model="pagination.page"
      :length="Math.ceil(filteredPokemons.length / pagination.elementsPerWidth)"
      @update:model-value="updatePage"
      ></v-pagination>
    </div>
  </v-sheet>
    
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
      filteredPokemons: [] as Pokemon[],
      readyPokemons: [] as Pokemon[],
      pagination: {
        page: 1,
        elementsPerWidth: 12
      }
    }),

    methods: {

      async updatePage(pageNumber: number) {

        let pageIndex = pageNumber - 1;
        let from = pageIndex * this.pagination.elementsPerWidth;
        let till = from + this.pagination.elementsPerWidth;

        this.filteredPokemons = this.pokemons

        //Filter by name.
        .filter((e: any) => e.name.includes(this.search))
        //Filter by type.
        .filter((pokemon: any) => this.types.every((pokeType: any) => 
          pokeType == pokemon.types[0].type.name || pokeType == pokemon.types[1]?.type.name
        ))

        this.readyPokemons = this.filteredPokemons
        .sort((a, b) => a.id - b.id)
        .slice(from, till);
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
      ...mapState(['search', 'types', 'pokemons']),
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
      this.updatePage(this.pagination.page);
    },
    
  }

</script>