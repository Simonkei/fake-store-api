<template>
  <v-app id="app">
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "../src/components/layout/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
html {
  overflow: auto;
}
#app {
  background-color: rgb(231, 227, 224);
}
</style>
