<template>

  <v-card class="mx-auto" width="300" height="175" :color="mainColor + 'AA'">
    <v-card
      style="height: 120px; padding-left: 15px; padding-top: 5px"
      elevation="0"
      :color="mainColor"
    >
      <v-card-title style="color: #212121;" class="text-h6 pa-0 mb-2 d-flex flex-row">
        {{ name[0].toUpperCase() + name.slice(1) }}
        <v-spacer />
        <v-btn class="ma-1 mr-3" variant="tonal" size="small" disabled density="comfortable"> #{{ id }} </v-btn>
      </v-card-title>

      <v-img
        :src="'src/assets/img/pokemons/poke_' + id + '.gif'"
        width="200px"
        height="100px"
        style="position: absolute; top: 12px; right: -30px"
      ></v-img>

      <v-card-subtitle v-for="type in readyTypes" class="pa-0 pb-1" >
        <v-icon size="small"> mdi-pokeball </v-icon>
        {{ type[0].toUpperCase() + type.slice(1) }}
      </v-card-subtitle>
    </v-card>

    <v-card-actions>
      <v-spacer />
      <ExtendedCard
        :id='id'
        :name='name[0].toUpperCase() + name.slice(1)'
        :color='mainColor'
        :stats='stats'
      />
    </v-card-actions>
  </v-card>
</template>

<script lang='ts'>

  import ExtendedCard from './ExtendedCard.vue';

  export default {
    props: ["id", "name", "types", "stats"],
    components: { ExtendedCard },
    data() {
      return {
        readyTypes: [] as any[],
        colorTypes: {
          normal: "#A8A090",
          fighting: "#A05038",
          flying: "#98A8F0",
          poison: "#B058A0",
          ground: "#E9D6A4",
          rock: "#B8A058",
          bug: "#A8B820",
          ghost: "#6060B0",
          steel: "#A8A8C0",
          fire: "#F05030",
          water: "#3899F8",
          grass: "#78C850",
          electric: "#F8D030",
          psychic: "#F870A0",
          ice: "#58C8E0",
          dragon: "#7860E0",
          dark: "#2F4F4F",
          fairy: "#E79FE7",
          unknown: "#FFF",
          shadow: "#808080",
        } as any,
      };
    },

    computed: {
      mainColor() {
        return this.colorTypes[this.readyTypes[0]];
      },
    },
    
    mounted() {
      this.types.forEach((element: any) =>
        this.readyTypes.push(element.type.name)
      );
    },
  };
</script>
