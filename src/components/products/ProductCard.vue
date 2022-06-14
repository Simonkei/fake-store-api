<template>
  <v-col lg="3" md="4" sm="6" xs="12">
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
</template>

<script>
export default {
  props: ["data"],
};
</script>
