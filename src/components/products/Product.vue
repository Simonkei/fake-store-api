<template>
  <div>
    <v-container>
      <v-row v-if="data" justify="center">
        <v-col lg="4" md="4">
          <v-card rounded="0" elevation="0">
            <v-card-text>
              <v-img contain height="650px" :src="data.data.image"> </v-img>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col style="padding: 0" lg="5" md="5">
          <v-row style="height: 100%" justify="center">
            <v-col cols="10">
              <p class="display-2 secondary--text font-weight-bold">
                {{ data.data.title }}
              </p>
              <p class="display-1 mt-12 font-weight-bold secondary--text">
                {{ data.data.price }} $
              </p>

              <v-expansion-panels tile class="mt-12" flat>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    >description</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    {{ data.data.description }}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>

            <v-col style="padding: 0" align-self="end" cols="10">
              <v-btn
                @click="$emit('hello', data.data.id), $emit('loading')"
                tile
                large
                width="100%"
                style="text-transform: none"
                dark
              >
                Add to cart
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <Loader v-else />
      <v-divider v-if="data" class="primary mt-8"></v-divider>
    </v-container>
  </div>
</template>

<script>
import Loader from "../layout/Loader.vue";
import axios from "axios";
export default {
  data() {
    return {
      data: null,
    };
  },
  components: {
    Loader,
  },
  created() {
    axios
      .get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
      .then((response) => (this.data = response))
      .catch((err) => console.log(err));
  },
};
</script>
