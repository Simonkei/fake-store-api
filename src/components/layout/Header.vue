<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-toolbar dense color="transparent" flat>
            <v-toolbar-title
              id="link"
              @click="$router.push('/')"
              class="primary-text display-1 font-weight-bold"
            >
              Fake
              <v-divider class="white"></v-divider>
            </v-toolbar-title>
            <v-toolbar-title
              @click="$router.push('/')"
              id="link"
              class="white--text display-1 font-weight-bold"
            >
              Store
              <v-divider class="primary"></v-divider>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-badge :value="badge" :content="badge" dark overlap>
              <v-btn @click="drawer = !drawer" outlined color="primary" icon>
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-badge>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
    <v-navigation-drawer temporary app width="500" right v-model="drawer">
      <cart
        :id="id"
        @close-drawer="drawer = false"
        @cart-length="(l) => (badge = l)"
      />
    </v-navigation-drawer>
  </div>
</template>

<script>
import Cart from "../products/Cart.vue";
export default {
  data() {
    return {
      drawer: false,
      badge: 0,
    };
  },
  components: {
    Cart,
  },
  props: ["id"],
};
</script>

<style scoped>
#link {
  cursor: pointer;
}
</style>
