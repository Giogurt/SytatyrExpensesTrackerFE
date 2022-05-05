<template>
  <v-app>
    <v-app-bar app color="#75B79E" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-app-bar-title>Expenses Tracker </v-app-bar-title>

      <v-btn
        class="ma-1"
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        rounded
        text
        dark
      >
        <span>Expenses</span>
      </v-btn>
      <v-btn
        class="ma-1"
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        rounded
        text
        dark
      >
        <span>Reports</span>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        class="ma-1"
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        rounded
        text
        dark
      >
        <span>Logout</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="color: #75B79E text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cash-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Expenses</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-file-chart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Reports</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>