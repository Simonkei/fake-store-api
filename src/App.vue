<template>
  <v-app id="app">
    <Header :id="productId" />
    <v-main> <router-view @hello="sayHello" /> </v-main>
  </v-app>
</template>

<script>
import Header from "../src/components/layout/Header.vue";
export default {
  data() {
    return {
      productId: null,
    };
  },
  components: {
    Header,
  },
  methods: {
    sayHello(id) {
      this.productId = id;
    },
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
