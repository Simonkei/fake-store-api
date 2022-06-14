<template>
  <v-container>
    <v-row>
      <v-col>
        <v-list>
          <v-list-item>
            <v-row
              ><v-col cols="10"><p class="display-1">Cart</p></v-col>
              <v-col class="ml-4" cols="1"
                ><v-btn
                  @click="$emit('close-drawer')"
                  large
                  color="primary"
                  icon
                  ><v-icon>mdi-close</v-icon></v-btn
                >
              </v-col>
            </v-row></v-list-item
          >
          <v-list-item v-if="cart.length <= 0">
            <v-row class="text-center title">
              <v-col> Your cart is empty </v-col>
            </v-row>
          </v-list-item>
          <v-list-item class="my-2" v-for="product in cart" :key="product.id">
            <v-row justify="center" align-content="center">
              <v-col cols="2">
                <v-img
                  contain
                  height="40"
                  width="40"
                  :src="product.image"
                ></v-img>
              </v-col>
              <v-col cols="7">
                {{ product.title }}
              </v-col>

              <v-col class="font-weight-bold" cols="3">
                {{ product.price }} $
              </v-col>
            </v-row>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-row class="d-flex align-end flex-column">
      <v-col>
        <v-btn
          v-if="total"
          absolute
          tile
          large
          width="95%"
          style="text-transform: none; margin-left: auto; margin-right: auto"
          dark
          :bottom="true"
        >
          checkout {{ total }} $
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cart: [],
      total: null,
    };
  },
  props: ["id"],
  watch: {
    id(id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => this.cart.push(response.data))
        .catch((err) => console.log(err));
    },
    cart(cart) {
      const sum = cart.reduce((accumulator, object) => {
        return accumulator + object.price;
      }, 0);
      this.total = sum;
      this.$emit("cart-length", cart.length);
    },
  },
};
</script>
