import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#020401",
        secondary: "#10160c",
        accent: colors.indigo.base, //
      },
    },
  },
});
