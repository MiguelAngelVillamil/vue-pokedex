<template>
  <v-layout>
    <NavBar />

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  import NavBar from "../src/components/NavBar.vue"
</script>
