<template>
  <div class="pa-4" v-if="data">
    <v-row>
      <v-col
        lg="3"
        md="4"
        sm="6"
        xs="12"
        v-for="data in data.data"
        :key="data.id"
      >
        <v-card
          rounded="0"
          elevation="0"
          @click="$router.push(`/product/${data.id}`)"
        >
          <v-card-text>
            <v-img contain :src="data.image" height="200px"></v-img>
          </v-card-text>
          <v-card-text>{{ data.price }} $</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
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
};
</script>
