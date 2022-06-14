<template>
  <div>
    <v-col>
      <p class="title">Category:</p>

      <v-radio-group v-model="radioGroup">
        <v-radio
          class="text-capitalize"
          v-for="(radio, i) in radio"
          :key="i"
          :label="radio.label"
          :value="i"
          @change="$emit('sort-category', radio.label)"
        ></v-radio>
      </v-radio-group>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioGroup: 0,
      radio: [
        { label: "all" },
        { label: "electronics" },
        { label: "jewelery" },
        { label: "men's clothing" },
        { label: "women's clothing" },
      ],
    };
  },
};
</script>
