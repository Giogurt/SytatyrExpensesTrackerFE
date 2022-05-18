<template>
  <v-footer absolute padless>
    <v-col cols="12" class="justify-center align-center text-center">
      {{ new Date().getFullYear() }} — Sytatyr
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    //
  }),
};
</script>