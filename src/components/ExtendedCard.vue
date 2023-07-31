<template>
  <v-dialog transition="dialog-bottom-transition" width="410">
    <template v-slot:activator="{ props }">
      <v-btn color="black" v-bind="props">See Details</v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-toolbar :color="color" :title="name" />

        <v-img
          class="mt-8"
          :src="'src/assets/img/pokemons/poke_' + id + '.gif'"
          height="200px"
        />

        <v-container class="d-flex justify-center flex-wrap">
          <v-chip style="width: 110px; justify-content: center;" class="ma-2" variant="elevated" :color="color"> HP: {{ readyStats.hp }} </v-chip>
          <v-chip style="width: 110px; justify-content: center;" class="ma-2" variant="elevated" :color="color"> ATK: {{ readyStats.attack }} </v-chip>
          <v-chip style="width: 110px; justify-content: center;" class="ma-2" variant="elevated" :color="color"> DEF: {{ readyStats.defense }} </v-chip>
          <v-chip style="width: 110px; justify-content: center;" class="ma-2" variant="elevated" :color="color"> SPD: {{ readyStats.speed }} </v-chip>
          <v-chip style="width: 110px; justify-content: center;" class="ma-2" variant="elevated" :color="color"> SPL ATK: {{ readyStats.specialAttack }} </v-chip>
          <v-chip style="width: 110px; justify-content: center;" class="ma-2" variant="elevated" :color="color"> SPL DEF: {{ readyStats.specialDefense }} </v-chip>
        </v-container>

        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" :color="color" @click="isActive.value = false">Close Dialog</v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">

export default {
  props: ["id", "name", "types", "stats", "color"],
  data() {
    return {
      readyStats: {
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0
      }
    }
  },
  mounted() {
    this.stats.forEach((stat: any, index: number) => {
      if (index == 0) this.readyStats.hp = stat.base_stat;
      if (index == 1) this.readyStats.attack = stat.base_stat;
      if (index == 2) this.readyStats.defense = stat.base_stat;
      if (index == 3) this.readyStats.specialAttack = stat.base_stat;
      if (index == 4) this.readyStats.specialDefense = stat.base_stat;
      if (index == 5) this.readyStats.speed = stat.base_stat;
    })
  }
};
</script>