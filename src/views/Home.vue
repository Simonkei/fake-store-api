<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col v-if="true" cols="2">
          <side-bar @sort-category="sort" />
        </v-col>
        <v-col>
          <v-row v-if="data">
            <product-card
              v-for="data in data.data"
              :key="data.id"
              :data="data"
            />
          </v-row>
          <loader v-else />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SideBar from "../components/layout/SideBar.vue";
import ProductCard from "../components/products/ProductCard.vue";
import axios from "axios";
import Loader from "../components/layout/Loader.vue";
export default {
  data() {
    return {
      data: null,
    };
  },
  created() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => (this.data = response))
      .catch((err) => console.log(err));
  },
  components: {
    ProductCard,
    SideBar,
    Loader,
  },
  methods: {
    sort(category) {
      if (category === "all") {
        this.data = null;
        axios
          .get("https://fakestoreapi.com/products")
          .then((response) => (this.data = response))
          .catch((err) => console.log(err));
      } else {
        this.data = null;
        axios
          .get(`https://fakestoreapi.com/products/category/${category}`)
          .then((response) => (this.data = response))
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>
