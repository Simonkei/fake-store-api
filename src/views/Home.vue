<template>
  <div class="home">
    <v-container>
      <product-card />
    </v-container>
  </div>
</template>

<script>
import ProductCard from "../components/products/ProductCard.vue";

export default {
  name: "Home",
  components: {
    ProductCard,
  },
};
</script>
