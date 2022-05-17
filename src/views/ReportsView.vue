<template>
  <div>
    <Header/>
    <Report :dayExpenses="dayExpenses" :monthExpenses="monthExpenses"/>
    <Footer/>
  </div>
</template>

<script>
import { getDailyExpenses } from "@/services/ExpensesServices.js";
import Header from "@/components/Header.vue";
import Report from "@/components/Report.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Reports",
  components: { Header, Report, Footer },
  data: () => ({
    dayExpenses: [
      {
        id: 0,
        date: "2021",
        amount: 0,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      }
    ],
    monthExpenses: [
      {
        id: 0,
        date: new Date().getFullYear(),
        amount: 0,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 1,
        date: new Date().getFullYear(),
        amount: 1,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 2,
        date: new Date().getFullYear(),
        amount: 2,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 3,
        date: new Date().getFullYear(),
        amount: 3,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 4,
        date: new Date().getFullYear(),
        amount: 4,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 5,
        date: new Date().getFullYear(),
        amount: 5,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 6,
        date: new Date().getFullYear(),
        amount: 6,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 7,
        date: new Date().getFullYear(),
        amount: 7,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 8,
        date: new Date().getFullYear(),
        amount: 8,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
      {
        id: 9,
        date: new Date().getFullYear(),
        amount: 9,
        recipient: "Caffenio",
        category: "Cafe XD",
        reason: "Tenia hambre",
        method: "Paypal",
        notes: "No lo haré de nuevo",
      },
    ]
  }),
  
  async created(){await getDailyExpenses()},
};
</script>
<style></style>
