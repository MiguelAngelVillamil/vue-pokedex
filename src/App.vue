<template>
  <v-layout>
    <v-main>
      <NavBar v-if="!$route.meta.hideNavbar" />
      <router-view />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  import NavBar from "../src/components/NavBar.vue"
</script>
