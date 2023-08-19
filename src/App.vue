<template>
  <v-layout>
    
    <v-main>
      <NavBar />
      <router-view />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  import NavBar from "../src/components/NavBar.vue"
</script>
