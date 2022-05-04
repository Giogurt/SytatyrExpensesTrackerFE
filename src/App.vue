<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon />
      <v-app-bar-title> Sytatyr Expense Tracker </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        color="error"
      >
        <span>Logout</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
