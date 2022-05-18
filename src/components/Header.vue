<template>
  <div>
    <v-app-bar app color="#75B79E" dark>
      <v-app-bar-nav-icon @click="drawer = true" />
      <v-app-bar-title>Expenses Tracker</v-app-bar-title>

      <v-btn class="ma-1" @click="handleClickOnExpenses" rounded text dark>
        <span>Expenses</span>
      </v-btn>
      <v-btn class="ma-1" @click="handleClickOnReports" rounded text dark>
        <span>Reports</span>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        class="ma-1"
        target="_blank"
        rounded
        text
        dark
        @click="logout()"
      >
        <span>Logout</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="color: #75B79E text--accent-4"
        >
          <v-list-item @click="handleClickOnExpenses">
            <v-list-item-icon>
              <v-icon>mdi-cash-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Expenses</v-list-item-title>
          </v-list-item>

          <v-list-item @click="handleClickOnReports">
            <v-list-item-icon>
              <v-icon>mdi-file-chart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Reports</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    test: { type: String, required: false, default: "DX"},
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    logout(){
      this.$store.dispatch("signout");
      this.$router.push("/");
      location.reload();
    },
    handleClickOnReports() {
      this.$router.push("/reports");
    },
    handleClickOnExpenses() {
      this.$router.push("/expenses");
    },
  },
};
</script>
<style></style>
