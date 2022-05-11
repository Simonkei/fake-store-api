<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-toolbar dense color="transparent" flat>
            <v-toolbar-title
              @click="$router.push('/')"
              class="primary-text title font-weight-bold"
              ><v-icon large color="primary">mdi-menu</v-icon>
              Shop.
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn outlined color="primary" icon>
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
