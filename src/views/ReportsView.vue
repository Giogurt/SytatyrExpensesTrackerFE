<template>
  <div>
    <Header/>
    <Report :dayExpenses="dayExpenses" :monthExpenses="monthExpenses"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Report from "@/components/Report.vue";
import Footer from "@/components/Footer.vue";
import { mapState } from "vuex";
import { getAllExpenses } from "@/services/ExpensesServices.js";

export default {
  name: "Reports",
  components: { Header, Report, Footer },
  computed: mapState({
    token(state){
      return state.token;
    },
    id(state){
      return state.userId;
    }
  }),

  data: () => ({
    dayExpenses: [],  
    monthExpenses: []
  }),

  methods: {
    async getDayExpenses() {
      let response = await getAllExpenses(this.token, this.id);
      this.dayExpenses = response;
      console.log(response);
    },

  },
  
  async created() {
    await this.getDayExpenses();
  },
};
</script>
<style></style>
