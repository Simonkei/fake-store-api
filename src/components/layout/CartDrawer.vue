<template>
  <div>
    <v-navigation-drawer :value="drawerVal" width="500px" right app>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["drawerVal"],
};
</script>
