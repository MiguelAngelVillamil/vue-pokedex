<template >

  <v-img style="filter: drop-shadow(1px 0px 5px blue)" class="mt-6" height="150" :src="`src/assets/img/pokedexLogo.png`" alt="profilePick"></v-img>
  <!-- <v-card-text class="text-h5 pa-1 pl-5"> This is a personal mini-proyect coded in VueJS fetching the data from the PokeApi. I hope you like it,  </v-card-text> -->

  <v-card :max-width="selectedProfilePick ? 1000: 500" class="mt-16 mx-auto py-10 bg-grey-darken-4" elevation="4">

    <v-row>

      <v-col>
        <v-card-text v-if="!selectedProfilePick" class="text-h5 text-center pa-0 pb-10">
          <strong>Chose your Pokemon!</strong>
        </v-card-text>
        
        <v-row class="pa-3">
          <v-img class="img" :onClick="() => selectedProfilePick = 'abra' " height="60" src="@/assets/img/profiles/abra.png" alt="abra"></v-img>
      
          <v-img class="img" :onClick="() => selectedProfilePick = 'bullbasaur' " height="60" src="@/assets/img/profiles/bullbasaur.png" alt="bullbasaur"></v-img>
      
          <v-img class="img" :onClick="() => selectedProfilePick = 'caterpie' " height="60" src="@/assets/img/profiles/caterpie.png" alt="caterpie"></v-img>
      
          <v-img class="img" :onClick="() => selectedProfilePick = 'charmander' " height="60" src="@/assets/img/profiles/charmander.png" alt="charmander"></v-img>
        </v-row>
        
        <v-row class="pa-3">
          <v-img class="img" :onClick="() => selectedProfilePick = 'eevee' " height="60" src="@/assets/img/profiles/eevee.png" alt="eevee"></v-img>

          <v-img class="img" :onClick="() => selectedProfilePick = 'mankey' " height="60" src="@/assets/img/profiles/mankey.png" alt="mankey"></v-img>
      
          <v-img class="img" :onClick="() => selectedProfilePick = 'meowth' " height="60" src="@/assets/img/profiles/meowth.png" alt="meowth"></v-img>
      
          <v-img class="img" :onClick="() => selectedProfilePick = 'mew' " height="60" src="@/assets/img/profiles/mew.png" alt="mew"></v-img>
        </v-row>
        
        <v-row class="pa-3">
          <v-img class="img" :onClick="() => selectedProfilePick = 'pidgey' " height="60" src="@/assets/img/profiles/pidgey.png" alt="pidgey"></v-img>
      
          <v-img class="img" :onClick="() => selectedProfilePick = 'pikachu' " height="60" src="@/assets/img/profiles/pikachu.png" alt="pikachu"></v-img>

          <v-img class="img" :onClick="() => selectedProfilePick = 'psyduck' " height="60" src="@/assets/img/profiles/psyduck.png" alt="psyduck"></v-img>
      
          <v-img class="img" :onClick="() => selectedProfilePick = 'rattata' " height="60" src="@/assets/img/profiles/rattata.png" alt="rattata"></v-img>
        </v-row>
        
        <v-row class="pa-3">
          <v-img class="img" :onClick="() => selectedProfilePick = 'snorlax' " height="60" src="@/assets/img/profiles/snorlax.png" alt="snorlax"></v-img>
      
          <v-img class="img" :onClick="() => selectedProfilePick = 'squirtle' " height="60" src="@/assets/img/profiles/squirtle.png" alt="squirtle"></v-img>
      
          <v-img class="img" :onClick="() => selectedProfilePick = 'venonat' " height="60" src="@/assets/img/profiles/venonat.png" alt="venonat"></v-img>

          <v-img class="img" :onClick="() => selectedProfilePick = 'zubat' " height="60" src="@/assets/img/profiles/zubat.png" alt="zubat"></v-img>
        </v-row>

      </v-col>

      <v-col v-if="selectedProfilePick" cols="12" sm="5">
        <v-card elevation="0" class="mt-2 text-center bg-grey-darken-4">
          
            <v-img class="img mt-6" height="120" :src="`src/assets/img/profiles/${selectedProfilePick}.png`" alt="profilePick"></v-img>

            <v-card-title class="text-h4"> {{ selectedProfilePick[0]?.toUpperCase() + selectedProfilePick.slice(1) }} </v-card-title>

            <v-card-subtitle> Cutest pokemon in the world </v-card-subtitle>
            
            <v-card-actions class="pt-10 mb-2">
              <v-spacer /> <v-btn class="flex-grow-1" variant="tonal" :onClick="goHome">Log In</v-btn> <v-spacer />
            </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
  </v-card>


    
</template>

<script lang="ts">

  import { mapState, mapMutations } from "vuex";
  import router from "@/router";

  export default {

    data: () => ({
      selectedProfilePick: ""
    }),

    computed: {
      ...mapState(['pokemons']),
    },

    methods: {
      ...mapMutations(['setProfilePick', 'getPokemons']),

      updateProfilePick() {
        this.setProfilePick(this.selectedProfilePick)
      },

      goHome() {
        this.updateProfilePick();
        router.push('/home')
      }
    },

    mounted() {
      if(this.pokemons.length <= 0) this.getPokemons();
    },

  }

</script>

<style scoped>

.img {
  filter: drop-shadow(0px 0px 1px whitesmoke)
}


</style>
